import session from "./utils/session.js";
import history from "./pojo/history.js";
import date from "./pojo/date.js"
import animation from "./utils/animation.js";
import fileUtil from "./utils/fileUtil.js";
// let obj = new  history.History(1,2,3);
// history.histories.push(obj);
// session.setSession("history",history.histories);
// console.log(history.histories);
// console.log(sessionStorage);
// console.log(session.getSession("history"));
$(function () {
    //选择的文件
    let fileNames = [];
    //隐藏动画
    $( "#trans_effect" ).hide();
    //更新页面信息
    if(sessionStorage.username){
        $('#user').attr('href','/user').text(sessionStorage.username);
    }
    //修改并渲染文件信息
    $('#pdfFile').on('change',function () {
        fileNames = $('#pdfFile').prop('files');
        for(let i = 0 ; i < fileNames.length ; i ++){
            let filename  = fileNames[i].name;
            console.log(filename);
            $('.left_main').append(filename + '\n');
        }

    })
    //事件监听
    $("#upload").on('click',function () {
        console.log(sessionStorage.getItem('username'));
        let pdfFile = $('#pdfFile')[0].files[0];

        if(pdfFile){
            animation.Fade();
            setTimeout(function() {
                animation.Out();
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
                    // console.log(data);
                    let obj = new history.History(
                        fileNames[0].name,
                        data,
                        date.getFormatDate()
                    )
                    let num = parseInt(sessionStorage.getItem('fileNum'));
                    session.setSession(num,obj);
                    let newFileNum = (++num).toString();
                    console.log(newFileNum);
                    sessionStorage.setItem('fileNum',newFileNum);
                    window.alert('转换成功，点击下载');
                    $('#pdfFile').val(''); //让input标签的值刷新，防止无法上传之前上传过的文件
                    window.location.href = '/download';
                },
                xhr: function() {
                    let xhr = new XMLHttpRequest();
                    //使用XMLHttpRequest.upload监听上传过程，注册progress事件，打印回调函数中的event事件
                    xhr.upload.addEventListener('progress', function (e) {
                        // console.log(e);
                        //loaded代表上传了多少
                        //total代表总数为多少
                        let progressRate = (e.loaded / e.total) * 100 + '%';
                        //通过设置进度条的宽度达到效果
                        $('.progress > div').css('width', progressRate);
                    })
                    return xhr;
                }
            });
        }else{
            window.alert("请选择文件");
        }
    });
})