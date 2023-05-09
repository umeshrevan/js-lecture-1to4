const str1 = "five";
const num1 = 5;

function strfun(str1,num1) {
    index = 0;
     function innerstr() {
        if(index == num1){
            return;
        }
        console.log(str1);
        index++;
        
     }
     return innerstr;
}
const printString = strfun(str1,num1);
// printString();
// printString();
// printString();
// printString();
// printString();
// printString(); //6th time not printed