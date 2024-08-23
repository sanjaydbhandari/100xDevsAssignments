function wait(t) {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(), t * 1000);
  });
}

function wait1(t) {
  return wait(t);
}

function wait2(t) {
  return wait(t);
}

function wait3(t) {
  return wait(t);
}

function waitForAll(t1, t2, t3) {
  let startTime = Date.now();
  return Promise.all([wait1(t1), wait2(t2), wait3(t3)]).then(() => {
    endTime = Date.now();
    return endTime - startTime;
  });
}

function calculateTime(t1, t2, t3) {
  waitForAll(t1, t2, t3).then((res) => {
    console.log(res);
  });
  // console.log(`time taken to execute in ms : ${}`);
}

calculateTime(1, 2, 3);

module.exports = calculateTime;
