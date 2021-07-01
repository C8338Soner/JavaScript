// let x = 100 + 50 * 3;
// console.log(x);

// console.log(0 && "");//=0

// let x = 2 && false;
// console.log(x); // = false

// OR OPERATOR 

// let y = 2 || 3;
// console.log(y);//=2


// let password = "pass";
// console.log(password.length);// = 4 pass 4 hane

// let password = "passqq";
// console.log(password.length >5);//=true password 5 den büyük

// let password = "passqq";
// console.log(password.length >5 && password.includes("@"));// includes = içinde var mı sonucu false

// let password = "passqq";
// console.log(password.length >5 || password.includes("@")); // = true

// let password = "p@s";
// console.log(password.length >=8 || password.includes("@") && password.length > 5);// and kritik sunuç false

// let password = "password";
// console.log(password.length >=8 || password.includes("@") && password.length > 5);//= true

// console.log(1 && true);

//NULLISH OPERATORS

// var a= null;
// console.log(a ?? "hello");//= hello


// var a=0;
// console.log(a ?? "hello");

//Conditional  Statement

// let score = 50 ;
// if (score >= 50){
//     console.log("congratulate");
// }

// let score = 49 ;
// if (!(score >= 50)){
//     console.log("congratulate");
// }

// let score = 50 ;
// if (score >= 50){
//     console.log("congratulate");
// }

// let score = 50 ;
// if (score >= 80){
//     console.log("congratulate");
// } else{
//     console.log("work hard");

//ternary 
//  score >80 ? console.log("congratulate") : console.log("work hard");
// let score = 90;
// if(score >=90){
//     console.log("a");
// }else{
//     console.log("b");
// }

// let score = prompt("sınavdan kaç aldın?");// 

// 40
// if (score > 80){
//     console.log("congratulate");
// } else if(score>=50){
//     console.log("ehh!");

// }else{
//     console.log("work hard");
// }

// console.log("yuppi!");


// let userName;
// userName ? console.log(`Hello ${userName}`): console.log("please login");// please login

// let userName = "Soner";
// userName ? console.log(`Hello ${userName}`): console.log("please login");// = Hello Soner

// let userName = "Soner";
// userName ? console.log("Hello ${userName}"): console.log("please login");// = Hello ${userName}


// if else if ternary
// let score = 100;
// score >80 ? console.log("congratulate") :
// score >= 50 ? console.log("ehh"): console.log("work hard");// = work hard


//switch Statement



// var text;
// var fruits = "lemon";
// fruits = fruits.toLowerCase();
// switch(fruits){
//     case"banana":
//         text= "bana is good";
//         break;
//     case "lemon":
//     case "orange":
//         text = "I am not a fan of orange.";
//         break;
//     case "apple":
//         text = "how you like them apples?";
//         break;
//     default:
//         text = "I have never heard of that fruits";

// }
// console.log(text);

// var text;
// var weekdays = prompt("gün girin");
// weekdays = weekdays.toLowerCase();

// switch(weekdays){
//     case"pazartesi":
//     case"salı":
//     case"çarşamba":
//     case"perşembe":
//         text = "inclass";
//         break;
//     case"cuma":
//     case"cumartesi":
//         text = "teamwork"


//     default:
//         text = "tatil";

// }
// console.log(text);


// let x;
// x = prompt("1. sayı gir:")
// let number2;
// number2 = prompt("2.sayıyı gir:")
// let number3;
// number3 = prompt("3.sayıyı gir:")

// let result = number1*number2*number3

// if(result > 0){
//     document.write("Sign = + ");
// }else{
//     document.write("Sign =  - ");
// }

// var num1, num2;
// num1 = window.prompt("Input the First integer", "0");
// num2 = window.prompt("Input the second integer", "0");
                                                 
// if(parseInt(num1, 10) > parseInt(num2, 10)) 
//   { 
//   console.log("The larger of "+ num1+ " and "+ num2+ " is "+ num1+ ".");
//   }   
// else
//   if(parseInt(num2, 10) > parseInt(num1, 10)) 
//   {
//   console.log("The larger of "+ num1+" and "+ num2+ " is "+ num2+ ".");
//   }                  
// else
//   {
//    console.log("The values "+ num1+ " and "+num2+ " are equal.");
//   }

