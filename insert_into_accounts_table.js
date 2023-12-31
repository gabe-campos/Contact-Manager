const mysql = require("mysql");
const bcrypt = require('bcrypt');
const config = require('./config.js');

const dbCon = mysql.createConnection({
  host: config.host,               
  user: config.user,               
  password: config.password,       
  database: config.database,       
  port: 3306                  // typical port for js
});

console.log("Attempting database connection");
dbCon.connect(function (err) {
    if (err) {
        throw err;
    }

    console.log("Connected to database!");

    const saltRounds = 10;
    const myPlaintextPassword = '1234';       // REPLACE with acc_password chosen by you OR retain the same value
    const passwordHash = bcrypt.hashSync(myPlaintextPassword, saltRounds);

    const rowToBeInserted = {
        acc_name: 'account1',                 // REPLACE with acc_name chosen by you OR retain the same value
        acc_login: 'user1',                   // REPLACE with acc_login chosen by you OR retain the same value
        acc_password: passwordHash
    };

    console.log("Attempting to insert record into tbl_accounts");
    dbCon.query('INSERT tbl_accounts SET ?', rowToBeInserted, function (err, result) {
        if (err) {
            throw err;
        }
        console.log("Table record inserted!");
    });

    dbCon.end();
});
