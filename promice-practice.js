const myNewPromise = new Promise((resolve, reject) => {
    resolve(new Date());
})

myNewPromise.then((response) => {
    console.log(response);
})

//----------------------------------------------------
const myArray = [];

for (let i = 0; i < 10; i++) {
    myArray.push(new Promise((resolve, reject) => {
        const num = Math.random() * 3000;

        setTimeout(() => {
            if (num < 5000) {
                resolve(i);
            } else {
                reject(i);
            }

        }, num);
    }));
}

myArray.map(promise => {
    promise.then(id => {
        console.log(id);
    }, id => {
        console.log(id + 'rejected');
    });
   
});

// myArray.map(promise => {
//     promise.then(id => {
//         console.log(id);
//     });
// });

Promise.race(myArray).then((id) => {
    console.log(id + 'first');
});

Promise.all(myArray).then((id) => {
    console.log(id + 'completed');
});



