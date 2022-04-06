const express = require('express');
//2.创建路由对象
const router = express.Router();

const mysql = require('mysql');
const dbConfig = require('../db/dbconfig');
const userSQL = require('../db/usersql');

const pool = mysql.createPool(dbConfig.mysql);


//跳转注册页面
router.get('/',(req,res)=>{
    res.render('register.html');
})

router.post('/',(req,res)=>{
    let body = req.body;
    pool.getConnection(function (err,connection) {
        connection.query(userSQL.queryAll,function (err,result) {
            let isExist = false;
            if(result){ //获取用户列表，循环遍历判断当前用户是否存在
                for (let i=0;i<result.length;i++) {
                    if(result[i].username === body.username) {
                        isExist = true;
                    }
                }
            }
            let data = {};
            let isReg = isExist
            data.isreg = isReg; //如果isTrue布尔值为true则登陆成功 有false则失败
            if(isReg) {
                data.result = {
                    code: 1,
                    msg: '用户已存在'
                };//登录成功返回用户信息
            } else {
                connection.query(userSQL.insert, [body.username,body.password], function (err, result) {
                    if(result) {
                        data.result = {
                            code: 200,
                            msg: '注册成功'
                        };
                    } else {
                        data.result = {
                            code: -1,
                            msg: '注册失败'
                        };
                    }
                });
            }
            if(err) data.err = err;
            setTimeout(function () {
                JSON.stringify(data);
                res.send(data);
            },300);
            connection.release();
        })
    })
})

module.exports = router;