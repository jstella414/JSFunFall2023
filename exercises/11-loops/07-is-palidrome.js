let string = "racecar";

/**
 * A palindrome is a word, phrase, or sequence that reads the same backward as forward, e.g., madam or racecar.
 *
 * Create a variable called "isPalindrome".
 * It should equal true if "string" is a palindrome
 * and false if it is not.
 *
 * Use the split and join methods to solve this problem.
 */

// WRITE YOUR ANSWER BELOW THIS LINE

let isPalindrome = true;

let reverse = []
let seperated = string.split("");
console.log(seperated)

for(let i = (string.length -1); i >= 0 ; i--){
    reverse.push(seperated[i])
}

let reversedWord = reverse.join('')
console.log(reversedWord);

reversedWord === string ? isPalindrome = true : isPalindrome = false;

console.log(isPalindrome)