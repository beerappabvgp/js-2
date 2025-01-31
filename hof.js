// Higher order functions 

// returning a function to the callee
const task = () => {
    console.log("Task .... ");
    return () => {
        console.log("This is returned from task function ... ");
    }
}

task()();


// HOF
setTimeout(() => {
    console.log("After timeout ... ");
}, 1000);


// map, filter, reduce

const nums = [1,2,3,4,5];

const doubles = [];

for (let i = 0; i < nums.length; i++) {
    doubles.push(nums[i] * nums[i]);
}

console.log(doubles);

// const nums = [1,2,3,4,5];
const doublesFromMap = nums.map((num) => {
    return num * num;
});


// const nums = [1,2,3,4,5];
const evenNumbers = nums.filter((num) => {
    if ((num % 2) == 0) {
        return num;
    }
});

console.log("even numbers ... ", evenNumbers);

console.log("doublesFromMap: ", doublesFromMap);