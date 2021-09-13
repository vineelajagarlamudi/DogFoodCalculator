let expect = require('chai').expect;
let foodCalculator = require('../src/DogFunction');

describe('Happy path scenarios', function () {
    it('should return total food to be ordered for the given valid input - 1', function () {
        let result = foodCalculator(5,3,7,17);
        expect(result).to.equal(363.6);
    })

    it('should return total food to be ordered for the given valid input - 2', function () {
        let result = foodCalculator(10,3,5,20);
        expect(result).to.equal(348);
    })

    it('should return total food to be ordered for the given decimal input', function () {
        let result = foodCalculator(5,3,7,22.5);
        expect(result).to.equal(357);
    })

    it('should return total food to be ordered when there is no left over food', function () {
        let result = foodCalculator(5,5,5,0);
        expect(result).to.equal(360);
    })

    it('should return total food to be ordered when small category of dogs is 0', function () {
        let result = foodCalculator(0,5,10,30);
        expect(result).to.equal(444);
    })

    it('should return total food to be ordered when medium category of dogs is 0', function () {
        let result = foodCalculator(5,0,10,30);
        expect(result).to.equal(384);
    })

    it('should return total food to be ordered when large category of dogs is 0', function () {
        let result = foodCalculator(5,10,0,30);
        expect(result).to.equal(264);
    })

})