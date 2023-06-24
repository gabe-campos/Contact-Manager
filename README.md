# Contact Manager
Welcome to my contact manager app!  This app uses Express as a web framework and mySQL for database management.  You must have node installed and a mySQL databse set up in order to use this app.

In order to set up the contact manager, the **first** thing you want to do is **clone this repo**.
Once you have cloned the repo and navigated inside of it locally on your command line, run the following command:
```
npm install
```
This command will read the file "package.json" and install any required dependencies.

- Next, you must insert your mySQL host, databse name, username and password inside the file [config.js](config.js) on the lines marked with REPLACE.

- Your last step is to run the provided JavaScript files.
  - First run 
   ```
   node create_contact_table.js
   ```
   - Next, run
  ``` 
  node create_accounts_table.js
  ```
   - Lastly, you need to edit the file [insert_into_accounts_table.js](insert_into_accounts_table.js) to select your own username and password.  This can be done on the lines marked with REPLACE.  Once you have edited these lines, run
  ```
  node insert_into_accounts_table.js
  ```
- Once all these steps are complete, you are ready to run the app!

- Simply navigate to your [Local Host](https://localhost:9255) at port 9255 and you're good to go!

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
![image](https://github.com/gabe-campos/Contact-Manager/assets/91922397/146aa6a0-43b7-46c6-bdf0-36c30c49a96e)

![image](https://github.com/gabe-campos/Contact-Manager/assets/91922397/68bff23e-e8d8-4004-8837-4ff179e8b626)

![image](https://github.com/gabe-campos/Contact-Manager/assets/91922397/aec0c436-270b-43eb-aaca-241c58b424a1)

![image](https://github.com/gabe-campos/Contact-Manager/assets/91922397/4fe5d971-dc36-460f-865c-4bb8c0a4878d)

![image](https://github.com/gabe-campos/Contact-Manager/assets/91922397/038be85c-f680-432d-8b67-b6e284dec430)





