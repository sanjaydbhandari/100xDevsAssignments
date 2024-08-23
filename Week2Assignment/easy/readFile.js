const fs = require("fs");

console.log("reading file");

setTimeout(() => {
  console.log("set timout completed");
}, 5000);

fs.readFile("./dummy.txt", "utf8", (err, data) => {
  console.log(data);
  console.log("File read succussfully");
});

let counter = 1; //CPU intensive task
for (let i = 1; i < 100000000; i++) {
  counter = counter + i;
}

console.log(counter);
