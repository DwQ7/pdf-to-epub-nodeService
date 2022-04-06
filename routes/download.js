const express = require('express');
const fs = require('fs');
const path = require('path');
const {urlencoded} = require("express");
const iconv = require('iconv-lite');
const bodyParser = require('body-parser');
//2.创建路由对象
const router = express.Router();
const urlencodedParser = bodyParser.urlencoded({ extended: false })

// router.get('/',(req,res)=>{
//     res.render('download.html');
// })
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


module.exports = router;