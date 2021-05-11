function answer(){
let len=require('./InventoryData').length;
let Array=[0];
for(let i=0;i<len;i++){
Array.push(require('./InventoryData')[i].car_year);
}
Array.shift();
return Array;
}

module.exports ={
answer
}
