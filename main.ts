// Tutorial # 1 
//if statement
//  A person is eligible for vote if his age is equal to or greater than 18 ,To check whether you are eligible for vote or not

let age: number = 15;
if(age >= 18) {
    console.log("you can vote");
}
if(age <=18) {
    console.log("you cannot vote");
}

// Tutorial # 2
// A cricket match will play if weather will fine ,To check the weather conditions whether match will paly or not

let weather: string = "stromy";
let match;
if(weather === "stromy") {
    match = "Will not play";
}
if(weather === "Fine") {
    match = "Will play";
}
console.log("As per weather conditions match" , match);

// Tutorial # 3
// If-else statement
// To check whether the number is even or odd

let num: number = 20;
if(num % 2 === 0) {
    console.log(num, "is even");
} else {
    console.log(num, "is odd");
}

// Tutorial # 4
// else-if statement
// To check the age whether you are in primary, middle or senoir

let age: number = 10;
if(age === 5 ) {
    console.log(age, "you are in primary");
} else if(age === 10) {
    console.log(age, "you are in middle");
} else {
    console.log(age, "you are senior");
}

// Tutorial # 5
// To check whether the number is a multiple of 5 or not

let num = 50
for(let num = 0; num<= 100; num++);
if(num % 5 === 0) {
    console.log(num, "number is a multiple of 5");
}else{
    console.log(num, "number is not a multiple of 5")
};



// tutorial # 6 Ternary operators
// A person is eligible for marriage if his age is equal to greater than 25, To check as per your age whether yo are eligible for marrige or not



let  age = 30;
let result = age >= 25 ? "you are eligible for marrige" : "you are not eligible for merrige";
console.log(result);


// Tutorial # 7
// To check color as per modes

let mode: string = "no";
let color;
if(mode == "white") {
    color = "light";
}else if(mode == "dark") {
    color = "black";
}else if(mode === "low") {
    color = "blue";
}else {
    color = "no color";
}
console.log("As per your mode your color is", color);


// Tutorial # 8
// To check whether number is a multiple of 5 or not


let num: number = 24;
if(num % 5 === 0) {
    console.log(num,"is a multiple of 5");
}else {
    console.log(num,"is not a multiple of 5");
}

// Tutorial # 9

// To check grade of a student as per obtained marks.

let marks: number = 85;
let grade;
if(marks >= 90 && marks <= 100) {
    grade = "A";
}else if(marks >= 80 && marks <= 90) {
    grade = "B";
}else if(marks >= 70 && marks <= 80) {
    grade = "C";
}else if(marks >= 60 && marks <= 70) {
    grade = "D";
}else if(marks >= 50 && marks <= 60) {
    grade = "E";
}else {
    grade = "F";
}
console.log(marks,"As per your marks your grade is", grade);
