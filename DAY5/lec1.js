// const EventEmitter = require('events'); 
// const myEmitter = new EventEmitter();

// myEmitter.on('greet', (name) => {
//     console.log(`Hello, ${name}! Welcome.`);
// });

// myEmitter.on('farewell', (name) => {
//     console.log(`Goodbye, ${name}! See you soon.`);
// });

// myEmitter.emit('greet', 'Aditya');
// myEmitter.emit('farewell', 'Aditya');

// const {EventEmitter} = require('events');
// class Button extends EventEmitter{};

// const button = new Button();

// button.on('click', () => console.log('Button Clicked!'));
// button.on('mouseover', ()=> console.log('Mouse is over the Button.'));

// button.emit('click');
// button.emit('mouseover');

const fs = require('fs');

fs.readFile(__filename, () => {
    setTimeout(() => console.log('🕒 setTimeout inside I/O'), 0);
    setImmediate(() => console.log('🏃 setImmediate inside I/O'));
    process.nextTick(() => console.log('⚡ process.nextTick inside I/O'));
});
