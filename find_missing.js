// get sum of actualnumbers
    //sn = n/2(2a+(n+1)d)
    // n=the number of terms
    // a = the first term in the sequence
    // d = the constant value between terms
// get sum of expected numbers
    //loop through AND ADD
// subtract actualNubers from expectedNumbers

const findMissingNumber = (numberArr, number_of_terms, value_btw_term) =>{
    let actualnumbers, expectedNumbers, missingNumber;
    expectedNumbers = (number_of_terms / 2)*((2*value_btw_term)+(number_of_terms - 1)*value_btw_term);

    actualnumbers = numberArr.reduce((accumulator, currentValue) => {
        return accumulator + currentValue
      }, 0);

    missingNumber = expectedNumbers - actualnumbers;
    return missingNumber;
}

let value_btw_term = 1;
let number_of_terms = 45;
let numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,33,34,35,36,37,38,39,40,41,42,43,44,45];

let missingNumber = findMissingNumber(numbers, number_of_terms, value_btw_term);

console.log(missingNumber);