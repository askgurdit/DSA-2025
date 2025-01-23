// Method 2:
// 

const findLongestWord = (str) => {
    if (str.trim().length === 0) {
        return false;
    }


words = str.split(" ");
 return words.reduce(
    (acc, curWord) => (curWord.length > acc.length ? curWord : acc), ""
 )

}

console.log (
    findLongestWord ("Watch AskGurdit reels on youtube channel today only")
);

/*Step-by-Step Explanation
Function Declaration
The function findLongestWord is defined using an arrow function syntax. It takes a string str as input.

Check for Empty or Whitespace String

javascript
Copy
Edit
if (str.trim().length === 0) {
    return false;
}
str.trim() removes leading and trailing whitespace.
str.trim().length === 0 checks if the trimmed string is empty.
If the string is empty after trimming, the function returns false.
Split the String into Words

javascript
Copy
Edit
words = str.split(" ");
str.split(" ") splits the input string into an array of words using spaces as delimiters.
For example, "Watch AskGurdit reels on youtube channel today only" becomes:
javascript
Copy
Edit
["Watch", "AskGurdit", "reels", "on", "youtube", "channel", "today", "only"]
Find the Longest Word Using reduce

javascript
Copy
Edit
return words.reduce(
    (acc, curWord) => (curWord.length > acc.length ? curWord : acc), ""
);
Initial Value: "" is the initial value of acc (short for "accumulator").

Comparison Logic:

For each word (curWord) in the array, its length is compared to the length of the current longest word (acc).
If the current word is longer, it becomes the new value of acc.
Otherwise, acc remains unchanged.
Example Iterations:

Initial value: acc = "".
Compare acc with "Watch": "Watch" is longer → acc = "Watch".
Compare acc with "AskGurdit": "AskGurdit" is longer → acc = "AskGurdit".
Continue with "reels", "on", etc., updating acc only if the current word is longer.
Return the Longest Word
Once the array is fully traversed, reduce returns the longest word.

Console Output

javascript
Copy
Edit
console.log(
    findLongestWord("Watch AskGurdit reels on youtube channel today only")
);
The function returns "AskGurdit" because it is the longest word in the string. */