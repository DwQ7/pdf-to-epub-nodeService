function getFormatDate() {
    let date = new Date();
    // let seperator1 = "-";
    // let year = date.getFullYear();
    // let month = date.getMonth() + 1;
    // let strDate = date.getDate();
    // if (month >= 1 && month <= 9) {
    //     month = "0" + month;
    // }
    // if (strDate >= 0 && strDate <= 9) {
    //     strDate = "0" + strDate;
    // }
    // let currentdate = year + seperator1 + month + seperator1 + strDate;
    // return currentdate;
    let year = date.getFullYear();
    let month = date.getMonth() + 1;
    let day = date.getDate();
    if (month < 10) {
        month = "0" + month;
    }
    if (day < 10) {
        day = "0" + day;
    }
    let nowDate = year + "-" + month + "-" + day;
    return nowDate;
}

export default {
    getFormatDate
}