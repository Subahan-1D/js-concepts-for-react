// dot vs bracket notation

// conceptual session

const great = "Hello Word";
const phoneCall = great.substring(0, 5);
const phoneCall1 = great.slice(0, 5);
// console.log(phoneCall);
// console.log(phoneCall1);

// javascript padding
const id = "9";
// padding
const fullId = id.padStart(8, "0");
// console.log(fullId)

const studentNumber = 1;
// console.log(typeof studentNumber)
const studentNumberString = studentNumber.toString();
// console.log( studentNumberString.padStart(4,"0"))

// mangopot

let mangoPot = 0;

for (let mango = 0; mango < 10; mango++) {
  mangoPot = mangoPot + 1;
}
// console.log(mangoPot)

const names = ["juwel", "subahan", "imran"];

for (let i = 0; i < 3; i++) {
  //     const name = names[i] ;
  //    console.log(name)
}

// reduce  of for of

const products = [
    {
        name: "apple",
        price:70 
    },
    {
        name: "apple",
        price:70 
    },
    {
        name: "apple",
        price:70 
    },
    {
        name: "apple",
        price:70 
    },
];
let sum = 0;
// for (let number of numbers) {
//   sum = sum + number;
// }
// console.log(sum);


// forEach
// products.forEach((product) => {
//   sum = sum + product.price ;
// });
// console.log(sum)

const numbers = [1,2,3,4,5,6]

const total = numbers.reduce((previousValue , currentValue)=>{
    return previousValue + currentValue
        
})
console.log(total)