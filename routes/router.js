//1.导入express
const express = require('express');
//2.创建路由对象
const router = express.Router();
//3.封装/挂载路由

router.get('/',(req,res)=>{
    if(req.session.username){  /*获取*/
        console.log(req.session.username);
        res.render('index.html',{
            username:req.session.username,
            home_url:"./user"
        });
        // res.send(req.session.username);
    }else{
        console.log('no');
        res.render('index.html',{
            username:'未登录',
            home_url:"./login"
        });
    }
})

router.post('/test',(req,res)=>{
    console.log(req.body);
    res.send('okk');
})

module.exports = router;
