// Write a function that takes a user as an input and greets them with their name and age

let user = {
  name: "Sanjay",
  age: 23,
};

function greet(user) {
  console.log("Hello " + user.name + "! You are " + user.age + " years old.");
}

greet(user);
