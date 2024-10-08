# Week1Assignments.github.io
## Week1 Assignments by 100xdevs

## SyntaxOfJavascript

#### Assignment 0.1:
Create a variable for each of the following: your favorite color, your height in centimeters, and whether you like pizza. Use appropriate variable declarations (let, const, or var). Try logging it using console.log

#### Assignment 0.2:
Write an if/else statement that checks if a number is even or odd. If it's even, print "The number is even." Otherwise, print "The number is odd."

#### Assignment 0.3:
Write a function called sum that finds the sum from 1 to a number

#### Assignment 1:
Write a function sum that finds the sum of two numbers. 
Side quest - Try passing in a string instead of a number and see what happens?

#### Assignment 2:
Write a function called canVote that returns true or false if the age of a user is > 18

## SyntaxOfJavascript

#### Assignment 1:
Write a function that takes a user as an input and greets them with their name and age

#### Assignment 2:
Write a function that takes a new object as input which has name , age  and gender and greets the user with their gender (Hi Mr/Mrs/Others harkirat, your age is 21)

#### Assignment 3:
// Also tell the user if they are legal to vote or not

#### Assignment 4.0:
Write a function that takes an array of numbers as input, and returns a new array with only even values. Read about filter in JS

#### Assignment 4.1:
Write a function that takes an array of users as inputs and returns only the users who are more than 18 years old

#### Assignment 4.2:
Create a function that takes an array of objects as input, and returns the users whose age > 18 and are male

## Week2 Assignments by 100xdevs

#### Write code that, logs hi after 1 second, logs hello 3 seconds after step 1, logs hello there 5 seconds after step 2.

#### Promisified Version of setTimeout : callbackhell.js
 
#### Promisified Version of readFile : readFilePromisified.js

#### Promisified Version of fetch: setTimeoutPromisified.js

### easy

#### 1-counter.js : Create a counter in JavaScript
We have already covered this in the second lesson, but as an easy recap try to code a counter in Javascript It should go up as time goes by in intervals of 1 second.

#### 2-counter.js : Counter without setInterval
Without using setInterval, try to code a counter in Javascript.

#### 3-read-from-file.js : Reading the contents of a file
Write code to read contents of a file and print it to the console. You can use the fs library to as a black box, the goal is to understand async tasks. Try to do an expensive operation below the file read and see how it affects the output. Make the expensive operation more and more expensive and see how it affects the output.

#### 4-write-to-file.js : Write to a file
Using the fs library again, try to write to the contents of a file. You can use the fs library to as a black box, the goal is to understand async tasks.

### hard (promises)

#### 1-promisify-setTimeout.js :
Write a function that returns a promise that resolves after n seconds have passed, where n is passed as an argument to the function.

#### 2-sleep-completely.js : 
Write a function that halts the JS thread (make it busy wait) for a given number of milliseconds.
During this time the thread should not be able to do anything else. the function should return a promise just like before

#### 3-promise-all.js :
Write 3 different functions that return promises that resolve after t1, t2, and t3 seconds respectively.Write a function that uses the 3 functions to wait for all 3 promises to resolve using Promise.all,Return a promise.all which return the time in milliseconds it takes to complete the entire operation.

#### 4-promise-chain.js :
Write 3 different functions that return promises that resolve after t1, t2, and t3 seconds respectively.
Write a function that sequentially calls all 3 of these functions in order.
Return a promise chain which return the time in milliseconds it takes to complete the entire operation.
Compare it with the results from 3-promise-all.js

### medium

#### fileCleaner.js :
Read a file, remove all the extra spaces and write it back to the same file.
For example, if the file input was
hello     world    my    name   is       raman
After the program runs, the output should be ->
hello world my name is raman

#### 2-clock.js :
Using 1-counter.md or 2-counter.md from the easy section, can you create a clock that shows you the current machine time?
Can you make it so that it updates every second, and shows time in the following formats -
HH:MM::SS (Eg. 13:45:23)
HH:MM::SS AM/PM (Eg 01:45:23 PM)

## Week-2

### easy

#### anagram.js :
Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
What's Anagram?
A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.

#### expenditure-analysis.js

Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
and return a list of objects where each object is unique category-wise and has total price spent as its value.
transactions is an array where each
Transaction - an object like 
    {
    id: 1,
    timestamp: 1656076800000,
    price: 10,
    category: 'Food',
    itemName: 'Pizza',
}
Output - [{ category: 'Food', totalSpent: 10 }] // Can have multiple categories, only one example is mentioned here

### medium

#### countVowels.js:
Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').
Once you've implemented the logic, test your code by running

#### palindrome.js:
Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.

#### times.js:
Write a function that calculates the time (in seconds) it takes for the JS code to calculate sum from 1 to n, given n as the input.
Try running it for
1. Sum from 1-100
2. Sum from 1-100000
3. Sum from 1-1000000000
Hint - use Date class exposed in JS
There is no automated test for this one, this is more for you to understand time goes up as computation goes up


#### findLargestElement.js
Write a function `findLargestElement` that takes an array of numbers and returns the largest element.
  Example:
  - Input: [3, 7, 2, 9, 1]
  - Output: 9


### hard

#### calculator.js :
Implement a class `Calculator` having below methods
- initialise a result variable in the constructor and keep updating it after every arithmetic operation
- add: takes a number and adds it to the result
- subtract: takes a number and subtracts it from the result
- multiply: takes a number and multiply it to the result
- divide: takes a number and divide it to the result
- clear: makes the `result` variable to 0
- getResult: returns the value of `result` variable
- calculate: takes a string expression which can take multi-arithmetic operations and give its result
    example input: `10 +   2 *    (   6 - (4 + 1) / 2) + 7`
    Points to Note: 
    1. the input can have multiple continuous spaces, you're supposed to avoid them and parse the expression correctly
    2. the input can have invalid non-numerical characters like `5 + abc`, you're supposed to throw error for such inputs

Once you've implemented the logic, test your code by running

#### todo-list.js :
Implement a class `Todo` having below methods
- add(todo): adds todo to list of todos
- remove(indexOfTodo): remove todo from list of todos
- update(index, updatedTodo): update todo at given index
- getAll: returns all todos
- get(indexOfTodo): returns todo at given index
- clear: deletes all todos
Once you've implemented the logic, test your code by running
