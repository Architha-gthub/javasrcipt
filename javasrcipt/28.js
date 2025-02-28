//Question1
function findlarger(num1,num2,callback){
    return callback(num1,num2)
}
var result=findlarger(12,20,(num1,num2)=>{
    if(num1>num2){
        return num1+5
    }
    else{
        return num2+5
    }
})
console.log(result)
//Question2
function calculate(num1, num2, callback){
    return callback(num1,num2)
}
var result=calculate(10,5,(num1,num2)=>{
    if(num1>num2){
        return (num1+num2)*3
    }
    else if(num2>num1) {
        return (num1-num2)*3
    }
    else{
        return 0
    }
})
console.log(result)
//Question3
function checkEvenOdd(num, callback){
    if(callback(num)=="even"){
        return "Even number"
    }
    else{
        return "odd number"
    }
}
var result=checkEvenOdd(8,num=>{
    if(num%2==0){
        return "even"
    }
    else{
        return "odd"
    }
})
console.log(result) 
//Question4
function checkSign(num, callback){
    return callback (num) +" "+ "value"
}  
console.log(checkSign(-10,num=>{
    if(num>0){
        return "positive"
    }
    else if(num<0){
        return "negative"

    }
    else if(num==0){
        return "Zero"
    }
}))
//Question5
function multiplyConditionally(num1, num2, callback){
    console.log(callback(num1, num2))
}
multiplyConditionally(4, 6, (num1, num2) => {
    if (num1 > num2 ){
        return num1*num2*4
    }
    if(num2 > num1){
        return (num1 + num2)*4
    }
    return num1 * 4
})
