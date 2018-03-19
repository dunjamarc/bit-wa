const os = require('os');
const figlet = require ('figlet');

let callbackArray = [];

const getText = (text) => {
    return figlet.textSync( text, {
        font: 'Ghost',
        horizontalLayout: 'default',
        verticalLayout: 'default'
    });
}

const text = (str) => {
    for(let i = 0; i < callbackArray.length; i++) {
        const message = getText(str);
        callbackArray[i](message);
    }
}

function checkMemory() {
    const freeMemory = os.freemem();
    const lowMem = 1150000000;
    freeMemory < lowMem ? text('Low') : text('OK');
    // if (freeMemory < lowMem) {
    //     for(let i = 0; i < callbackArray.length; i++) {
    //         const message = getText('Low');
    //         callbackArray[i](message);
    //     }
    // } else {
    //     for(let i = 0; i < callbackArray.length; i++) {
    //         const message = getText('OK');
    //         callbackArray[i](message);
    //     }
    // }
}

var interval = setInterval(checkMemory, 1000);
//checkMemory();

function clearInt() {
    clearInterval(interval);
}

setTimeout(clearInt, 5000);

const getAlert = (callback) => {
    callbackArray.push(callback);
} 

module.exports = {getAlert, checkMemory};