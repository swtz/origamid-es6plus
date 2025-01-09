import Countdown from "./countdown.js";

const timeUntilDay26 = new Countdown("8 February 2025 20:59:59 GMT-0300");
const timeUntilNewYear = new Countdown("31 December 2025 23:59:59 GMT-0300");

console.log(timeUntilDay26.total);
console.log(timeUntilNewYear.total);
