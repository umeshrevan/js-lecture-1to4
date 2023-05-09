
// function buyGrocery(callback){

//     setTimeout(function(){
//         console.log("Buying Groceries");
//         callback();
//     },2000);
// }
function buyGrocery(){
  return new Promise((resolve , reject)=>{
    setTimeout(()=>{
      console.log("Buying Groceries")
      return resolve();
    },2000);
  });
}

// function boilWater(callback){
//     setTimeout(function(){
//         console.log("bioling water");
//         callback();
//     },1000);
// }
function boilWater(){
  return new Promise((resolve , reject)=>{
    setTimeout(()=>{
      console.log("Boiling water")
      return resolve();
    },1000);
  });
}

// function cookPasta(callback) {
//     setTimeout(function() {
//       console.log('Cooking pasta...');
//     }, 2000);
//   }

  function cookPasta(){
    return new Promise((resolve , reject)=>{
      setTimeout(()=>{
        console.log("cooking pasta")
        return resolve();
      },2000);
    });
  }

  function prepareMeal() {
    return new Promise((resolve , reject)=>{
      console.log('Meal preparation is completed!');
      resolve();
    });
  }
  function onError(err) {
    console.log("Error: ", err);
  }

//   function prepareMeal(callback){
//     console.log("Preparing meal");
//     buyGrocery(function(){
//         console.log("finish buy grocery");
//         boilWater(function(){
//             console.log("finish boil water");
//             cookPasta(function(){
//                 console.log("finish cook pasta");
//             });
//         });
//     });
//   }

  // function prepareMeal(){
  //   buyGrocery(hotWate);
  // }

  // function hotWate(){
  //   boilWater(cookP);
  // }
  
  // function cookP(){
  //   cookPasta();
  // }
  // prepareMeal();
  prepareMeal()
    .then(buyGrocery)
    .then(boilWater)
    .then(cookPasta)
    .catch(onError);