"use strict";


function repeatOperation(operation, interval) {
    let intervalId = setInterval(operation, interval);

    return function stopRepeatingOperation() {
        clearInterval(intervalId);
    };
}

