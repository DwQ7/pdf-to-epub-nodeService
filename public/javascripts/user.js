
$(function () {

    console.log(sessionStorage.username);
    $('#user').text(sessionStorage.username);

    $("#return_home").on('click', function () {
        window.location.href = '/';
    }),
    $("#logOut").on('click', function () {
        sessionStorage.removeItem('username');
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

