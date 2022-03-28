($(function () {
    //事件监听
    $('#btnRegister').on('click',function () {
        console.log(111);
        const username = $("#email").val();
        const password = $("#password").val();
        const repeat_password = $('#re_password').val();
        if(repeat_password!==password){
            alert("两次密码不一致");
        }
        else{
            $.ajax({
                type:'POST',
                url:'/register/Reg',
                data:{
                    'username':username,
                    'password':password,
                    'repeat_password':repeat_password
                },
                dataType: 'json',
                success:function (data) {
                    if(data.result.code === 200){
                        window.alert(data.result.msg);
                        setTimeout(function () {
                            window.location.href ='/login';
                        },500);
                    }
                    else if(data.result.code === 1){
                        window.alert('用户名已存在,返回登录或重新输入');
                    }else if(data.result.code === -1){
                        window.alert(data.result.msg);
                    }
                }
            })
        }
    })
}))