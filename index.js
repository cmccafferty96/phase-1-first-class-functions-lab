const returnFirstTwoDrivers = (array) => array.slice(0,2);
const returnLastTwoDrivers = (array) => array.slice(-2);

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(i) {
    return function(fare) {
        return fare * i
    }
}

const fareDoubler = createFareMultiplier(2)

const fareTripler = createFareMultiplier(3)
// This function takes two arguments, an array of the names of Scuber's drivers
// and either the returnFirstTwoDrivers() or returnLastTwoDrivers() function
// Based on these two arguments, selectDifferentDrivers() will return either 
// the first two drivers or the last two drivers

function selectDifferentDrivers(arrayOfDrivers, returnFirstTwoDrivers) {
    return returnFirstTwoDrivers(arrayOfDrivers)    
}

function selectDifferentDrivers(arrayOfDrivers, returnLastTwoDrivers) {
    return returnLastTwoDrivers(arrayOfDrivers)
}