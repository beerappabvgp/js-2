// 11 iterations 

for (let i = 0; i < 11; i++) {
    console.log(i);
}

// i => 0 to 10
//  i++ => i = 4 => i++ => 4 + 1 => 5

let number = 0;

while (number < 11) {
    console.log(number);
    number += 1;
}

// If you dont know the number of iterations then you can go for while loop or else for loop


// Ternary operators


let age = 12;

(age >= 18) ? console.log("The person is eligible for voting ... ") : console.log("The person is not eligible for voting ... ");



// do-while loop in js


do {
    console.log("Atleast one time the loop will be executed ... ");
} while (false);


while(false) {
    console.log("While loop ... ");
}


// continue 


// Again I wanted to print all the natural numbers from 0 to 10 except 5;

for (let i = 0; i < 11; i++) {
    if ( i == 5) {
        continue;
    }
    console.log(i);
}

for (let i = 0; i < 11; i++) {
    if ( i == 5) {
        break;
    }
    console.log(i);
}