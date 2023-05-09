//1 map,filter,reduce with arrow function 

// const nums=[1,2,3,4,5,6,7,8,9,10]

//  const double= nums.map(x => x*2);
//  console.log(double);

// const sum=nums.reduce((a,b)=>a+b)
// console.log(sum)

// const greaterthanfive = nums.filter(x => x>5);
// console.log(greaterthanfive)

//2 convert any simple function to arrow function
// function evenno(nums) {
//     const result=[];
//     for(let i=0;i<nums.length;i++){
//         if(nums[i]%2===0){
//             result.push(nums[i]);
//         }
//     }
//     return result;
// }
//  oddno = (numbers) =>{

//     const result=[];
//     for(let i=0;i<numbers.length;i++){
//         if(numbers[i]%2!==0){
//             result.push(numbers[i]);
//         }
//     }
//     return result;
// }

// const nums =[1,2,3,4,5,6,7,8,9,10]
// const evenNo = evenno(nums)
// console.log(evenNo);
// const oddNo = oddno(nums);
// console.log(oddNo);

//3 create a class with 2 or 3 method and use getter setter with and without key word and use static method and
// static property

// class Person{
//     static count=0;
//     constructor(name,age){
//         this.name=name;
//         this.age=age;
//         Person.count++;
//     }
//     get dept(){
//         return this.depart;
//     }
//     set dept(dept){
//         this.depart=dept;
//     }
//     sayHello(){
//         console.log(`${this.name} is ${this.age} years old and he is in ${this.dept}`);
//     }
//     static getCount(){
//         console.log(`There are ${Person.count} people`);
//     }

// }

// const p1=new Person('John',20);
// const p2=new Person('Jane',22);
// p1.dept=("Developer");
// p2.dept=("Designer");

// p1.sayHello();

// p2.sayHello();

// Person.getCount();

// class Teacher {
//     constructor(name,subject){
//         this.name=name;
//         this.subject=subject;
//     }
//     subjectTeachesclear(){
//         console.log(`${this.name} teaches ${this.subject}`);
//     }
// }
// class Student extends Teacher{
//     constructor(name,subject,grade){
//         super(name,subject);
//         this.grade=grade;
//     }
//     subjectKnowledge(){
//         console.log(`${this.name} knows ${this.subject} with ${this.grade}`);
//     }
// }
// const student = new Student("umesh","javascript",10);
// student.subjectKnowledge();

// function Teacher(name, subject){
//     this.name=name;
//     this.subject=subject;
// }

// Teacher.prototype.subjectTeaches=function(){
//     console.log(`${this.name} teaches ${this.subject}`);
// }
// function Student(name, subject , grade){
//     Teacher.call(this,name,subject)
//     this.grade=grade;
// }
// Student.prototype.subjectKnowledge=function(){
//     console.log(`${this.name} knows ${this.subject} with ${this.grade}`);
// }

// const student = new Student("umesh","javascript",10);
// student.subjectKnowledge();



//5 make a one array with range of 1 to 100 with length of 1000(duplicate value allowed)
//and iterate over array using for,while,do while,for of,for in,forEach,for each with arrow function

// const arr = Array.from({length: 1000},() => Math.floor(Math.random() * 100)+1);

//  const startTime = Date.now();
// console.log("for loop");
// for(let i=0;i<=1000;i++){
//     console.log(arr[i]);
// }

// console.log("While loop");
// let i=0;
// while(i<=1000){
//     console.log(arr[i]);
//     i++;
//     }

// console.log("Do while loop");
// do{
//     console.log(arr[i]);
//     i++;
// }while(i<=1000);

// console.log("for of loop");
// for(let i of arr){
//     console.log(i);
// }

// console.log("for in loop");
// for(let i in arr){
//     console.log(i);
// }

// console.log("forEach loop");
// arr.forEach((item,index) => {
//     console.log(`${index+1}. ${item}`);
// });

// const endTime = Date.now();
// const totalTime = endTime - startTime;
// console.log(totalTime);


//6 create a order list and unorder list using Template literal and array
// const fruits = ['Mango', 'Banana','Grapes','Strawberry'];

// const orderList =`
// <ol>
//     ${fruits.map((fruit) => 
//         `<li> ${fruit}</li>`)}
// <ol>
// `;
// console.log(orderList);

// const unorderList = `
// <ul>
//     ${fruits.map((fruit,index) => 
//         `<li>${fruit}</li>`)}
// </ul>
// `;
// console.log(unorderList);