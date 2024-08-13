// Also tell the user if they are legal to vote or not

let user = {
  name: "Sanjay",
  age: 23,
  gender: "Male",
};

function getTitle(user) {
  if (user.gender.toUpperCase() == "MALE") return "Mr.";
  else if (user.gender.toUpperCase() == "FEMALE") return "Mrs.";
  else return "Others";
}

function greet(user) {
  console.log(
    "Hi " + getTitle(user) + " " + user.name + ", your age is " + user.age,
  );
}

greet(user);
