function* randon(){
    while(true){
        let x = Math.floor(Math.random() * (51 - 30) ) +30;
        yield x;
    }
    return x;
}
const gen = randon();
for(i=1; i<=20; i++){
    console.log(gen.next().value);
}