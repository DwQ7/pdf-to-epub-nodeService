//1.导入express
const express = require('express');
//2.创建路由对象
const router = express.Router();
//3.封装/挂载路由

router.get('/',(req,res)=>{
    res.render('transition.html');
});

module.exports = router;