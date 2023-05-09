function multiple(num){

    function threetimes(x){
        return x * num;
    }
    return(threetimes);
}
let times = multiple(3);
console.log(times(5));