// WAP to merge properties of two objects
const object1 = { Name:"Akshay", RollNo: 2 };
const object2 = { isWorking: true, marks:78};

function mergeObjects(obj1, obj2) 
{
    return { ...obj1, ...obj2 }; 
}
  
const mergedObject = mergeObjects(object1, object2);
console.log(mergedObject);

// const object3= {};

// for(let key in object1)
// {
//     object3[key]=object1[key]
// }
// for(let key in object2)
// {
//     object3[key]=object2[key]
// }
// console.log("object1 is : ",object1);
// console.log("object2 is : ",object2);
// console.log("object3 is : ",object3);