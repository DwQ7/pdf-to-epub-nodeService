const express = require('express');
//2.创建路由对象
const router = express.Router();

router.get('/',(req,res)=>{
        console.log(req.session.username);
        res.render('user.html',{
            username:req.session.username
        });
        // res.send('你好'+req.session.username+'欢迎回来');

})
module.exports = router;