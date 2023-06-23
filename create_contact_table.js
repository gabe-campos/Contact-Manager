var mysql = require("mysql");
const config = require('./config.js');

const con = mysql.createConnection({
  host: config.host,               // REPLACE 
  user: config.user,               // REPLACE
  password: config.password,       // REPLACE
  database: config.database,       // REPLACE
  port: 3306                  // tpyical port for js
});

con.connect(function(err) {
  if (err) {
    throw err;
  };
  console.log("Connected!");
    var sql = `CREATE TABLE contact_table(contact_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
                                         contact_category VARCHAR(32),
                                         contact_name VARCHAR(256),
                                         contact_location VARCHAR(256),
                                         contact_info VARCHAR(256),
                                         contact_email VARCHAR(256),
                                         website_title VARCHAR(256),
                                         website_url VARCHAR(256))`;
  con.query(sql, function(err, result) {
    if(err) {
      throw err;
    }
    console.log("Table created");
        con.end();

  });
});
