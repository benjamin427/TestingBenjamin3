This developed framework was used to test the website Shop.ist (https://shopist.io).

Here are the commands to use the framework for test execution (make sure to change directory to be in the actual name of the project folder used for the framework 
in the command line in the windows terminal):

To test in prodcution environment:
1. npm run cy:prod:open:Chrome - To open Chrome browser in production environment.
2. npm run cy:prod:open:Firefox - To open Firefox browser in production environment.
3. npm run cy:prod:open:Edge - To open Edge browser in the production environment.

To test in development environment:
1. npm run cy:dev:open:Chrome - To open Chrome browser in development environment.
2. npm run cy:dev:open:Firefox - To open Firefox browser in development environment.
3. npm run cy:dev:open:Edge - To open Edge browser in the development environment.

To test in live environment:
1. npm run cy:live:open:Chrome - To open Chrome browser in live environment.
2. npm run cy:live:open:Firefox - To open Firefox browser in live environment.
3. npm run cy:live:open:Edge - To open Edge browser in live environment.

To test in headless mode (in any environment - production, development, or live):
1. npm run cy:prod:run:Chrome - To run test execution headless from Chrome browser.
2. npm run cy:prod:run:Firefox - To run test execution headless from Firefox browser.
3. npm run cy:prod:run:Edge - To run test execution headless from Edge browser.

To generate reports, make sure you start here to follow these steps. It is not necessary to use the commands listed 
above because there will be a command that will test the entire testing suite before reports are generated.
1. npm run clean-report - Create a new empty folder in the framework.
2. npm run pretest - To test the empty report to ensure no malfunctions.
3. npm run scripts - To start the test execution of the entire suite.
4. npm run combine-report - To combine test results after report data are generated. 
5. npm run generate-report - To save the generated test reports in the folder.

Reminder: After you type the first three commands listed above, you can use one of these commands as an option.
1. npm run posttest
2. npm run create-report
