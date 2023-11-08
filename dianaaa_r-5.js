obj1 = {
    "one": {
        "nest1": {
            "val1": [9, 34, 92, 100]
        }
    },
    "2f7": {
        "n1": [10, 92, 53, 71],
        "n2": [82, 34, 6, 19]
    }
}
function getRootProperty(obj1, n) {
    for (let key in obj1) {
        if (Array.isArray(obj1[key]) === true && obj1[key].includes(n)) {
            return key;
        }
        else if (typeof obj1[key] === 'object') {
            let result = getRootProperty(obj1[key], n);
            if (result !== null) {
                return key;
            }
        }
    }
    return null;

}
console.log(getRootProperty(obj1,10))