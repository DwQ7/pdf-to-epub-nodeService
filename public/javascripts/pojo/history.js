import session from "../session.js";

class History{
    constructor(fileName,filePath,successDate){
        this.fileName = fileName;
        this.filePath = filePath;
        this.successDate = successDate;
    }
}
let histories = []
session.setSession("history",histories);
export default {
    History,
    histories
}