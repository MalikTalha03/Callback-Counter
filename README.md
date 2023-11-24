You can test/use it by following code snippet


// Importing the module
const callbackModule = require('./CallbackModule');

// Using the callback functions from the module
callbackModule.performOperation(5, 3, callbackModule.additionOperation, callbackModule.callbackFunction);
callbackModule.performOperation(5, 3, callbackModule.multiplicationOperation, callbackModule.callbackFunction);