// let number1;
// number1 = prompt("1. sayı gir:")
// let number2;
// number2 = prompt("2.sayıyı gir:")
// let number3;
// number3 = prompt("3.sayıyı gir:")



// if(number1 > number2 && number1 > number3){
//         if(number2 > number3) {
//             console.log(number1 + number2 + number3);
//         }else{
//             console.log(number1 + number3 + number2);
//         }
    
// }else if( number2 > number1 && number2 > number3){
//         if(number1 > number3){
//             console.log(number2 + number1 + number3);
//         }else{
//             console.log(number2 + number3 + number1);
//         }
// }else if (number3 > number2 && number3 > number1) {
//         if (number2 > number1){
//             console.log(number3 + number2 + number1 );
//         }else{
//             console.log(number3 + number1 + number2);
//         }
// }


// let a = 5;
// let b = 10;
// console.log(`Fifteen is ${a + b} and
// not ${2 * a + b}.`);

// let person = 'Mike';
// let age = 28;

// function myTag(strings, personExp, ageExp) {
//   let str0 = strings[0]; // "That "
//   let str1 = strings[1]; // " is a "
//   let str2 = strings[2]; // "."

//   let ageStr;
//   if (ageExp > 99){
//     ageStr = 'centenarian';
//   } else {
//     ageStr = 'youngster';
//   }

//   // We can even return a string built using a template literal
//   return `${str0}${personExp}${str1}${ageStr}${str2}`;
// }

// let output = myTag`That ${ person } is a ${ age }.`;

// console.log(output);
// // That Mike is a youngster.
// let text = "";
// for (let i = 0; i < 5; i++){
//     text += i + "<br>";

// }
// document.write(text);

// let i = -6;
// let sum = 0;
// while (i < 6) {
//    sum += i;
//   i++;
// }
// console.log ("The total is: " + sum);

// var i = -6;

// var mult=5;

// while (i < 4) {

// mult *= i;

// i++;

// }
// console.log ("The answer is: " + mult);


// for(let i = 0; i<6; i++){
//     console.log("hello", i);
// }



// let cars = ["seat", "vw", "mercedes", "ford", "fiat", "audi"];



// let myCars = "";
// for (let i =  ; i < cars.length; i++){
//     myCars = myCars +  cars[i] + "\n";
// }
// console.log(myCars);
// //+ `${myCars}`


// const cars = ["seat", "vw", "mercedes", "ford", "fiat", "audi"];

// let i, len, text;
// for (i =0 , len = 10, text = "";i<len; i++){
//     text += cars[i] + "\n";
//    // len += cars[i].length + "\n";
// }
// console.log(text, len);

// const cars = ["seat", "vw", "mercedes", "ford", "fiat", "audi"];


// let i = 0;
// let len = cars.length;
// let text = "";
// for (; i<len;) {
//     text += cars[i] + "\n";
//     i++;

//  }
// console.log(text);

// var i = 11000;
// for ( var i = 0 ; i < 10 ; i++ ){

// }
//  console.log(i);

// let i = 0 ;
// for (  i = 0 ; i < 10 ; i++ ){

// }
// console.log(i);

// const i = 11;
// for ( const i = 0 ; i < 10 ; i++ ){

// }
// console.log(i);

// const fruits = ["Apple", "Banana", "Orange"];


// for (x of fruits) {
//   console.log(x);
// }

// var text = "";
// var i = 0;
// do {
//   text = text + "\n The number is " + i;
//   i++;
// }
// while (i < 5);

// console.log(text);


// var person = {fname:"John", lname:"Doe", age:25}; 
  
//   var text = "";
//   var x;
//   for (x in person) {
//     text += person[x] + " ";
//   }
//   console.log(text);


// var cars = ['BMW', 'Volvo', 'Mini'];
// var x;

// for (x of cars) {
//   console.log(x + "\n");
// }


// var x=0;

