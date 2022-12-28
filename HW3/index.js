// //**********Task #1**********
// let array1 = [2, 3, 4, 5];
// let result1 = 1;

// for (i = 0; i < array1.length; i++){
//     result1 = result1 * array1[i];
// }
// console.log('The result of multiplication of the arrray elements =', result1);

// let array2 = [2, 3, 4, 5];
// i = 0;
// let result2 = 1;

// while(i <array2.length){
//     result2 = result2 * array2[i];
//     i++;
// }
// console.log('The result of multiplication of the arrray elements =', result2);

// //**********Task #2**********
// for(i = 0; i < 16; i++){
//     if (i % 2 == 0){
//         console.log(i, 'is even');
//     }
//     else{
//         console.log(i, 'is odd');
//     }
// }
// //**********Task #3********** Is not finished
// let arr = [];
// // const min = 1;
// // const max = 500;

// function randomArray(min, max){
//     for (i=0; i<5; i++){
//         let num = Math.round(Math.random() * (max - min));
//         num = Math.round(num);   
//     }    
//     return num;
// }
// randomArray(1, 500);
// arr.push(num);
// console.log(arr);


// //**********Task #4**********
// function raiseToDegree(a, b){
//    if (Number.isInteger(a) && Number.isInteger(b)){
//     return Math.pow(a, b);
//    }
//    else{
//     return 'Please enter integer values';
//    }
// }

// let num1 = parseFloat(prompt('Enter 1')); //Also we can use parseInt method, and then we won't need to use if in the function raiseToDegree()
// let num2 = parseFloat(prompt('Enter 2'));

// let result = raiseToDegree(num1, num2);
// alert(result);

// //**********Task #5**********
// //***Variant 1***
// function findMin(){
//     let minValue = Math.min.apply(null, arguments);
//     return minValue;
// }
// console.log(findMin(12, 14, 4, -4, 0.2));

// //***Variant 2***

// const numbers = [12, 14, 4, -4, 0.2];

// function findMin(values){
//     let minValue = Math.min.apply(null, values);
//     return minValue;
// }
// console.log(findMin(numbers));

// //**********Task #6**********

// const notUniqueArr = [1, 2, 3, 5, 3];
// const uniqueArr = [1, 2, 3, 5, 11];

// function findUnique(someArr) {
//     return new Set(someArr).size == someArr.length;
//     }
// console.log(findUnique(notUniqueArr));
// console.log(findUnique(uniqueArr));

// //**********Task #7**********
// let arra = [3, 4, 10, -5];
// function lastElem(someArr, numberOfLastElements){
//     const lastElements = someArr.slice(numberOfLastElements);
//     return lastElements;
//  }
// console.log(lastElem(arra, 2));

// //**********Task #8**********

// const inputString = 'i love java script';

// function stringToArray(str){
//     let arrayFromString = str.split(" ");
//      return arrayFromString;
//     }

// function capitalizeFirstChar(arr){
//     return arr.map(element => {
//                   return element.charAt(0).toUpperCase() + element.slice(1).toLowerCase();
//                 });
//     }

// const arrayFromString = stringToArray(inputString);
// console.log(capitalizeFirstChar(arrayFromString));




