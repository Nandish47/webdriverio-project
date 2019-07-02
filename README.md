## WebdriverIO v4 UI Automation with Cucumber
Boilerplate for UI Automation test with WebdriverIO v4 and Cucumber

## Usage

You must have [Node.js](https://www.nodejs.org/) installed.
Clone the project or download locally.

Install the Dependencies:
```sh
npm install
```

### Note:
1 step-definition with no Page Object and 1 step-definition file implemented with Page Objects and Common selenium functions

## Run test application
Run all features:
```sh
npm test
```
Run individual feature:
```sh
npm test -- --spec features\login.feature
```

## Generate Test Report
```sh
npm run report
```
Allure Test Report will be generated and launched in default browser

## Parallel Test Execution
Just add a new instance of browser in wdio.conf.js file. Based on maximum browser instances defined, features will be executed in parallel.
Conoslidated report of parallel execution is also handled
