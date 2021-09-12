function foodCalculator(numOfSmallDogs, numOfMediumDogs, numOfLargeDogs, leftOverFood) {
    const SMALL_SIZE = 10;
    const MEDIUM_SIZE = 20;
    const LARGE_SIZE = 30;
    let totalFoodToBeOrdered = 0;

    //handling decimal values
    if(!Number.isInteger(numOfSmallDogs) || !Number.isInteger(numOfMediumDogs) || !Number.isInteger(numOfLargeDogs)) {
        console.log("Got a decimal value for number of dogs, please enter an integer value");
        return totalFoodToBeOrdered;
    }

    //since the shelter can only hold at most 30 dogs
    if(numOfSmallDogs && numOfMediumDogs && numOfLargeDogs && (numOfSmallDogs + numOfMediumDogs + numOfLargeDogs) > 30) {
        console.log("Number of dogs exceeded the maximum limit, please enter a new total to proceed with the order");
        return totalFoodToBeOrdered;
    }

    let monthlyDogFood = (numOfSmallDogs * SMALL_SIZE) + (numOfMediumDogs * MEDIUM_SIZE) + (numOfLargeDogs * LARGE_SIZE);

    //For scenario when we have enough left over food from the last month and do not need any additional food to be ordered
    if(monthlyDogFood < leftOverFood) {
        if(monthlyDogFood + calculatePercentage(20, monthlyDogFood) <= leftOverFood) {
            console.log("There is enough food for the month, not placing any order");
            return totalFoodToBeOrdered;
        }
    }

    let monthlyNeededFood = monthlyDogFood - leftOverFood;
    totalFoodToBeOrdered = calculatePercentage(20, monthlyNeededFood) + monthlyNeededFood;
    return totalFoodToBeOrdered;
}

function calculatePercentage(percent, num){
    return (percent / 100) * num;
}

module.exports = foodCalculator;