function Add(...Num){
    return Num.reduce((Total,Num)=>Total+Num,0);
}

let Ret = Add(110,20,30,40);

console.log(Ret);