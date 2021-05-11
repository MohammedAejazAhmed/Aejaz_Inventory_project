function answer(){
let t=require('./InventoryData').length;
console.log("Last Car is a "+require('./InventoryData')[t-1].car_make+" "+require('./InventoryData')[t-1].car_model);
}
module.exports ={
answer
}
