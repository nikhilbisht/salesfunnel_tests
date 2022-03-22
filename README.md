# salesfunnel_tests
## Project Overview :
This project uses Page Object Pattern.
It uses WebdriverIO as its framework wdio-html-nice-reporter to create HTML report files. It also uses the spec reporter package for the end reporting via stdout.

## Technologies Used: 
1.	Programming Language : Javascript
2.	Build Tool : Yarn
3.	Automation Tool used : webdriver.io
4.	Reporting tool : wdio-html-nice-reporter

## Installation
After cloning the project from the repository, make sure you run `yarn install` to install all node modules. There should be no further installation required.

`yarn test` is the command to run the test

## Project Structure :
As we have used Page Object Model, we have created separate files for the pages and for the tests.
1.	Test: test folder contains 2 subfolder: pageobjects and specs
    - pageobjects: all the pages are inside the pageobjects folder
    - specs: all the test files are inside the specs folder

2.	test-data : All the test-data used in this project are used in test-data folder.
3.	reports : Report are created in the `./reports` folder. When a test completes, it created a folder named reports if none exists. This folder will contains a subfolder of screenshots taken when a test fails and an HTML report file.
 
#### All the tests are run in parallel. Upto 5 tests can be run parallely.

## Headless Execution : 
To run the tests in headless mode, we can pass the argument in wdio.conf.js under capabilities object

## Cross-Browser Test Execution :
Tests will run in Microsoft Edge and Chrome browser in parallel mode.

## Sample Report :

 ![image](https://user-images.githubusercontent.com/17799801/159520041-efa78a72-eda1-4ddf-97c3-5364106ca71b.png)
![image](https://user-images.githubusercontent.com/17799801/159520105-6e1098d4-0ed9-44ff-a043-a71b749b843e.png) 	

## Jenkins Integration :
 
![image](https://user-images.githubusercontent.com/17799801/159520148-0b6c00e1-3a47-4f67-9469-e50667f508d2.png)
![image](https://user-images.githubusercontent.com/17799801/159520186-23d72164-67a7-45d8-b876-6fa7641c24e5.png)


 
 
