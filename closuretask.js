function a(num){
    let counter = 0;

    function b(){
        counter += num;
        return counter;
    }
    return b;
}

const umesh = a(5);
//a(umesh);
console.log(umesh(a));
console.log(umesh(a));

// //2
// function createObject(value) {
//     let privateValue=0;
  
//     function setValue(value){
//         privateValue = value;   
//     }
//     function getValue(){
//         return privateValue;    
//     }
//     setValue(value);
//     return {
//         privateValue, setValue, getValue
//     };
//   }
  
//   const obj = createObject(42);
//   console.log(obj.getValue());

//3
// const stringarr = ["umesh","vishal","rahul"];

// function logstrings(stringarr) {
//     let index = 0;
//     function printing(){
//         if(index >= stringarr) {
//             console.log("all string logged.");
//             return;
//         }
//         console.log(stringarr[index])
//         index++;
//     }
//     return printing;
// }

// const remainlogstring = logstrings(stringarr);
// remainlogstring();
// remainlogstring();
// remainlogstring();
// remainlogstring(); //nothing printed
