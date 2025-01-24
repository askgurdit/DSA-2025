// 13: Write a function that takes a string as input and returns the count of vowels in that string. Consider 'a', 'e', 'i', 'o'', and 'u' as vowels (both lowercase and uppercase).


/*function countVowels (str) {
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i].toLowerCase() === 'a' || str[i].toLowerCase() === 'e' || str[i].toLowerCase() === 'i' || str[i].toLowerCase() === 'o' || str[i].toLowerCase() === 'u') {
            count++;
        }
    }
    return count;
} */

    const countVowels = (str) => {
        let vowels = ['a', 'e', 'i', 'o', 'u'];
        let arr = str.split('');
        console.log(arr);

        let count = 0;

        for (let char of arr) {
            if (vowels.includes(char.toLowerCase())) {
                count++;
            }
        }
        return count;
    }

    // const countVowels = (str) => {
//   const vowels = ["a", "e", "i", "o", "u"];
//   const strArr = str.toLowerCase().split("");

//   return strArr.reduce((acc, currVal) => {
//     vowels.includes(currVal) ? acc++ : acc;

//     return acc;
//   }, 0);
// };


// Example usage:
console.log(countVowels ("Helloo world")); // Output: 3 
console.log(countVowels ("ThE quick brown fox")); // Output: 5 
console.log(countVowels ("Brrrp")); // Output: 0

// Constraints:
// The input string may contain letters in both uppercase and lowercase. 
// The output should be a non-negative integer representing the count of vowels in the input string.