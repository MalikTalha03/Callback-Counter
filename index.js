function callbackcounter() {
    let count = 0;
    return function(callback) {
        count++;
        console.log(`Callback count: ${count}`);
        callback();
    };
  }
  
  module.exports = callbackcounter;
  