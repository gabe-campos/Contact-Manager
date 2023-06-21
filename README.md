# Contact-Manager
Contact manager app that uses Express as a framework and mySQL for database management.  You must have node installed to use this app, see below for steps on how to install.

The app is simple to use after you get it set up.
In order to set it up, this **first** thing you want to do is **clone this repo**.
Once you have cloned the repo and navigated inside of it locally on your command line, run the following command:
```
npm install
```
This command will read the file "package.json" and install any required dependencies.

- After this you may need to run npm install express, mysql, etc.

- In order to use the app, you will need **your own mySQL database**.  You must know your host, username, password, and of course the name of the database.  

- If you know all these items, simply add them to the config.js file on lines marked with REPLACE.

- Your last step is to actually use the JavaScript files.
 - First run 
 ```
 node create_contact_table.js
 ```
 - Next, run
``` 
node create_accounts_table.js
```
 - Lastly, you need to edit the file insert_into_accounts_table.js to select your own username and password.  This can be done on the lines marked with REPLACE.  Once you have edited these lines, run
```
node insert_into_accounts_table
```

- Once all these steps are complete, you are ready to run the app!

- Simply navigate to your [Local Host](https://localhost:9001) at port 9255 and you're good to go!


## Installing Node
In order for this project to run correctly you need to have node installed.
If you are on a Linux system, perform the commmands:
```
sudo apt update
sudo apt install nodejs
```

If you are on Mac:
```
brew update
brew install node
```

## Screenshots
