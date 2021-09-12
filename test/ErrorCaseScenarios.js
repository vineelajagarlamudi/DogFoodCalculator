let expect = require('chai').expect;
let foodCalculator = require('../src/DogFunction');

describe('Error case scenarios', function () {

    it('should not order food if the toal number of dogs are greater than 30', function () {
        let result = foodCalculator(15,5,16,30);
        expect(result).to.equal(0);
    })

    it('should not order food if the toal number of dogs is 0', function () {
        let result = foodCalculator(0,0,0,30);
        expect(result).to.equal(0);
    })
})