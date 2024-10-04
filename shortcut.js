// (advanced) truthy, falsy, Ternary operator, shortcut and or

// truthy value :  {} , [] , 5 , true , "name"
// falsy value : 0, null, undefined, "" ,

const money = 40;
let food;

if (money < 100) {
  food = "Apple";
} else {
  food = "Gorar dim ";
}
// console.log(food);

// short cut ternary operator
let food1 = money > 100 ? "Apple" : "Gorar dim";
// console.log(food1);

// number to string

const num = 45;
// console.log("Number :", num);

const numString = num.toString();
// console.log("To String : ", numString);

// string to number
const input = "570";
const input1 = +input;
// console.log(input1);

//
const isActive = false;

const showUser = () => console.log("display user");
const hideUser = () => console.log("display hide");

isActive ? showUser() : hideUser();

// shortcut
//  isActive && showUser() 
// isActive || hideUser()


