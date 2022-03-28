const express = require('express');
const fs = require('fs');
const path = require('path');
const session = require('./session');
const {urlencoded} = require("express");
const iconv = require('iconv-lite');
const bodyParser = require('body-parser');
//2.创建路由对象
const router = express.Router();
const urlencodedParser = bodyParser.urlencoded({ extended: false })

router.get('/',(req,res)=>{
    res.render('download.html');
})
router.get('/downloadFile',(req,res)=>{
    console.log(req.query.filePath);
    res.download(''+req.query.filePath,err=>{
        if(err){
            res.send("下载失败！");
        }else{
            console.log("下载成功！");
        }
    });
})

// fs.readdirSync(pathName).forEach(files=>{
//     console.log(files);
// })
function readFile(MyUrl) {
    fs.readdir(MyUrl, (err, files) => {
        if (err) throw err
        files.forEach(file => {
            //拼接获取绝对路径，fs.stat(绝对路径,回调函数)
            let fPath = path.join(MyUrl, file);
            fs.stat(fPath, (err, stat) => {
                if (stat.isFile()) {
                    //stat 状态中有两个函数一个是stat中有isFile ,isisDirectory等函数进行判断是文件还是文件夹
                    console.log(file)
                }
                else {
                    readFile(fPath)
                }
            })
        })
    })
}

module.exports = router;