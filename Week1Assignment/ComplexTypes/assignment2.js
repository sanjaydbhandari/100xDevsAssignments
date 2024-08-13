// Write a function that takes a new object as input which has name , age  and gender and greets the user with their gender (Hi Mr/Mrs/Others harkirat, your age is 21)

let user = {
  name: "Sanjay",
  age: 23,
  gender: "Male",
};

function greet(user) {
  let title = "";
  if (user.gender.toUpperCase() == "MALE") title = "Mr.";
  else if (user.gender.toUpperCase() == "FEMALE") title = "Mrs.";
  else title = "Others";

  console.log("Hi " + title + " " + user.name + ", your age is " + user.age);
}

greet(user);
