
const checkIfPalindrome = (word) => {
    //A palindrome is a word, number, phrase, or other sequence of symbols that reads the same backwards as forwards, such as madam or racecar
    let reverseWord;
    reverseWord = word.split("").reverse().join("");
    // check if its a palindrome
    if (word == reverseWord) {
        alert(`${word} is a palindrome`)
    } else {
        alert(`${word} is not a palindrome ${reverseWord}`)
       return reverseWord;
    }
}

const input = prompt("Enter a word: ");
checkIfPalindrome(input);