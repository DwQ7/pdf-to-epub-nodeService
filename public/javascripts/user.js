
$(function () {
    $("#return_home").on('click', function () {
        window.location.href = '/';
    }),
    $("#logOut").on('click', function () {
            $.ajax({
            type:'GET',
            url:'/login/LogOut',
            success:function (res) {
                console.log(res);
                window.location.href = '/';
            }
        })
    })
})

