// var hitCount = 0;
// function factorial(num){
//    if(num === 1){
//         return 1 
//     }
//     hitCount++
//     return result = num * factorial(num-1)  
// }
// console.log(factorial(1));
// console.log(hitCount);

//2 Fibinacci function
// var hitCount = 0;
// function fibbonacci(num){
//     if(num === 1 || num === 2){
//         return 1
//     }
//     hitCount++
//     return fibbonacci(num-1) + fibbonacci(num-2)
// }
// console.log(fibbonacci(6));
// console.log(hitCount);

//3 Generate stackOverflow error
// function overflow(){
//     overflow()
// }
// overflow();

const array=[1,2,3,[1,2,3]]
const recursion=array=>{
    let newaray=[];
    for(let i=0;i<array.length;i++)
    {
        if(Array.isArray(array[i]))
        {
            let x=recursion(array[i])
            newaray=newaray.concat(x)
        }
        else
        {
            newaray.push(array[i])
        }
    }
    return newaray;
}
console.log(recursion(array))
