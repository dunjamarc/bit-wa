const memoryInfoModule = require('./memoryInfoModule.js');  //prvo se ovo ucita i izvrsi

memoryInfoModule.getAlert(message => {
    console.log(message);
});



