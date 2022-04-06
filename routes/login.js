const express = require('express');
const router = express.Router();

const mysql = require('mysql');
const dbConfig = require('../db/dbconfig');
const userSQL = require('../db/usersql');

const pool = mysql.createPool(dbConfig.mysql);

//登录
router.post('/',(req,res)=>{
    //获取客户端发来的数据
    let body = req.body;
    pool.getConnection(function (err,connection) {
        connection.query(userSQL.getUserById,body.username,function (err,result) {
            if(err){
                console.log(err);
            }
            result = JSON.stringify(result);
            result = JSON.parse(result);//把results字符串转为json对象
            if(result[0].password === body.password){
                req.session.username = body.username;
                res.send(body.username);
            }else{
                res.send("err");
                console.log(result[0].password);
            }
        })
    })
});

router.get("/LogOut", (req, res)=> {
    // 1.设置session的过期时间为0
    req.session.cookie.maxAge = 0;
    // 2.销毁指定的session
    req.session.username = "";
    // 3.销毁所有的session
    req.session.destroy();
    res.send("退出登录");
})




module.exports = router;
