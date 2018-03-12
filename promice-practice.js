// const myNewPromise = new Promise((resolve, reject) => {
//     resolve(new Date());
// })

// myNewPromise.then((response) => {
//     console.log(response);
// })

const myArray = [];

for (let i = 0; i < 10; i++) {
    myArray.push(new Promise((resolve, reject) => {
        const num = Math.random() * 3000;
        
        setTimeout(() => resolve(i), num);
    }));
}

myArray.map(promise => {
    promise.then(id => {
        console.log(id);
    })
});