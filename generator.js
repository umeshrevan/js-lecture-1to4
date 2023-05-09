function* randon(){
    while(true){
        let x =Math.floor(Math.random() *20);
        yield x;
    }
    return x;
}

const gen = randon();
for(i=1; i<=20; i++){
    console.log(gen.next().value);
}
