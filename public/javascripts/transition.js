$(function () {
    console.log(sessionStorage.username);

    if(sessionStorage.username){
        $('#user').attr('href','/user').text(sessionStorage.username);;
    }
    $( "#trans_effect" ).hide();
    $('#upload').on('click',function () {
        Fade();
        setTimeout(function() {
           Out();
        }, 500 );
    })
    function Fade() {
        let selectedEffect = "blind";
        let options = {};
        if ( selectedEffect === "scale" ) {
            options = { percent: 0 };
        } else if ( selectedEffect === "size" ) {
            options = { to: { width: 200, height: 60 } };
        }
        $( "#up_effect" ).hide( selectedEffect, options, 1000, callback_fade );
    };
    function callback_fade() {
        setTimeout(function() {
            $( "#trans_effect" ).hide();
            $( "#up_effect" ).removeAttr( "style" ).hide().fadeIn();
        }, 2000 );
    };
    function Out() {
        let selectedEffect = "blind"
        let options = {};
        if ( selectedEffect === "scale" ) {
            options = { percent: 100 };
        } else if ( selectedEffect === "size" ) {
            options = { to: { width: 280, height: 185 } };
        }
        // 运行特效
        $( "#trans_effect" ).show( selectedEffect, options, 1000);
    };

    //回调函数
    function callback_out() {
        setTimeout(function() {
            $( "#trans_effect" ).removeAttr( "style" ).fadeOut();
        }, 1000 );
    };

})
