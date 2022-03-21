const UserSQL = {
    insert:'INSERT INTO User(username,password) VALUES(?,?)',
    queryAll:'SELECT * FROM user',
    getUserById:'SELECT * FROM user WHERE username = ? ',
};
module.exports = UserSQL;