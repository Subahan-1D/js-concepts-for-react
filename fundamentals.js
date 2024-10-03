// How To Declare a variable user let or const
// const name  = "Subahan";
let nameIs = "Subahan";
nameIs = "sultan";
nameIs = "Rasel";
console.log(nameIs);

// 6 basic condition , > , < , <= , >= , === , !==

// 1 . > (বড়): এটি দুটি মানের মধ্যে বড় অবস্থান নির্ণয় করতে ব্যবহৃত হয়। যদি প্রথম মান দ্বিতীয় মানের চেয়ে বড় হয়, তবে এটি সত্য (true) ফলাফল দেয়, অন্যথায় মিথ্যা (false)।

10 > 5; // true (কারণ 10 বড় 5 থেকে)
3 > 8; // false (কারণ 3 ছোট 8 থেকে)

// 2 . < (ছোট):
// এটি দুটি মানের মধ্যে ছোট অবস্থান নির্ণয় করতে ব্যবহৃত হয়। যদি প্রথম মান দ্বিতীয় মানের চেয়ে ছোট হয়, তবে এটি সত্য (true) দেয়, অন্যথায় মিথ্যা (false)।

// উদাহরণ:

4 < 7; // true (কারণ 4 ছোট 7 থেকে)
9 < 2; // false (কারণ 9 বড় 2 থেকে)

// 5 . <= (ছোট বা সমান):
// এটি দুটি মানের মধ্যে তুলনা করে যদি প্রথম মান দ্বিতীয় মানের চেয়ে ছোট অথবা সমান হয়, তবে এটি সত্য (true) ফলাফল দেয়, অন্যথায় মিথ্যা (false)।

// উদাহরণ:

5 <= 5; // true (কারণ 5 সমান 5 এর)
4 <= 8; // true (কারণ 4 ছোট 8 থেকে)
6 <= 3; // false (কারণ 6 বড় 3 থেকে)

// 4 . >= (বড় বা সমান):
// এটি দুটি মানের মধ্যে তুলনা করে যদি প্রথম মান দ্বিতীয় মানের চেয়ে বড় অথবা সমান হয়, তবে এটি সত্য (true) ফলাফল দেয়, অন্যথায় মিথ্যা (false)।

// উদাহরণ:

8 >= 8; // true (কারণ 8 সমান 8 এর)
10 >= 6; // true (কারণ 10 বড় 6 থেকে)
2 >= 5; // false (কারণ 2 ছোট 5 থেকে)

// 5. === (সমান):
// এটি কড়া সমতার অপারেটর যা মান এবং টাইপ (type) উভয়েরই সমানতা পরীক্ষা করে। যদি উভয় মান এবং টাইপ একই হয়, এটি সত্য (true) ফলাফল দেয়।

// উদাহরণ:

5 === 5; // true (কারণ মান এবং টাইপ উভয়ই সংখ্যা)
"5" === 5; // false (কারণ একটি স্ট্রিং এবং অন্যটি সংখ্যা)

// 6 !== (অসমান):
// এটি কড়া অসমতার অপারেটর, যা মান এবং টাইপ উভয়ই ভিন্ন হলে সত্য (true) ফলাফল দেয়।

// উদাহরণ:

5 !== "5"; // true (কারণ টাইপ ভিন্ন, একটি সংখ্যা এবং একটি স্ট্রিং)
4 !== 4; // false (কারণ উভয় মান এবং টাইপ সমান)

// Multiple condition , && , ||

// 3 array  declare
// index,
// for loop

const numbers = [54, 54, 353, 32, 43, 2, 42, 2];
numbers[3] = 354;

// foor loop

for (let i = 0; i < numbers.length; i++) {
  const number = numbers[i];
  console.log("for loop :", number);
}

// function to number multiply : and variabel to parametter ;

function multiply(num1, num2) {
  const result = num1 * num2;
  return result;
}
const output = multiply(33, 44);
console.log("Two number multiply : ", output);

// 6 object ;
// 
const student = {
  name: "Subahan islam",
  age: 19,
  address: "Thakurgaon",
};
const studentId = 677317 ;
console.log("Home Adress", student);
console.log(student.age); // direct by property
console.log(student["name"]); // access via property string name ;
console.log(studentId) // access via property name is variable .
