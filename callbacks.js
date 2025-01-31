// // Synchronous programming

// console.log("Start of the code ... ");

// let age = 23;

// if (age >= 18) {
//     console.log("Eligible for voting ...");
// } else {
//     console.log("Not eligible for voting ... ");
// }

// console.log("End of the code .... ");

// // Asynchronous programming


// const main = () => {
//     console.log("Start of the main function ... ");
//     setTimeout(() => {
//         console.log("This function is invoked after setTimeout ... ");
//     }, 2000);
//     console.log("End of the main function ... ");
// }

// main();


// let seconds = 0;

// setInterval(() => {
//     console.log(seconds);
//     seconds += 1;
// }, 1000);


// // call stack 


// const task1 = () => {
//     console.log("Task1 ... ");
// }
// const task2 = () => {
//     console.log("Task2 ... ");
// }
// const task3 = () => {
//     console.log("Task3 ... ");
// }


// const main = () => {
//     task1();
//     task2();
//     task3();
// }

// main();


// Stack

// LIFO

// A data structure to store all your function calls 

// If you invoke some function it will be pushed to the stack 
// If the function execution competes it is popped off from the stack



// setTimeout

// setTimeout(() => {
//     console.log("This function is invoked after timeout .... ");
// }, 5000);




// callbacks 

// Passing a function as an argument to another function 

// const add = (num1, num2) => {
//     return num1 + num2;
// }

// add(23,34);

// const t1 = (t2) => {
//     console.log("Inside of task1 .... ");
//     t2();
// }

// const t2 = (t1) => {
//     console.log("Inside of t2 ... ");
// } 

// t1(t2);


// const operation = (cb) => {
//     cb();
// }

// const operation2 = () => {
//     console.log("This is operation2 ... ");
// }

// operation(operation2);




setTimeout(function() {
    console.log("Step 1");
    setTimeout(function() {
        console.log("Step 2");
        setTimeout(function() {
            console.log("Step 3");
            setTimeout(() => {
                console.log("Task 4 ...");
            }, 1000);
        }, 1000);
    }, 1000);
}, 1000);
