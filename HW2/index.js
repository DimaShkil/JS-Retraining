// //Task 1
// let x = 1;
// let y = 2;

// let res1 =  String(x) + y; // Допишіть код, необхідно використовувати змінні x і y
// console.log(res1); // "12"
// console.log(typeof res1); // "string"

// x = 'true';
// let res2 = x + y;// Допишіть код, необхідно використовувати змінні x і y
// console.log(res2); // "true2"
// console.log(typeof res2); // "string"

// let res3 = x != y;// Допишіть код, необхідно використовувати змінні x і y
// console.log(res3); // true
// console.log(typeof res3); // "boolean"

// let res4 = Number(x + y);// Допишіть код, необхідно використовувати змінні x і y
// console.log(res4); // NaN
// console.log(typeof res4); // "number"

// //Task 2
// let userInput = 23;//prompt('Enter a number');

// if (userInput % 7 == 0){
//     console.log('Value ' + userInput + ' is a multiple of 7');
// }

// else if (userInput % 2 == 0 && userInput > 0)  {
//     console.log('Value ' + userInput + ' an even, positive number');
// }  

// else {
//     console.log('Value ' + userInput + ' does not meet requirements');
// }


// //Task 3
// const x = 1;
// const y = 2; 

// let task = [];
// task[0] = 10;
// task[1] = 'random string';
// task[2] = x > y;
// task[3];

// console.log(task.length);

// let userInputToArray = prompt('Enter some value to add it to array');

// task[4] = userInputToArray;

// alert(task[4]);

// task.shift();// To do: read about method


// //Task 4
// let cities = ["Rome", "Lviv", "Warsaw"]; 

// console.log(cities.join('*'));

// //Task 5
// let isAdult = prompt('What is your age?');

// let message = (isAdult>= 18) ? 'You are adult' : 'You are to young'; 

// alert(message);


// //Task 6

// let a = prompt('Enter the length of side A');
// let b = prompt('Enter the length of side B');
// let c = prompt('Enter the length of side C');

// if ((a > 0 && a !== NaN) && (b > 0 && b !== NaN) && (c > 0 && c !== NaN)){

//     const p = (a + b + c) / 2;
//     const triangleSquare = Math.sqrt(p * (p - a) * (p - b) * (p - c));
    
//     console.log(triangleSquare.toFixed(3));

//     if (Math.pow(a, 2) + Math.pow(b, 2) == Math.pow(c, 2) || Math.pow(b, 2) + Math.pow(c, 2) == Math.pow(a, 2) || Math.pow(c, 2) + Math.pow(a, 2) == Math.pow(b, 2)){
    
//         console.log('Entered values have built right Triangle');
// } 

//     else { 
//         console.log('With entered values you can not build right Triangle')};
// }    

// else {
//     console.log('Enter valid value');
// }


//Task 7 


// let date = new Date;
// let timeNow = date.getHours();

////First case

// if (timeNow == 23 ||  timeNow == 24 || timeNow >= 1 && timeNow <= 4){
//     console.log('Доброї ночі');  
// }

// if (timeNow >= 5  && timeNow <= 10){
//     console.log('Доброго ранку');  
// }

// if (timeNow >= 11 && timeNow <= 16){
//     console.log('Доброго дня');  
// }

// if (timeNow >= 17 && timeNow <= 22){
//     console.log('Доброго вечора');  
// }

// else{
//     console.log("Input is incorrect. Have a nice day");
// }


////Second case
// switch (timeNow){
//     case 23:
//     case 24:
//     case 1:
//     case 2: 
//     case 3: 
//     case 4:
//         console.log('Доброї ночі');
//             break;

//     case 5:
//     case 6: 
//     case 7: 
//     case 8: 
//     case 9: 
//     case 10:
//         console.log("Доброго ранку");
//             break;  

//     case 11:
//     case 12: 
//     case 13:
//     case 14:
//     case 15:
//     case 16:
//         console.log('Доброго дня');
        
//     case 17:
//     case 18:
//     case 29:
//     case 20:
//     case 21: 
//     case 22: 
//         console.log('Доброго вечора');

//     default:
//         console.log("Input is incorrect. Have a nice day");
//             break;                      
// }