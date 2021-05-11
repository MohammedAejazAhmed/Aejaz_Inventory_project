function answer(){

let Array=[require('./InventoryData')[0]];
let len =require('./InventoryData').length;
for(let i=0;i<len;i++){
    if(require('./InventoryData')[i].car_make==='Audi'||require('./InventoryData')[i].car_make==='BMW'){    
        Array.push(require('./InventoryData')[i]);
    }
}
Array.shift();
return Array;
}
module.exports ={
answer
}
