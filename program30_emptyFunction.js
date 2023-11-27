// 30.Write a function isEmpty() which return true if the object don't have any porperties otherwise false

let obj = {
    // name:"Akshay",
    // id:27
};

function isEmpty(obj){
    for(let keys in obj)
    {
        if(Object.keys(obj))
        {
            return false;
        }
    }
    return true;
}

console.log(isEmpty(obj));