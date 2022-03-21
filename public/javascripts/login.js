$(function () {
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
                if(data === 'ok'){
                    window.location.href ='/user';
                }else{
                    window.alert('error');
                }
            }
        })
    })
})