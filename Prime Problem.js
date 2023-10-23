let num = 20;

let sum = 0;
for(let i=0; i<num; i++){
    if(num%i==0){
        sum++
    }
}
if(sum==2){
    console.log("Prime");
}else{
    console.log("Not Prime");
}