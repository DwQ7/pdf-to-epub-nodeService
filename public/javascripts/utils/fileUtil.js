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

export default {
    getFileName,
    fileJudge
}