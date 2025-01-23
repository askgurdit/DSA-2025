// Ques write a fucntion to find logest wiord that takes a string as input and returns the longest word in the string. if there are multiple lonest words, return the first one encounteered

// constraints : 
// input may contain alphabetic ch, digit, spacees and punctutation
// input will not be empty
// imput string may contian multiple words separated by spaces

// Note:
// if string is empty or contains only whitespaces , the fn should return an false
// fn should ignore leading and trailing whitespaces when detrmining the longest word

const findLongestWord = (str) => {
    if (str.trim().length === 0) {
        return false;
    }


words = str.split(" ");
// words = words.sort((a,b) => a.length - b.length);
words = words.sort((a,b) => b.length - a.length);
console.log(words);
// return words[words.length - 1];
return words[0];

}

console.log (
    findLongestWord ("Watch AskGurdit reels on youtube channel today only")
);
