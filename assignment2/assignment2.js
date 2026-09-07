// ---------- 1. Variables and Data Types ----------
let personName = "Younesse";
let age = 21;
let isStudent = true;

console.log("Name:", personName, "| Type:", typeof personName);
console.log("Age:", age, "| Type:", typeof age);
console.log("Is Student:", isStudent, "| Type:", typeof isStudent);


// ---------- 2. Basic Arithmetic Operations ----------
let num1 = 12;
let num2 = 4;

console.log("Addition:", num1 + num2);
console.log("Subtraction:", num1 - num2);
console.log("Multiplication:", num1 * num2);
console.log("Division:", num1 / num2);


// ---------- 3. Working with Strings ----------
let sentence = "JavaScript is fun to learn.";

console.log("String length:", sentence.length);
console.log("First character:", sentence.charAt(0));
console.log("Last character:", sentence.charAt(sentence.length - 1));


// ---------- 4. Math Object ----------
let negativeNumber = -16;

console.log("Square root:", Math.sqrt(Math.abs(negativeNumber)));
console.log("Squared:", Math.pow(negativeNumber, 2));
console.log("Absolute value:", Math.abs(negativeNumber));


// ---------- 5. Boolean Logic and Comparison Operators ----------
let numA = 10;
let numB = 20;

console.log("Is numA greater than numB?", numA > numB);
console.log("Is numA less than numB?", numA < numB);
console.log("Is numA equal to numB?", numA === numB);


// ---------- 6. Logical Operators ----------
let boolA = true;
let boolB = false;

console.log("AND:", boolA && boolB);
console.log("OR:", boolA || boolB);
console.log("NOT boolA:", !boolA);


// ---------- 7. Template Literals ----------
let firstName = "Younesse";
let lastName = "Mbaye";

let greeting = `Hello, ${firstName} ${lastName}! Welcome to JavaScript.`;
console.log(greeting);
