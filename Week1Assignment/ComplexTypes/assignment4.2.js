// Create a function that takes an array of objects as input, and returns the users whose age > 18 and are male

let users = [{
    name:"Sanjay",
    age:23,
    gender:"male"
},
{
    name:"Roshni",
    age:22,
    gender:"female"
},
{
    name:"Ajay",
    age:16,
    gender:"male"
}];

let canVote = users.filter((user)=>user.age>18 && user.gender.toUpperCase()=="MALE");
console.log(canVote)