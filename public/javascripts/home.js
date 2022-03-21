$(function () {
    $("#upload").on('click',function () {
        const formData =  new FormData($('#uploadForm')[0]);

        formData.append("username","admin");
        $.ajax({
            type: 'post',
            url: '/apis/first/PdfToEpub/upload/one',
            data: formData,
            processData: false, //不处理数据
            contentType: false,
            dataType:'json',
            success: function (res) {
                console.log(res);
            },
            error: function (){
                console.log('err');
            }
        });
    });
    $('#test').on('click',function () {
        console.log(sessionStorage);
        $.ajax({
            type:'GET',
            url:'/apis/test',
            success:function (res) {
                console.log(res);
            }
        })
    })
})
