const fs = require("fs");

fs.writeFile("myfile.txt", "hey dear", (err) => {
  if (err) throw err;
  console.log("The file has been saved!");
});

let counter = 1; //CPU intensive task
for (let i = 1; i < 100000000; i++) {
  counter = counter + i;
}
console.log(counter);
