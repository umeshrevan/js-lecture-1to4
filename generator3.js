function prepareDough() {
    return new Promise((resolve, reject) => {
      console.log("Preparing dough...");
      setTimeout(() => {
        console.log("Dough is ready!");
        return resolve();
      }, 2000);
    });
  }
  
  function addSauce() {
    return new Promise((resolve, reject) => {
      console.log("Adding sauce...");
      setTimeout(() => {
        // return reject("no sauce is available");
        console.log("Sauce has been added!");
        return resolve();
      }, 1000);
    });
  }
  
  function addToppings() {
    return new Promise((resolve, reject) => {
      console.log("Adding toppings...");
      setTimeout(() => {
        console.log("Toppings have been added!");
        return resolve();
      }, 1500);
    });
  }
  
  function bakePizza() {
    return new Promise((resolve, reject) => {
      console.log("Baking pizza...");
      setTimeout(() => {
        console.log("🍕 is ready!");
        return resolve();
      }, 3000);
    });
  }
  
 function makePizza() {
      console.log("Making pizza...");
    
  }

async function* main(){
    try{
        await makePizza().catch;
        await prepareDough();
        await addSauce();
        await addToppings();
        await bakePizza();
    }
    catch{

    }
   
}
const abc=main();
console.log(main().next().then((x)=>{
    console.log(x);
}))