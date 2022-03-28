$(function () {
    //事件监听
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
                    sessionStorage.setItem('fileNum','1');
                    window.location.href ='/user';
                }else{
                    window.alert('error');
                }
            }
        })
    })
})