# Project: cloud-app-challenge

## Challenge

QA Lead Homework Task:
Write test automation code that goes to our website (https://getcloudapp.com/)
And does the following steps:
- Sign up
- Log out
- Log in
- Go to settings -> profile and update the avatar

Candidates can choose technology.

## Challenge repository url
https://github.com/arielmachado-uy/cloud-app-challenge
## Technology used
- Cypress.io (https://www.cypress.io/)

## Steps to run the suites
1. Check out the project from the url above
2. Run `yarn` to install all the packages included cypress
3. Check the scripts inside the package.json file to run the test cases in either `ci-mode` or `runner-mode` 

## Differences between running test cases in ci-mode and runner-mode
When running the test cases using `ci-mode`:
  - You can follow the process by checking the terminal, you won't see any browser being opened
  - You will get a video after every test case execution (1 per test)
  - You will get a screenshot only in case of failure (1 per failed test)

When running the test cases using `runnner-mode`
  - We will be using Cypress runner to select the suites to run
  - After selecting a suite, the selected browser will be opened and the test case will be executed
  - You won't get any video nor screenshot 
  - BUT, Cypress allows you to travel back in time using the runner to see the state of the page (and its elements) at a given moment during the execution and also check data in the console

## Test Suites
1. Sign Up Suite
2. Login/Logout Suite
3. Profile Suite

## Notes
1. In the `Sign Up` suite there is a request (performed by the browser) that is returning a 400

    The endpoint is: https://accounts.google.com/gsi/status?client_id=641478567492-2l5kcdhdl4ab3jfgtk7k8lu5qsn18ond.apps.googleusercontent.com&as=HAyAaXENK8BqjC3m7b45uQ

    This doesn't impact in the result of the tests

2. In the `Sign Up` suite there is an error spotted by cypress: ReferenceError: grecaptcha is not defined

    This error is from the application and not from cypress, the tool is capable to detect errors even if the application is still running

    To skip this check I added the following code at the beginning of the spec:
    - Cypress.on('uncaught:exception', (err, runnable) => {
        return false;
      });

3. There also other test cases showing the same errors, they are not related with the code of the test nor cypress framework