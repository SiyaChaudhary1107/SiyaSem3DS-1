console.log("1. Synchronous (Call Stack)");

setTimeout(() => {
  console.log("4. setTimeout (Timers Phase)");
}, 0);

setImmediate(() => {
  console.log("5. setImmediate (Check Phase)");
});

process.nextTick(() => {
  console.log("3. process.nextTick (Microtask - executes before the loop continues)");
});

console.log("2. Synchronous (Call Stack)");