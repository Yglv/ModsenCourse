"use strict";

function compareObjects(firstObject, secondObject) {
    const keys1 = Object.keys(firstObject);
    const keys2 = Object.keys(secondObject);

    if (keys1.length !== keys2.length) {
        return false;
    }

    for (let key of keys1) {
        if (firstObject[key] !== secondObject[key]) {
            return false;
        }
    }

    return true;
}

