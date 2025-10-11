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

// const sentence = "JS is a dynamic type language."
// console.log(sentence.indexOf("dynamic")); // The indexOf() method returns the index (position) of the first occurrence of a string in a string, or it returns -1 if the string is not found. The indexOf() method cannot take powerful search values (regular expressions

// const sentence1 = "Some programming languages are dynamic language. JS is a dynamic type language."
// console.log(sentence1.lastIndexOf("dynamic")); // The lastIndexOf() method returns the index of the last occurrence of a specified text in a string.

// let searchableStr = "Please search inside string. This is search method."
// console.log(searchableStr.search('search')); // The search() method searches a string for a string (or a regular expression) and returns the position of the match. The search() method cannot take a second start position argument.

// let searchableStr1 = "Please search inside string. This is search method."
// console.log(searchableStr1.search(/search/));

// The match() method returns an array containing the results of matching a string against a string (or a regular expression).

// let text = "she sells seashells on a seashore.";
// console.log(text.match("sh"));

// let text1 = "she sells seashells on a seashore."; 
// console.log(text1.match(/sh/));

// let text2 = "she sells seashells on a seashore."; // Perform a global search for "sh"
// console.log(text2.match(/sh/g));

// let text3 = "she sells seashells on a seashore."; // Perform a global, case-insensitive search for "ain"
// console.log(text3.match(/Sh/gi));


// const essayOnCow = "Cow is a pet. Cow has four legs. Cow gives milk." // The matchAll() method returns an iterator containing the results of matching a string against a string (or a regular expression).
// const iterator = essayOnCow.matchAll("Cow");
// console.log(Array.from(iterator));


// const essayOnCow1 = "Cow is a pet. Cow has four legs. Cow gives milk."
// const iterator1 = essayOnCow1.matchAll(/Cow/g); // If the parameter is a regular expression, the global flag (g) must be set, otherwise a TypeError is thrown.
// console.log(Array.from(iterator1));

// const essayOnCow2 = "Cow is a pet. Cow has four legs. Cow gives milk.";
// const iterator2 = essayOnCow2.matchAll(/COW/gi); // matchAll() does not work in Internet Explorer.
// console.log(Array.from(iterator2));

// let location = "Please locate where 'locate' occurs!";
// let locationIndex = location.indexOf("locate");
// console.log(locationIndex);

// let location1 = "Please locate where 'locate' occurs!";
// let locationIndex1 = location1.lastIndexOf("locate");
// console.log(locationIndex1);


// const includeStr = "My name is Muhammad Hussain."
// console.log(includeStr.includes('name')); // The includes() method returns true if a string contains a specified value. includes() is case sensitive.

// const includeStr1 = "My name is Muhammad Hussain."
// console.log(includeStr1.includes('name', 8)); // Check if a string includes "world". Start at position 8

// const startStr = "My name is Muhammad Hussain."
// console.log(startStr.startsWith("My")); // The startsWith() method returns true if a string begins with a specified value.

// const startStr1 = "My name is Muhammad Hussain." 
// console.log(startStr1.startsWith('My', 8)); // A start position for the search can be specified.

// const endStr = "My name is Muhammad Hussain." 
// console.log(endStr.endsWith('Hussain.')); // A start position for the search can be specified.

// const endStr1 = "My name is Muhammad Hussain." 
// console.log(endStr1.endsWith('Hussain.', 8)); // A start position for the search can be specified.

const str1 = "ABC";
const str2 = "GHI";
console.log(str1.localeCompare(str2)); // The localeCompare() method compares two strings in the current locale. The localeCompare() method returns sort order -1, 1, or 0 (for before, after, or equal). The current locale is based on the language settings of the browser.

const str3 = "ABC";
const str4 = "GHI";
console.log(str3.localeCompare(str4)); // -1 if the string is sorted before the compareString.

const str5 = "ABC";
const str6 = "ABC";
console.log(str5.localeCompare(str6)); // 0 if the two strings are equal.

const str7 = "XYZ";
const str8 = "GHI";
console.log(str7.localeCompare(str8)); // 1 if the string is sorted after the compareString.