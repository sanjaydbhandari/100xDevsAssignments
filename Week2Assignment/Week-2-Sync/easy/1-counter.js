function counter() {
  num = 0;
  setInterval(() => {
    console.log(++num);
  }, 1000);
}

counter();