//  for (var i = 5; i > 3; i--) {
//  x += i;
// }
// console.log ("The answer is " + x);

// var i = 0;

// while (i < 10) {
// //   if (i === 5) {
// //     break;
// //   }
//   console.log(i)
//   i = i + 1;
// }

// console.log(i);

// var i = 0;
// while (i < 10) {
//  if (i > 5) {
//  break;
//  }
//  i = i + 1;
// }
// console.log(i)


//WHİLE LOOPS 

// let i = 0, sum = 0;

// while (i<6) {
//   sum = sum +i;
//   console.log(i);
//   i++;
// }
// console.log(`Total is : ${sum}`);

//DO WHILE
// let i = 7;
// let sum = 0;

// do{
//   sum += i;

// }while (i<5);
// console.log("The total is :" + sum);

// FOR LOOP
// for( let i = 0; i < 8; i++){
//   console.log("i", i);
// }

// let sum = 0;

// for ( i = 0; i<= 50; i++){
//   if ( i%10 === 0)
//   sum = sum + i;
// }
// console.log(sum);
//let sum = 0;



// let sum = 0;
// for ( i = 0; i<= 50; i++){
//   i%10 === 0 ? (sum +=i) : null;
  
// }
// console.log(sum);


// let brand = "Clarusway";


// for (let i=0; i<brand.length; i++){
//   console.log(brand[i],i+1);
// }

// let brand = "Clarusway";
// for (let i=0; j = brand.length; i<brand.length; i++, j--){
//   console.log(i + 1, brand[i], i, brand[i], j , brand[j -1]);
// } ARIZALI


// let brand = ["Clarusway", "google", "Amazon", "Tesla"];
// let i = 0 , len = brand.length;
// for(;i<len;){
//   console.log((i+1) + " : " + brand[i]);
//   i++;
// }

// let i = 0;
// while(i<10) {
//   if(i === 6){
//     break;
//   }
//   console.log(i);

//   i++
// }

// let i = 0;
// while(i<10) {
//   if(i % 3 === 0){
//     console.log(i);
//   }
  

//   i++
// }


// let i = 0;
// while(i<10) {
//   if((i % 3 === 0 && i !==0)){
//     console.log(i);
//   }
  

//   i++
// }
// console.log(i);



// let i = 0;
// while(i<10) {
//   if(i % 3 === 0){
//     i++;
//     continue;
//   }
  
//   console.log(i);
  
// } SONSUZ DÖNGÜ


// let i = 0;
// while(i<10) {
//   i++;
//   if(i % 3 === 0){
//     continue;
//   }
  
//   console.log(i);

// }


// let İ = 0;
// for(i = 0;i<7; i++){
//   if(i === 2 || i === 4 ) {
//     continue
//   }
//   console.log(i);
// }


// let text = 'Clarusway';
// for (i=0; i<text.length; i++){
//     console.log(text[text.length -(i+1)]);
// }




// let text = 'Clarusway';
// for (i=0; i<text.length; i++){
//     document.write(text[text.length -(i+1)]);
// }


// let text = "Clarusway";
// let newText = "";
// for( i = 0; i<text.length; i++){
//   let rText = text[text.length - (i+1)]
//   console.log(rText);
//   newText = newText + rText;
// }
//  console.log(newText);
// document.write(newText);




// let text = "";

// for(let i = 0; i<=10; i++){
//   text = text+ i;
//   console.log(text);
// }




// for(let i = 0; i<=10; i++){
//   for(let j=0; j<=10; j++){
//     document.write(`${i} * ${j} = ${i * j}`, "<br/>")
//   }
// }



// const number = [13,34,65,89,66]

// let adding = "";

// for(i of number){
    
//   adding += i;
  
// }
// console.log(adding+".");




// const number = [13,34,24,67,23,90]
// toplam = 0
// for (i=0;i<number.length;i++){
//     toplam += number[i]
// }
// console.log(toplam);



// const num = prompt("Enter a number:")
// let factor = 1;

// for (i = 1; i<=num; i+=1){
//   factor *= i;
// }
// console.log(factor);
// document.write(factor)