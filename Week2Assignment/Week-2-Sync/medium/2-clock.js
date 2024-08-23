// Using 1-counter.md or 2-counter.md from the easy section, can you create a clock that shows you the current machine time?
// Can you make it so that it updates every second, and shows time in the following formats -
// HH:MM::SS (Eg. 13:45:23)
// HH:MM::SS AM/PM (Eg 01:45:23 PM)

// 1-counter.md : setInterval

function setIntervalCounter() {
  setInterval(() => {
    let date = new Date();
    let getHours = date.getHours().toString().padStart(2, "0");
    let getMinutes = date.getMinutes().toString().padStart(2, "0");
    let getSeconds = date.getSeconds().toString().padStart(2, "0");

    let period = getHours >= 12 ? "PM" : "AM";
    let hour12 = (getHours % 12 || 12).toString().padStart(2, "0");

    let format24Hour = `${getHours}:${getMinutes}:${getSeconds}`;
    let format12Hour = `${hour12}:${getMinutes}:${getSeconds} ${period}`;

    console.log(format24Hour);
    console.log(format12Hour);
  }, 1000);
}

setIntervalCounter();-

// 2-counter.md : setTimeout

function setTimeoutCounter() {
  let date = new Date();
  let getHours = date.getHours().toString().padStart(2, "0");
  let getMinutes = date.getMinutes().toString().padStart(2, "0");
  let getSeconds = date.getSeconds().toString().padStart(2, "0");

  let period = getHours >= 12 ? "PM" : "AM";
  let hour12 = (getHours % 12 || 12).toString().padStart(2, "0");

  let format24Hour = `${getHours}:${getMinutes}:${getSeconds}`;
  let format12Hour = `${hour12}:${getMinutes}:${getSeconds} ${period}`;

  console.log(format24Hour);
  console.log(format12Hour);

  setTimeout(setTimeoutCounter, 1000);
}

setTimeoutCounter();
