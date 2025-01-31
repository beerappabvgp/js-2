// async/await 


const fetch = () => {
    return new Promise((resolve, reject) => {
        const data = ["item1", "item2", "item3"];
        setTimeout(() => {
            resolve(data);
        }, 2000);
    });
}

const main = async () => {
    const data = await fetch();
    console.log("The data from servers are : ", data);
}

main();