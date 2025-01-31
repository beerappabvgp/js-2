console.log(task);

var task = () => {
    let age = 23;
    return age;
}

console.log(task());
// under the hood 

// let task;  TDZ
// console.log(task());
// task = () => {
    // let age = 23;
// }
// console.log(task())

// task() => function call
// console.log(task) => task is a variable

// execution context in js 


// Every declaration in js will be hoisted to the top of the scope
