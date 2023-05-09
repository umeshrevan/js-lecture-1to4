const arrno = [1,2,3,4,5];
function arrsum(nums){
    let sum = 0;
    function adder(){
        for(let i = 0; i < arrno.length; i++){
            sum += nums[i];
           
        }
        return sum;
    }
    return adder();

}

const total = arrsum(arrno);
console.log(total);