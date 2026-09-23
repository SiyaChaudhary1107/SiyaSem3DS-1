const EventEmitter = require('events');
const readline = require('readline');
const fs = require('fs');

class StudentPortal extends EventEmitter {}
const portal = new StudentPortal();

// --- 1. Event Listeners Register Karna ---
portal.on('login', (studentName) => {
    console.log(`\n[EVENT]: ${studentName} logged successfully`);
});

portal.on('assignment', (subject) => {
    console.log(`\n[EVENT]: assignment submitted for ${subject}`);
});

portal.on('logout', (studentName) => {
    console.log(`\n[EVENT]: ${studentName} logged out`);
});

portal.on('exit', () => {
    console.log('\n[EVENT]: exiting application...');
});

// --- 2. Readline Setup for User Input ---
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function handleMenu() {
    console.log('\n=== STUDENT PORTAL ===');
    console.log('1. Login');
    console.log('2. Assignment Submit');
    console.log('3. Logout');
    console.log('4. Async I/O Event Demo (Event Loop Test)');
    console.log('5. Exit');
    
    rl.question('\nEnter choice (1-5): ', (choice) => {
        switch (choice.trim()) {
            case '1':
                rl.question('Enter Student Name: ', (name) => {
                    portal.emit('login', name || 'Student');
                    handleMenu();
                });
                break;

            case '2':
                rl.question('Enter Subject Name: ', (subject) => {
                    portal.emit('assignment', subject || 'General Assignment');
                    handleMenu();
                });
                break;

            case '3':
                rl.question('Enter Student Name: ', (name) => {
                    portal.emit('logout', name || 'Student');
                    handleMenu();
                });
                break;

            case '4':
                // Reference Code Logic: I/O Callback inside fs.readFile
                console.log('\n--- Triggering Asynchronous I/O Event Flow ---');
                fs.readFile(__filename, () => {
                    setTimeout(() => portal.emit('exit'), 0);
                    setImmediate(() => portal.emit('logout', 'Async User'));
                    process.nextTick(() => portal.emit('assignment', 'Data Structures (Async)'));
                    portal.emit('login', 'Async User');

                    // Demo output dikhane ke baad menu restore karein
                    setTimeout(() => handleMenu(), 100);
                });
                break;

            case '5':
                portal.emit('exit');
                rl.close();
                break;

            default:
                console.log('\nInvalid choice! Please select 1-5.');
                handleMenu();
                break;
        }
    });
}

// Start Portal
handleMenu();