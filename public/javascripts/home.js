$(function () {
    //更新页面信息
    // console.log(sessionStorage.username);
    $('#user').text(sessionStorage.username);
    if(sessionStorage.username){
        $('#user').attr('href','/user');
    }
    //事件监听
    $('.choose_file').on('click',function () {
        window.location.href = "/transition"
    })
})
