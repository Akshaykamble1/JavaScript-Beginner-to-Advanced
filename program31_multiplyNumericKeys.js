// 31. Create a function that multiplies only number values present in the keys

let menu = {
    widht:200,
    height:300,
    title:"My menu"
};

console.log("Object before multiplying by 2 : ",menu);

function multiplyNumeric(menu)
{
    for(let keys in menu)
    {
        if(typeof menu[keys]==='number')
        {
            menu[keys]=menu[keys]*2;
        }
    }
}
multiplyNumeric(menu);

console.log("Object after multiplying by 2 : ",menu);