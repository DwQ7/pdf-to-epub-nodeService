import session from "./utils/session.js";

$(function () {
    //更新页面信息
    $('#user').text(sessionStorage.username);
    console.log(session.getSession(history));
    $('.history-content').text(session.getSession(history));
    //事件监听
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

