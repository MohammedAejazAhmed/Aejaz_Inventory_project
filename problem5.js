function answer(){
let len=require('./problem4').answer().length;
let Array=require('./problem4').answer()

for(let i=0;i<len;i++){
    if(Array[i]<2000){
        console.log(Array[i]);    
    }
}
}
module.exports ={
answer
}
