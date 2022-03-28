import session from "./utils/session.js";
import history from "./pojo/history.js";

$(function () {
    let fileName,filePath;
    //更新页面信息
    let num = parseInt(sessionStorage.getItem('fileNum')) - 1;
    console.log(session.getSession(num));
    if(session.getSession(num)){
        fileName = session.getSession(num).fileName;
        filePath = session.getSession(num).filePath;
    }
    $('#download_name').text('文件名:'+fileName);
    $('#download_path').text('文件下载链接：点击下载').on('click',function (){
        window.location.href = '/download/downloadFile?filePath='+encodeURIComponent(filePath);
    })
    //事件监听
    $('.down_but').children("button#download").on('click',function () {
        window.location.href = '/download/downloadFile?filePath='+encodeURIComponent(session.getSession(num).filePath);
    })
    $('.down_but').children("button#delete").on('click',function () {
        //window.location.href = '/download/downloadFile?filePath='+encodeURIComponent(session.getSession('history')[0].filePath);
        session.deleteSession(num);
        session.setSession('fileNum',num);
        window.alert('success');
        window.location.href = '/transition';
    })

})