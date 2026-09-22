

const { EventEmitter } = require("events");

const myEmitter = new EventEmitter();

myEmitter.on("greet", (name) => {
  console.log(`Hello, ${name}!`);
});

myEmitter.on("exit", () => {
  console.log("Exiting the application...");
});

myEmitter.emit("greet", "SIYA");
myEmitter.emit("greet", "2nd year");
myEmitter.emit("exit");

class Button extends EventEmitter {}

const button = new Button();

button.on("click", () => {
  console.log("Button clicked!");
});

button.on("mouseover", () => {
  console.log("Mouse over the button!");
});

button.emit("click");
button.emit("mouseover");