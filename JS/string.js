let myName = "   Muhammad Hussain   ";
const age = 23;

// console.log(myName);
// console.log(myName.length);

// There are 4 methods for extracting string characters:
// console.log(myName.at(3));
// console.log(myName.charAt(3));
// console.log(myName.charCodeAt(3)); // The method returns a UTF-16 code (an integer between 0 and 65535).
// console.log(myName[3]); // like in arrays
// The at() method is a new addition to JavaScript. It allows the use of negative indexes while charAt() do not. Now you can use myString.at(-2) instead of charAt(myString.length-2).
// console.log(myName.at(-4)); // Same as 
// console.log(myName.charAt(myName.length-4));
// console.log(myName.codePointAt(3));

myName[3] = 'm';
// console.log(myName);
// console.log(myName.concat("is", " ", "my", " ", "name."))

// Template Literals

// let standardStr = `Muhammad Hussain is ${age} years old.`
// let standardStr1 = `Muhammad Hussain is "23" years old.`
// let standardStr2 = `Muhammad Hussain 
//                     is "23" 
//                     years old.`
                    
// console.log(standardStr);
// console.log(standardStr1);
// console.log(standardStr2);

//Other String Methods

// let substr = myName.slice(3, 12);
// console.log(substr);
// let substr1 = myName.substring(3, 12);
// console.log(substr);
// let substr2 = myName.substr(3, 12); // substr() is similar to slice(). The difference is that the second parameter specifies the length of the extracted part.
// console.log(substr); The substr() method is removed (deprecated) in the latest JavaScript standard.
// let upperStr = myName.toUpperCase();
// console.log(upperStr);
// let lowerStr = myName.toLowerCase();
// console.log(lowerStr);
// let trimStart = myName.trimStart();
// console.log(trimStart);
// let trimEnd = myName.trimEnd();
// console.log(trimEnd);
// let trimStr = myName.trim();
// console.log(trimStr);
// let trimLeft = myName.trimLeft();
// console.log(trimLeft);
// let trimRight = myName.trimRight();
// console.log(trimRight);


// const surrogateStr = "Hello World \uD800" // A string is not well formed if it contains lone surrogates. A lone surrogate is a Unicode surrogate code point that is not part of a valid surrogate pair used to represent characters in UTF-16 encoding.
// let isWellStr = surrogateStr.isWellFormed();
// console.log(isWellStr);
// let toWellStr = surrogateStr.toWellFormed();
// console.log(toWellStr);

// let text = "xyz";
// let padded = text.padStart(7,"."); // It takes two parameter (1. total length of string you want to get, 2. by which string you want to fill the required string. )
// console.log(padded);
// let text1 = "abc";
// let padded1 = text1.padEnd(7,".h ");
// console.log(padded1);

// const myAge = "23 ";
// console.log(myAge.repeat(3));

// const githubInvite = "Please Visit my Github Profile."

// const linkedinInvite = githubInvite.replace("Github", "Linkedin"); // The replace() method does not change the string it is called on. The replace() method returns a new string. The replace() method replaces only the first match
// console.log(linkedinInvite);

// const socialmediaProfile = "Please Visit my whatsapp profile and Tiktok profile."

// const socialmediaChannel = socialmediaProfile.replaceAll("profile", "channel"); // replaceAll() does not work in Internet Explorer.
// console.log(socialmediaChannel);

// const uppercaseName = `My name in lowercase is "MUHAMMAD HUSSAIN"`;

// const lowercaseName = uppercaseName.replace(/Muhammad Hussain/i, "muhammad hussain"); // To replace case insensitive, use a regular expression with an /i flag (insensitive)
// console.log(lowercaseName);

// const animalStr = "Buff alo";
// const animalArr = animalStr.split(' ');
// console.log(animalArr);

// const petStr = "cat";
// const petArr = petStr.split("");
// console.log(petArr);

const sentence = "JS is a dynamic type language."
console.log(sentence.indexOf("dynamic"));

const sentence1 = "Some programming languages are dynamic language. JS is a dynamic type language."
console.log(sentence1.lastIndexOf("dynamic"));

let text = "The rain in SPAIN stays mainly in the plain";
text.match("ain");