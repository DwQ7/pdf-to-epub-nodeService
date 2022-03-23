$(function () {
    // let str='';  //定义一个空变量用来存储密码
    // $('#password').keyup(function(){
    //     let value=$(this).val();	//输入的时候获取输入框的值
    //     str+=value.substr(value.length-1,1); //获取最后一个字符加到到str,因为除了最后一个字符，其他的已经为*
    //     $(this).val(value.replace(/./g,'*')) //输入框内容全部变为*
    //     console.log(str); //str即为输入框的内容
    // })
    $("#btnLogin").on('click',function () {
        console.log(1);
        const username = $("#email").val();
        const password = $("#password").val();
        $.ajax({
            type:'POST',
            url:'/login/Log',
            data:{
                'username':username,
                'password':password
            },
            dataType: 'text',
            success:function (data) {
                console.log(data);
                if(data !== 'err'){
                    console.log(data);
                    sessionStorage.setItem('username',data);
                    window.location.href ='/user';
                }else{
                    window.alert('error');
                }
            }
        })
    })
})