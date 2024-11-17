let name = "john";
let age = 25;

console.log("My name is " + name + "and I am" + age + "years old.");

console.log(`My name is ${name} and I am ${age} years old.`)




// 22222222222222222222222222

let num = 9;
if(num % 3===0) {
    console.log("The number is even");
}
else {
    console.log("The number is odd");
}


// 33333333333333333333333

for (let i = 1; i <= 7; i++) {
    console.log(i);
}

// 444444444444444444444444444

function addNumbers(a, b, e) {
    return a + b + e;

}
let result = addNumbers(5, 9, 10);
console.log("The sum is", result);

// 555555555555555555555555555

let fruits = ["apple", "banana", "cherry"];
fruits.push("orange");


console.log("First fruit:", fruits[0]);
console.log("Total number of fruits:", fruits.length)



// 66666666666666666666666666666666


let number = [1, 2, 3, 4, 5, 6, 7, 8];

number.forEach(function(num) {
    console.log(num * 2);
});



// 77777777777777777777777777777777


let button = document.getElementById("changeText");
let heading = document.querySelector("#container h1");

button.addEventListener("click", function(){
    heading.textContent = "You clicked the button";
})

// 8888888888888888888888888888888888888


let text = "hello worid";

let uppercaseText = text.toUpperCase();
console.log(uppercaseText);

// 9999999999999999999999999999999999


let person = {
    name: "Alice",
    age: 30,      
    greet: function() {
        return `Hello, my name is ${this.name}.`;
    }
};


console.log(person.greet());