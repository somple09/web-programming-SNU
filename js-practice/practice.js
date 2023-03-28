let myVariable = 123;
const myConstant = "Hello World";

console.log(myVariable);
console.log(myConstant);

let myNumber = 123;
let myString = "Hello World";
let myBoolean = true;
let myNull = null;
let myUndefined = undefined;
let myObject = { name: "Kevin", age: 25 };
let mySymbol = Symbol("mySymbol");

console.log(typeof myNumber); // number
console.log(typeof myString); // string
console.log(typeof myBoolean); // boolean
console.log(typeof myNull); // object (이는 JavaScript의 버그로 인해 발생한 것입니다)
console.log(typeof myUndefined); // undefined
console.log(typeof myObject); // object
console.log(typeof mySymbol); // symbol

let x = 10;
let y = 6;

console.log(x + y);
console.log(x - y);
console.log(x * y);
console.log(x / y);
console.log(x % y);

let a = true;
let b = false;

console.log(a && b); // false
console.log(a || b); // true
console.log(!a); // false

// 조건문

let score = 20;

if (score >= 40) {
  console.log("Pass");
} else if (score >= 30) {
  console.log("Retest");
} else {
  console.log("Fail");
}

let age = 20;

if (age >= 18) {
  console.log("You are an adult.");
} else if (age >= 13) {
  console.log("You are a teenager.");
} else {
  console.log("You are a child.");
}

// switch문
let gender = "undefined";

switch (gender) {
  case "female":
    console.log("Lady");
    break;
  case "male":
    console.log("Gentleman");
    break;
  case "undefined":
    console.log("Other");
    break;
  default:
    console.log("Rewrite your gender");
}

let fruit = "banana";

switch (fruit) {
  case "apple":
    console.log("This is an apple.");
    break;
  case "banana":
    console.log("This is a banana.");
  case "orange":
    console.log("This is an orange.");
    break;
  default:
    console.log("Unknown fruit.");
}

// for문
for (let i = 0; i < 5; i++) {
  console.log(i);
}

for (let i = 0; i < 5; i++) {
  console.log(i);
}

// while문
let di = 0;

while (di < 5) {
  console.log(i);
  i++;
}

let i = 10;

while (i < 15) {
  console.log(i);
  i++;
}

// 배열 순회
const arr = [11, 22, 33, 44, 55];

for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}

for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}

arr.forEach(function (element) {
  console.log(element);
});

arr.forEach(function (e) {
  console.log(e);
});
// 함수
function add(a, b) {
  return a + b;
}

let result = add(1, 2);

console.log(result); // 3

// 객체
let myObject2 = {
  name: "John",
  age: 30,
  isMarried: false,
};

console.log(myObject2.name); // John
console.log(myObject2.age); // 30
console.log(myObject2.isMarried); // false

let myObject3 = {
  name: "kevin",
  age: 25,
  gender: "male",
  isMarried: false,
};

console.log(myObject3.name);
console.log(myObject3.age);
console.log(myObject3.isMarried);

// 배열

let myArray = ["apple", "banana", "orange"];

console.log(myArray[0]); // apple
console.log(myArray[1]); // banana
console.log(myArray[2]); // orange

let myArray2 = ["Hi", "Hello", "Good Morning"];
console.log(myArray2[0]);
