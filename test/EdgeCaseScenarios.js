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

    it('should not order food if the toal needed food is less than left over food', function () {
        let result = foodCalculator(5,5,5,400);
        expect(result).to.equal(0);
    })

    it('should not order food if the toal needed food is equal to left over food', function () {
        let result = foodCalculator(5,5,5,360);
        expect(result).to.equal(0);
    })


    it('should return total food to be ordered when all dogs are small', function () {
        let result = foodCalculator(30,0,0,0);
        expect(result).to.equal(360);
    })

    it('should return total food to be ordered when all dogs are medium', function () {
        let result = foodCalculator(0,30,0,0);
        expect(result).to.equal(720);
    })
    it('should return total food to be ordered when all dogs are large', function () {
        let result = foodCalculator(0,0,30,0);
        expect(result).to.equal(1080);
    })

})