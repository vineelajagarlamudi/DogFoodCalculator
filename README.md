This project contains the source code and tests for calculating total food to be ordered for a dog shelter. It contains the following : 
- src/DogFunction.js : has the source code that has foodCalculator method
- test/ : contains all the unit tests (happy path, error case, edge case scenarios) for validating foodCalculator


##Prerequisites
- Make sure to install latest Node JS version(tested on -v14.17)


Steps to download and run the tests:
- 
- Run `git clone https://github.com/vineelajagarlamudi/DogFoodCalculator.git`
- From the project's root directory run `npm install`
- To run the tests use the following commands: 
  - All tests: `node ./node_modules/mocha/bin/mocha`
  - HappyPathScenarios: `node ./node_modules/mocha/bin/mocha test/HappyPathScenarios.js`
  - ErrorCaseScenarios: `node ./node_modules/mocha/bin/mocha test/ErrorCaseScenarios.js`
  - EdgeCaseScenarios: `node ./node_modules/mocha/bin/mocha test/EdgeCaseScenarios.js`


 

