// Write a function that takes an array of users as inputs and returns only the users who are more than 18 years old

let users = [{
    name:"Sanjay",
    age:23,
},
{
    name:"Roshni",
    age:22,
},
{
    name:"Ajay",
    age:16,
}];

let canVote = users.filter((user)=>user.age>18);
console.log(canVote)