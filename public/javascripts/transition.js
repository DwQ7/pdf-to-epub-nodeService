import session from "./session.js";
import history from "./pojo/history.js";
import date from "./pojo/date.js"
// let obj = new  history.History(1,2,3);
// history.histories.push(obj);
// session.setSession("history",history.histories);
// console.log(history.histories);
// console.log(sessionStorage);
// console.log(session.getSession("history"));
$(function () {
    let fileNames = [];
    console.log(sessionStorage.username);
    if(sessionStorage.username){
        $('#user').attr('href','/user').text(sessionStorage.username);;
    }
    $( "#trans_effect" ).hide();
    $('#pdfFile').change(function () {
        fileNames = $('#pdfFile').prop('files');
        for(let i = 0 ; i < fileNames.length ; i ++){
            let filename  = fileNames[i].name;
            console.log(filename);
            $('.left_main').append(filename + '\n');
        }
    })
    function getFileName(routerName){
        let index = routerName.lastIndexOf('\\')
        let filename = routerName.substr(index + 1)
        return filename;
    }
    function fileJudge(filename){
        let index=filename.lastIndexOf(".");
        let lastname = filename.substring(index,filename.length)
        return lastname;
    }
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
    }
    //回调函数
    function callback_out() {
        setTimeout(function() {
            $( "#trans_effect" ).removeAttr( "style" ).fadeOut();
        }, 1000 );
    };
    $("#upload").on('click',function () {
        console.log(sessionStorage.getItem('username'));
        let pdfFile = $('#pdfFile')[0].files[0];
        if(pdfFile){
            Fade();
            setTimeout(function() {
                Out();
            }, 500 );
            const formData =  new FormData($('#uploadForm')[0]);
            formData.append("username",sessionStorage.username);
            $.ajax({
                type: 'post',
                url: '/apis/first/PdfToEpub/upload/one',
                data: formData,
                processData: false, //不处理数据
                contentType: false,
                success: function (data) {
                    console.log(data);
                    let obj = new history.History(
                        fileNames[0].name,
                        data,
                        date.getFormatDate()
                    )
                    history.histories.push(obj);
                    session.setSession("history",history.histories);
                    window.alert(data);
                }
            });
        }else{
            window.alert("请选择文件");
        }
    });
})