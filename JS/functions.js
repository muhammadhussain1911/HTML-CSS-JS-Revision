function logging() {
  console.log("Adding function")
}

// logging()
// 
// 
function add() {
  const a = prompt("write 1st number")
  const b = prompt("write 2st number")
  const c = a + b;
  console.log(c);
}
// add()

function add1(a, b) {
  const c = a + b;
  console.log(c);
}
// add1(21, 27)

// function login(username) {
//     return `Congratulation ${username}! You have successfully logged in.`
// }

// console.log(typeof login("hussain"))

// function login1(username) {
//     console.log(`Congratulation ${username}! You have successfully logged in.`) 
// }

// console.log(typeof login1("ali"))

function addCartProducts(...price) { // rest operator will combine all values in a single array
    return price
}

console.log(addCartProducts(200, 230));

function addCartProducts1(...price) {
    let finalNum = 0;
    for (let i = 0; i<price.length; i++) {
      finalNum = finalNum + price[i]
    }
    return finalNum;
}

// console.log(addCartProducts1(200, 230, 240, 340));

// const addition = function(a, b) { // function expression
//   console.log(a + b);
// }

// addition(2, 3)


(function subtract() {
  const a = 23;
  const b = 12;
  console.log(a - b)
})()

