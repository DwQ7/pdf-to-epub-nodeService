$(function () {
    console.log(sessionStorage.username);
    $('#user').text(sessionStorage.username);
    if(sessionStorage.username){
        $('#user').attr('href','/user');
    }


    $('.choose_file').on('click',function () {
        window.location.href = "/transition"
    })
})
