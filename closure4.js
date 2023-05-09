function  createObject(obj){
    return{
        getValue : function(){
            return obj.value;
        },
        runCallback : function(){
            obj.callback(obj.value);
        }

    };
}

const obj = {
    value : 100,
    callback : function(val){
        console.log("the value:"+obj.value);
    }
};
const obj2 = createObject(obj);
console.log(obj.value);
console.log(obj.callback());
