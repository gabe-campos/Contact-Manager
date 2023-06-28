const config = require('./config.js');

// Include the express module
const express = require('express');

// Helps in managing user sessions
const session = require('express-session');

// include the mysql module
var mysql = require('mysql');

// Bcrypt library for comparing password hashes
const bcrypt = require('bcrypt');

// helps in extracting the body portion of an incoming request stream
var bodyparser = require('body-parser');

const url = require('url');

const port = 9255;

// create an express application
const app = express();

// apply the body-parser middleware to all incoming requests
app.use(bodyparser());

// Use express-session - in-memory session is sufficient
app.use(session({
        secret: "secretkey",
        saveUninitialized: true,
        resave: false
    }
));

// middle ware to serve static files
app.use('/client', express.static(__dirname + '/client'));

// server listens on port set to value above for incoming connections
app.listen(port, () => console.log('Listening on port', port));

app.get('/',function(req, res) {
  res.sendFile(__dirname + '/client/welcome.html');
});

app.get('/login',function(req,res){
  if(req.session.value){
    res.sendFile(__dirname + '/client/AllContacts.html');
  }
  else{
    res.sendFile(__dirname + '/client/Login.html');
  }
});

let conn;

function createConnection() {
  conn = mysql.createConnection({
    host: config.host,                
    user: config.user,               
    password: config.password,       
    database: config.database,       
    port: 3306                  // typical port for js
  });
}

var userName;
var password;
app.post('/sendLogin',function(req,res){
  userName = req.body.login;
  password = req.body.password;

  createConnection();

  conn.connect(function(err){
    if(err){
      console.error("Could not connect to database:", err);
    }
    else{
      // check user credentials
      conn.query('SELECT acc_login, acc_password FROM tbl_accounts', function(err, result){
        if(err){
          console.log("unable to get login and pw from tbl_accounts");
          throw err;
        }
        else{
          // this line will only check the first username and password in the tbl_accounts table
          // if you want to use a different username and password, change the number 0
          // 0 is the number for the first account in the accounts table
          if(userName == result[0].acc_login && bcrypt.compareSync(password, result[0].acc_password)){
            req.session.value = 1;
            res.json({status: 'success'});
          }
          else{
            res.json({status: 'fail'});
          }
        }
      });
    }
  });
});

app.post('/postContactEntry', function(req, res){

  const rowToBeInserted = {
    contact_category: req.body.category,
    contact_name: req.body.name,
    contact_location: req.body.location,
    contact_info: req.body.info,
    contact_email: req.body.email,
    website_title: req.body.website_title,
    website_url: req.body.url
  };

  conn.query('INSERT contact_table SET ?', rowToBeInserted, function (err, result) {
      if (err) {
          throw err;
      }
  });

  res.redirect('/AllContacts');

});

app.get('/logout', function(req, res){
  if(!req.session.value){
    res.redirect('/login');
  }
  else{
    req.session.destroy((err) => {
      if(err){
        console.log.apply(err);
      }
      else{
        conn.end((err) => {
          if(err){
            console.error('Error disconnecing from database:', err);
            return;
          }
          else{
            console.log('Disconnected from server.')
          }
        });
        res.redirect('/login');
      }
    });

  }
});

app.get('/MyContacts', function(req, res) {
  if(!req.session.value){
    res.redirect('/login');
  }
  else{
    res.sendFile(__dirname + '/client/MyContacts.html');
  }
});

app.get('/AllContacts', function(req, res){
  if(!req.session.value){
    res.redirect('/login');
  }
  else{
    res.sendFile(__dirname + '/client/AllContacts.html');
  }
});

app.get('/getContacts', function(req, res) {

  conn.query('SELECT * FROM contact_table ORDER BY contact_category, contact_name', function(err, result){
      if(err){
        throw err;
      }
      var jsonString = JSON.stringify(result);
      res.statusCode = 200;
      res.setHeader('Content-type', 'application/json');
      res.write(jsonString);
      res.end();
  });

});

app.get('/getCertainContacts', function(req, res){
  var fields = req.url.split('=');
  var category = fields[1];

  conn.query('SELECT * FROM contact_table WHERE contact_category = ? ORDER BY contact_category, contact_name', category, function(err, result){
      if(err){
        throw err;
      }
      var jsonString = JSON.stringify(result);
      res.statusCode = 200;
      res.setHeader('Content-type', 'application/json');
      res.write(jsonString);
      res.end();
  });

});

app.get('/AddContact', function(req, res){
  if(!req.session.value){
    res.redirect('/login');
  }
  else{
    res.sendFile(__dirname + '/client/AddContact.html');

  }
});

// function to return the 404 message and error to client
app.get('*', function(req, res) {
  // add details
  res.sendStatus(404);
});
