// function callAfter(seconds , callback){
//     setTimeout(callback , seconds);
// }

// // callAfter('5000', ()=>{console.log("Hello")});

// callAfter('5000', function logg(){
//     console.log("hello");
// } );

//promise
function callAfter(seconds){
    return new Promise((res , rej)=>{
        setTimeout(res , seconds)
    });
}

callAfter('5000')
.then(()=>console.log("hello"))