function urlFunction(url){
    return new Promise((res , rej)=>{
    fetch(url)
    res(response => response.text())
    //.then(data => callback(data))
    rej(error => console.log(error));
});

}

const url = "https://www.google.com";
urlFunction(url).then((response)=>console.log(response))
    
//     , response => {
//     console.log(`Response from callback: ${response}`);
//   });