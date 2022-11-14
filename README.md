<div id="top"></div>

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#About-the-Challenge">About The Challenge</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#Run-Tests">Run Tests</a></li>
        <li><a href="#Scenarios">Scenarios</a></li>
        <li><a href="#Challenges">Challenges</a></li>
      </ul>
    </li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## UMAI Test Automation Challenges 🤖

![image](https://media-exp1.licdn.com/dms/image/C560BAQFnRcIQ8IDWtA/company-logo_200_200/0/1641285103879?e=1676505600&v=beta&t=UaZTQTiTTJMwCIGyyoxkk3p3PiPtb-lQ75Mv98DO1l4)


### Built With

* [JavaScript](https://www.javascript.com/)
* [TypeScript](https://www.typescriptlang.org/)
* [Cypress](https://www.cypress.io/)
* [Mocha](https://mochajs.org/)
* [Chai Assertions](https://chaijs.org/)
* [Allure Reports](https://docs.qameta.io/)
* [Docker](https://docker.io)
* [FakerJs](https://fakerjs.dev/)

<p align="right">(<a href="#top">back to top</a>)</p>


<!-- GETTING STARTED -->
## Getting Started

### Prerequisites


1. Clone this repo inside any directory
   ```sh
   git clone https://github.com/Moaz-Adel/UMAI-Challenge.git
   ```
2. Change current directory to be inside the cloned repo
   ```sh
   cd UMAI-Challenge
   ```
3. Install 
    ```sh
   npm i
   ```

## Different ways to run the tests

### The Default test runs

To run the tests directly just type the following commands:

1. Interactive Mode: `npx cypress open` (open the tests with the browser)
2. If Allure is installed:
    1. `npm run cy:test:report` (Headless Mode)
    2. Will generate an allure report automatically & Mocha report
3. Without generating Allure Report (Headless Mode)
    1.  `npx cypress run` 
    2. Will generate a mocha report only
    
--------

### 🥉 Using Docker-Compose

Just run

`docker-compose run e2e-chrome`

and to try different browsers replace chrome with:

- `e2e-firefox`
- `e2e-electron`

------

### 🥈 In Docker with one Command

Prerequisites:

- [Docker](https://www.docker.com/) installed and running (on any Operating System)

Just type the following command inside the directory

`docker run -it -v $PWD:/e2e -w /e2e cypress/included:11.0.1`

You can specify any browser as an environment variable to test against multiple browsers like the following:

`docker run -it -v $PWD:/e2e -w /e2e cypress/included:11.0.1 --browser chrome`

Pass one of the following:

- `chrome`
- `firefox`

----

## 🏃‍♂️Run Results

Video of the test results:





https://user-images.githubusercontent.com/66737098/201785349-2047fc53-db7e-4df3-8f49-3329f3d314a4.mp4



Two Reports will be generated:

### Mocha Awesome (Always will be generated):

<img width="1423" alt="Screenshot 2022-11-14 at 11 45 52 PM" src="https://user-images.githubusercontent.com/66737098/201774633-657ca4bf-52a4-47f5-a21b-2e288f6dfbde.png">


### Allure Report (If allure is installed):
<img width="1423" alt="Screenshot 2022-11-14 at 11 45 19 PM" src="https://user-images.githubusercontent.com/66737098/201774770-8b2381ae-15a2-4787-9335-cb9a023d1b05.png">

<img width="1423" alt="Screenshot 2022-11-14 at 11 45 13 PM" src="https://user-images.githubusercontent.com/66737098/201774804-4d3cfc87-0331-4efc-829e-670a1ca819b1.png">




-------------------
## Notes:

> All interactions are configured refactored to include

> "Retries" to decrease Flakeness

> The refactored methods are documented for ease of use 

> Following Page Object Model Design Pattern

> Following Coding Standards and Best Practices
--------------------------------
  


<p align="right">(<a href="#top">back to top</a>)</p>


## 🤖 Thanks and Happy Testing 🐞

