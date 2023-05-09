//2 use every method for Map and create one demo 

// const map = new Map();

// map.set('name', 'John');
// map.set('a', 1);
// map.set('b', 2);
// map.set('name2' , 'David');
// map.set('name3' , 'Smith');

// console.log(map.get('name'));
// console.log(map.has('a'));
// console.log(map.size);
// console.log(map.delete('name3'));
// //console.log(map.clear());
// console.log(map);


// //3 use every method for Set and create One demo
// const arr = [1,2,3,4,5];
// const set = new Set(arr);
// console.log(set.size);
// console.log(set.add(6));
// console.log(set.has(5));
// console.log(delete(5));
// console.log(set.clear());

//1
// const email = "uryudiz.com";
// const regex1 = /^\w+@\w+.[a-z]{3,4}/;
// console.log(regex1.test(email));
// try{
//     if(regex1.test(email)==false){
//     throw new Error("oops");
//     }
// }
// catch(e){
//     console.log("Email dosn't match."+e.message);
// }

// var phoneNumber = 9099678954;
// var phoneRGEX = /^[(]{0,1}[0-9]{3}[)]{0,1}[-\s\.]{0,1}[0-9]{3}[-\s\.]{0,1}[0-9]{4}$/;
// var phoneResult = phoneRGEX.test(phoneNumber);
// console.log(phoneResult);
// try{
//     if(phoneRGEX.test(phoneNumber)==false){
//     throw new Error("oops");
//     }
// }
// catch(e){
//     console.log("Phone number dosn't match."+e.message);
// }

// var name ="ddd4$";
// var nameRGEX = /^[a-zA-Z]+$/;
// console.log(nameRGEX.test(name));
// try{
//     if(nameRGEX.test(name)==false){
//     throw new Error("oops");
//     }
// }
// catch(e){
//     console.log("Name dosn't match."+e.message);
// }


// var paragraph = "gdhthtghrhththdrgesw@fthybdvxsfee";
// var paragraphRGEX = /^[a-zA-Z]+$/;
// console.log(paragraphRGEX.test(paragraph));
// try{
//     if(paragraphRGEX.test(paragraph)==false){
//     throw new Error("oops");
//     }
// }
// catch(e){
//     console.log("paragraph dosn't match,"+e.message);
// }

// try{

//     try{
//         throw new Error("Invalid")
//     }
//     catch(e){
//         console.log("inner catch " +e.message);//1
//         throw new Error("inner catch erro");
//     }
//     finally{
//         console.log("inner finally");//2
//         throw new Error("inner finally erro");
//     }
// }

// catch(e){
//     console.log("outer "+e.message);//3
// }



//  division = (a,b) =>{
//     if(a && b !== 0){
//         return a/b;
//     }
//     else{
//         throw new Error("divided by zero");
//     }
// };
// try{
//     const result=division(5,0);
//     console.log(result);

// }
// catch(e){
//     console.log( "catch "+e.message);
// }
// finally{
//     console.log("Division operation completed")
// }

// function* randon(){
//     while(true){
//         yield Math.floor(Math.random() *20);
//     }
// }

// const gen = randon();
// console.log(gen.next().value);



// const num=11  //binary to decimal
// console.log(parseInt(num,2))
// const num1=10  //octal 2 decimal
// console.log(parseInt(num1,8))
// const num2='F' //hex to decimal
// console.log(parseInt(num2,16))

// const a ={
//     x:1,
//     y:2,
//     z:3
// }
// const b = Object.assign({} ,a);
// b.x=4;
// console.log(a.x);
// console.log(b.x);
// console.log(b);
// console.log(a);
// const arr = [0, 0, 0, 4, 5];

const iterator = arr[Symbol.iterator]();

console.log(iterator); // Array Iterator {}

console.log(iterator.next()); // { value: 1, done: false }
console.log(iterator.next()); // { value: 2, done: false }
console.log(iterator.next()); // { value: 3, done: false }
console.log(iterator.next()); // { value: 4, done: false }
console.log(iterator.next()); // { value: 5, done: false }
console.log(iterator.next()); // { value: undefined, done: true }