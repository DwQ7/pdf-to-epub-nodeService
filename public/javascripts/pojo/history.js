import session from "../utils/session.js";

class History{
    constructor(fileName,filePath,successDate){
        this.fileName = fileName;
        this.filePath = filePath;
        this.successDate = successDate;
    }
}
export default {
    History,
}