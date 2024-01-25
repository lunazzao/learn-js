// Define a JavaScript function called logMsg() that can be used to log an error message for any object that contains the property errMsg. 

const errMsg1 = {
    errMsg: 'John is bad',
}

function logMessage(){
    console.log(`Error Message: ${this.errMsg}`);
}

logMessage.call(errMsg1);
// console.log(person.fullName());