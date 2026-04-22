// Student Data
let students = [
 {id:1, name:"Naveen", mark:85, course:"MERN"},
 {id:2, name:"John", mark:45, course:"Python"},
 {id:3, name:"Priya", mark:72, course:"Java"},
 {id:4, name:"Arun", mark:95, course:"React"}
];


// Task 1: Print All Students
console.log("Task 1");
for (let i = 0; i < students.length; i++) {
 console.log(
  students[i].id,
  students[i].name,
  students[i].mark,
  students[i].course
 );
}


// Task 2: Pass / Fail
console.log("\nTask 2");
for (let i = 0; i < students.length; i++) {
 if (students[i].mark >= 50) {
  console.log(students[i].name + " - Pass");
 } else {
  console.log(students[i].name + " - Fail");
 }
}


// Task 3: Grade System
console.log("\nTask 3");
for (let i = 0; i < students.length; i++) {
 let mark = students[i].mark;

 if (mark >= 90) {
  console.log(students[i].name + " - A Grade");
 } else if (mark >= 75) {
  console.log(students[i].name + " - B Grade");
 } else if (mark >= 50) {
  console.log(students[i].name + " - C Grade");
 } else {
  console.log(students[i].name + " - Fail");
 }
}


// Task 4: Topper Student
console.log("\nTask 4");
let topper = students[0];

for (let i = 1; i < students.length; i++) {
 if (students[i].mark > topper.mark) {
  topper = students[i];
 }
}
console.log("Topper is " + topper.name + " - " + topper.mark);


// Task 5: Course Search
console.log("\nTask 5");
for (let i = 0; i < students.length; i++) {
 if (students[i].course == "React") {
  console.log(students[i]);
 }
}


// Task 6: Add New Student
console.log("\nTask 6");
students.push({id:5, name:"Rahul", mark:88, course:"Node JS"});

for (let i = 0; i < students.length; i++) {
 console.log(students[i]);
}


// Task 7: Attendance System
console.log("\nTask 7");
let status = "present";

switch (status) {
 case "present":
  console.log("Welcome");
  break;
 case "absent":
  console.log("Mark Absent");
  break;
 case "leave":
  console.log("Approved Leave");
  break;
 default:
  console.log("Invalid");
}


// Task 8: Login System
console.log("\nTask 8");
let username = "admin";
let password = "1234";

if (username == "admin" && password == "1234") {
 console.log("Login Success");
} else {
 console.log("Invalid User");
}