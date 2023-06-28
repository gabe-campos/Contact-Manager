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
![Picture1](https://github.com/gabe-campos/Contact-Manager/assets/91922397/d7e96fa0-8d7e-4967-86f3-d02fbce27d90)

![Picture2](https://github.com/gabe-campos/Contact-Manager/assets/91922397/5ca1436a-bd0a-4509-9423-de6ea53c3d6b)

![Picture3](https://github.com/gabe-campos/Contact-Manager/assets/91922397/28433fa3-5164-456d-bed2-3da208bbfbba)

![Picture4](https://github.com/gabe-campos/Contact-Manager/assets/91922397/1965a7fa-1644-4edc-a5bd-41d2abfaddc9)

![Picture5](https://github.com/gabe-campos/Contact-Manager/assets/91922397/d901ab81-d183-4632-a4bb-4f3be25982d2)
