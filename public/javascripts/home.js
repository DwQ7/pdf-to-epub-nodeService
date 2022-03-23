$(function () {
    $("#upload").on('click',function () {
        console.log(sessionStorage.getItem('username'));

        let pdfFile = $('#pdfFile')[0].files[0];
        if(pdfFile){
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
        }else{
            window.alert("请选择文件");
        }
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
