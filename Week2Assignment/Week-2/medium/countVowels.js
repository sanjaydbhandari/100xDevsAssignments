/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
    let count = 0;
    str.split('').map((e)=>{
        if(e.toUpperCase()=='A'|| e.toUpperCase()=='E'|| e.toUpperCase()=='I'|| e.toUpperCase()=='O'|| e.toUpperCase()=='U')
            count++;
    });
    return count;
}

console.log(countVowels(''))

module.exports = countVowels;