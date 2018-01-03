'use strict';
module.exports = function() {
    
    let stored = Math.random() * 1000000;
    let secretNumber = function() {
        
        
        return stored;
    }

    return secretNumber ;
  
};

