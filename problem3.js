function answer(){
let Array=["null"];
let len=require('./InventoryData').length;

for(let i=0;i<len;i++){
    Array.push(require('./InventoryData')[i].car_model);
}
Array.shift();
Array.sort();
console.log(Array);
}

module.exports ={
answer
}
