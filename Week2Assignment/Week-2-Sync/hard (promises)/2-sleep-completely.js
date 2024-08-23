function wait(n) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(n);
    }, n * 1000);
  });
}
wait(2).then(() => {
  console.log("Hey sanjay");
});

module.exports = wait;
