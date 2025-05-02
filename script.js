

// array lessons 
//1. Create an array
let a = ["apple", "banana", "cherry",];

console.log(a); // ["apple", "banana", "cherry"]

// // 2. Access elements
let b= ["apple", "banana", "cherry",];
console.log(b[0]); // "apple"

// // 3. Add elements
let c = ["apple", "banana", "cherry",];
c.push("orange"); // adds to the end
console.log(c); // ["apple", "banana", "cherry", "orange"]

// // 4. Insert at specific index
let e= ["apple", "banana", "cherry",];
e.splice(1, 0, "grape"); // at index 1, remove 0 items, insert "grape"
console.log(e); // ["apple", "grape", "banana", "cherry", "orange"]

// // 5. Remove elements
let f = ["apple", "banana", "cherry",];
f.splice(2, 1); // remove 1 element at index 2 ("banana")
console.log(f); // ["apple", "grape", "cherry", "orange"]

// 6. Loop through the array
let g = ["apple", "banana", "cherry",];
g.forEach(g => {
    console.log(g);
});

// 7. Check if an item exists
let h = ["apple", "banana", "cherry",];
if (h.includes("apple")) {
    console.log("Apple is in the list!");
}

// 8. Get length
let k = ["apple", "banana", "cherry",];
console.log(k.length); // 4

// 9. Sort the array
let m = ["apple", "banana", "cherry",];
m.sort();
console.log(m); // ["apple", "cherry", "grape", "orange"]


//if statement
let age = 16;

if (age >= 18) {
  console.log("You are an adult.");
} else {
  console.log("You are a minor.");
}



//else if statement

let score = 75;

if (score >= 90) {
  console.log("Grade: A");
} else if (score >= 80) {
  console.log("Grade: B");
} else if (score >= 70) {
  console.log("Grade: C");
} else {
  console.log("Grade: F");
}


let fruits = ["apple", "banana", "cherry"];

if (fruits.includes("apple")) {
  console.log("Apple is in the list!");
} else {
  console.log("Apple is not in the list.");
}

let message = "Hello world";

console.log(message.includes("world")); // true
console.log(message.includes("bye"));   // false


