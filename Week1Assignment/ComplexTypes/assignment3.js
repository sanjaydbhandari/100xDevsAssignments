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

function canVote(user) {
  if(user.age > 18)
    return "you are eligible to vote"
  else
    return "you are not eligible to vote"
}

function greet(user) {
  console.log(
    "Hi " + getTitle(user) + " " + user.name + ", your age is " + user.age + ", " +canVote(user),
  );
}

greet(user);
