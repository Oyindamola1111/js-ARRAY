

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

// 10. to remove element
let n = ["apple", "banana", "cherry","goro","maize","cake"];
n.pop("cake");
console.log(n);

// 11. to remove an element from the beginning of an array
let p = ["yellow","blue","red","green","pale","white"];
p.shift();
console.log(p);

// 12. to add something to the beginning of an array
let r = ["res","mallo","jumy","ople","hyretw"];
r.unshift("jumy");
console.log(r);

// 13. to convert everything in an array to string
let s = ["res","mallo","jumy","ople"];
console.log(s.join('|')); 

// 14. to know where a particular thing is in an array
let t = ["hulo","lop","bully","child","advance"];
console.log(t.indexOf("child"));

      
           
                   // OBJECTS
let obj = {
  name:"olu", 
  score:100
} 
console.log(obj);

console.log(obj.score);
console.log(obj.name);


// 1. to locate object in an array
let u = ["torn","praise","bigi",{name:"john",score:30}];
console.log(u[3]);

//2.to locate a particular element in an object inside an array
let v = ["torn","praise","bigi",{name:"john",score:30}];
console.log(v[3].name);





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


