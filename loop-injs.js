// for loop //
let a = 1;
for (a = 1; a<=10; a++) {
    console.log("Number:" + a)
}
// while loop //
let i = 1;
while (i <=10 ) {
    console.log("Number:" + i++);
}
let c = 1;
do {
    console.log("Number:" + c);
} while (c++ && c<=10);
// for of loop//
let colors = ["red", "green", "blue", "yellow"];
for (let color of colors) {
    console.log(color);
}
// for in loop //
let student = { 
    name: "ifeanyi",
    age: 25,
    level: "300lv"
};
for (let key in student) {
    console.log(key + ":" + student[key]);
}
// prompt //
let name = prompt ("What is your name?");
console.log("Hello," + name);