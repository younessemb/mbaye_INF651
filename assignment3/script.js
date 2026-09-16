"use strict";

// ---------- Challenge 1 - Type Conversion ----------
let numberAsString = "42";

console.log("Original value:", numberAsString, "| Type:", typeof numberAsString);

let convertedNumber = Number(numberAsString);
console.log("Converted value:", convertedNumber, "| Type:", typeof convertedNumber);
console.log("Converted number + 10:", convertedNumber + 10);

// What I understood:
// Number() takes a string and turns it into an actual numeric value instead of text.
// Before converting, typeof showed "string", and after converting it showed "number".
// This matters because you can't do real math on a string, only on an actual number.


// ---------- Challenge 2 - Type Coercion ----------
let stringNumber = "5";
let actualNumber = 10;

console.log("String + Number:", stringNumber + actualNumber, "| Type:", typeof (stringNumber + actualNumber));
console.log("String - Number:", stringNumber - actualNumber, "| Type:", typeof (stringNumber - actualNumber));
console.log("String * Number:", stringNumber * actualNumber, "| Type:", typeof (stringNumber * actualNumber));

// What I understood:
// JavaScript automatically converts types depending on the operator, which is called coercion.
// With +, it joined the string and number together as text instead of adding them.
// But with - and *, JavaScript converted the string into a number first and did real math.


// ---------- Challenge 3 - Truthy and Falsy ----------
let nonEmptyString = "Hello";
let emptyString = "";
let zeroValue = 0;
let positiveNumber = 25;
let nullValue = null;
let undefinedValue = undefined;

console.log("Non-empty string:", Boolean(nonEmptyString));
console.log("Empty string:", Boolean(emptyString));
console.log("Zero:", Boolean(zeroValue));
console.log("Positive number:", Boolean(positiveNumber));
console.log("Null:", Boolean(nullValue));
console.log("Undefined:", Boolean(undefinedValue));

// What I understood:
// Some values act like true and some act like false even when they aren't the actual words true/false.
// Empty string, 0, null, and undefined are all falsy, while a non-empty string and a positive number are truthy.
// This is useful because you can check a value directly in an if statement without comparing it manually.


// ---------- Challenge 4 - if/else Age Eligibility ----------
function checkEligibility(age) {
  if (age >= 18) {
    console.log(`Age ${age}: You are eligible.`);
  } else {
    console.log(`Age ${age}: You are not eligible yet.`);
  }
}

checkEligibility(20);
checkEligibility(15);

// What I understood:
// The if/else statement checks a condition and chooses which code to run.
// If the condition is true, the if block runs, and if it's false, the else block runs instead.
// Only one of the two blocks ever runs for a given input, never both.


// ---------- Challenge 5 - else if Grade Checker ----------
function getGrade(score) {
  let grade;

  if (score >= 90) {
    grade = "A";
  } else if (score >= 80) {
    grade = "B";
  } else if (score >= 70) {
    grade = "C";
  } else if (score >= 60) {
    grade = "D";
  } else {
    grade = "F";
  }

  console.log(`Score ${score}: Grade ${grade}`);
}

getGrade(95);
getGrade(82);
getGrade(58);

// What I understood:
// else if lets you check several conditions in order, one after another, until one is true.
// As soon as a condition matches, that block runs and the rest are skipped entirely.
// The order matters here because a score checked against >= 90 first stops it from falling into the wrong range.


// ---------- Challenge 6 - switch Campus Services ----------
function showServiceMessage(service) {
  switch (service) {
    case "library":
      console.log("The library is open until 10 PM.");
      break;
    case "tutoring":
      console.log("Tutoring is available in the student center.");
      break;
    case "parking":
      console.log("Parking permits can be purchased online.");
      break;
    case "technology":
      console.log("Tech support is located in the IT building.");
      break;
    default:
      console.log("Service not recognized.");
  }
}

showServiceMessage("library");
showServiceMessage("parking");
showServiceMessage("gym");

// What I understood:
// A switch statement compares one variable against several possible values instead of writing many if/else statements.
// The break keyword stops the code from continuing into the next case once a match is found.
// The default case acts like a fallback for any value that doesn't match one of the listed cases.


// ---------- Challenge 7 - Ternary Operator ----------
function showLoginStatus(isLoggedIn) {
  let message = isLoggedIn ? "Welcome back!" : "Please log in.";
  console.log(message);
}

showLoginStatus(true);
showLoginStatus(false);

// What I understood:
// The ternary operator is a shorter way to write an if/else statement in a single line.
// It follows the pattern condition ? valueIfTrue : valueIfFalse.
// It's useful for quick decisions where you just need to pick between two values.


// ---------- Challenge 8 - Student Status Program ----------
let studentName = "Younesse Mbaye";
let studentAge = 21;
let studentScore = 87;
let studentMajor = "Informatics";
let isEnrolled = true;

let isAdult = studentAge >= 18 ? "Yes" : "No";

let studentGrade;
if (studentScore >= 90) {
  studentGrade = "A";
} else if (studentScore >= 80) {
  studentGrade = "B";
} else if (studentScore >= 70) {
  studentGrade = "C";
} else if (studentScore >= 60) {
  studentGrade = "D";
} else {
  studentGrade = "F";
}

let enrollmentStatus = isEnrolled ? "Enrolled" : "Not Enrolled";

console.log(`Student: ${studentName}
Age: ${studentAge}
Major: ${studentMajor}
Adult: ${isAdult}
Score: ${studentScore}
Grade: ${studentGrade}
Status: ${enrollmentStatus}`);

// What I understood:
// This challenge combined everything from the earlier ones into one program.
// I used a ternary for the simple yes/no and enrolled/not-enrolled checks, and else if for the grade since it needed multiple ranges.
// Template literals made it easy to build one clean summary message using all the variables together.


// ---------- Challenge 9 - Strict Mode ----------
// What I understood:
// "use strict" at the top of the file tells JavaScript to enforce stricter rules while running the code.
// It catches mistakes like using a variable that was never declared, which would otherwise fail silently.
// It's good practice to include it because it helps avoid small bugs that are hard to notice.
