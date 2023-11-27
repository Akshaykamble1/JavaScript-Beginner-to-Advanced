// 29. Write a JS function to check an objext cantains the given porpert or not

let obj = {
    name: "D",
    age: 2
};

function hasProperty(obj, property) {
    for (let key in obj) {
        if (key === property) {
            console.log("Object has given property:", obj[key]);
            return true;
        }
    }
    console.log("Object does not have given property",property);
    return false;
}

// Example usage
// hasProperty(obj, "name"); // Object has given property: D
hasProperty(obj, "gender"); // Object does not have given property