// promise is nothing but a js object 

// promise can be in three states one is pending, success, failure 

// const fetch = () => {
//     return new Promise((resolve, reject) => {
//         const data = ["item1", "item2", "item3"];
//         setTimeout(() => {
//             resolve(data);
//         }, 2000);
//     });
// }


// fetch()
// .then((data) => {
//     console.log("The data from amazon servers is : ", data);
// })
// .catch((error) => {
//     console.log("There was some error during fetching the data ... ", error);
// });


// JS is single threaded 



function getUser() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({ name: "John", id: 1 });
        }, 1000);
    });
}

function getUserPosts(userId) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(["Post 1", "Post 2", "Post 3"]);
        }, 1000);
    });
}

// Chaining Promises
getUser()
    .then((user) => {
        console.log("User:", user);
        return getUserPosts(user.id);  // Returning another Promise
    })
    .then((posts) => {
        console.log("User's Posts:", posts);
    })
    .catch((error) => {
        console.log("Error:", error);
    });



const p1 = new Promise((resolve) => {
    setTimeout(() => {
        resolve("data1");
    }, 1000);
});
const p2 = new Promise((resolve) => {
    setTimeout(() => {
        resolve("data2");
    }, 1000);
});
const p3 = new Promise((resolve) => {
    setTimeout(() => {
        resolve("data3");
    }, 1000);
});
const p4 = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject("Error");
    }, 1000);
});


Promise.all([p1, p2, p3, p4])
.then((data) => console.log("All promises are successful ... "))
.catch((error) => {
    console.log("Error while executing promises ... ", error);
});