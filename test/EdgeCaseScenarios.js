let expect = require('chai').expect;
let foodCalculator = require('../src/DogFunction');

describe('Edge case scenarios', function () {
    it('should not order food if number of small dogs passed is a decimal value', function () {
        let result = foodCalculator(5.5,3,7,17);
        expect(result).to.equal(0);
    })

    it('should not order food if number of medium dogs passed is a decimal value', function () {
        let result = foodCalculator(5,3.5,7,17);
        expect(result).to.equal(0);
    })

    it('should not order food if number of large dogs passed is a decimal value', function () {
        let result = foodCalculator(5,3,7.5,17);
        expect(result).to.equal(0);
    })

})