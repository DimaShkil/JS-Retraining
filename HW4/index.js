//************************** Task #1 **************************
// let width = parseFloat(prompt('Enter rectangle width')); 
// let height = parseFloat(prompt('Enter rectangle height')); 

// function calcRectangleArea(width, height){

//     let sqr;
//     let error = Error('Input value is not numeric'); 
//     try{ 
//        if(Number.isInteger(width) && Number.isInteger(height) ){
//         sqr = width * height;
//         return alert('Rectangle square is ' + sqr);
//        } 
       
//        else {
//         throw error;
//     }
// }
//     catch(error){
//         alert(error.stack);
//     }
// }

// calcRectangleArea(width, height);

//************************** Task #2 **************************
// let age = prompt('Please enter your age');
// let error = Error('The field is empty! Please enter your age');
// let error2 = Error('Input is not numeric');
// let error3 = Error('Age is under 14');

// function checkAge(age){
//     try{

//     if(age.length === 0 ){
//         throw error;
//     }

//     else if(Number.isInteger(parseInt(age)) != true){
//         throw error2;
//     }
//     else if(parseFloat(age) < 14){
//         throw error3;
//     }
//     else{
//         alert('Access has been granted');
//     }

//     }
//     catch(Error){
//         alert(Error.stack);
//     }
// }
// checkAge(age);

//************************** Task #3 **************************

// class MonthException {
//     constructor(message) {
//         this.name = 'MonthException';
//         this.message = message;
//     }
// }
// let month = 13;

// function showMonthName(month){
//         switch(month){
//             case 1:
//                 return 'January';
//             case 2:
//                 return 'February';
//             case 3:
//                 return 'March';
//             case 4:
//                 return 'April';
//             case 5:
//                 return 'May';
//             case 6:
//                 return 'June';
//             case 7:
//                 return 'July';
//             case 8:
//                 return 'August';
//             case 9:
//                 return 'September';
//             case 10:
//                 return 'October';
//             case 11:
//                 return 'November';
//             case 12:
//                 return 'December';

//             default:
//                 throw new MonthException('Incorrect month number');
//             }       
// }
    
// try{
//     showMonthName(month);
// }
// catch (MonthException) {
//         console.log(MonthException.name + ': ' + MonthException.message);
//     }

// console.log(showMonthName(month));

//************************** Task #4 **************************

// class IdError {
//     constructor(message) {
//         this.name = 'IdErrors';
//         this.message = message;
//     }
// }

// function showUser(id){
//     try{
//         if(id < 0){
//             throw new IdError('ID must not be negative');
//         }
//         else{
//             return id;
//         } 
//     }
//     catch (IdError) {
//         console.log(IdError.name + ':'+ IdError.message);
//     }
// }

// let userIDs = [7, -12, 44, 22]; 

// function showUsers(userIDs){
//     let checkedIds = [];

//     for (let argument of userIDs)
//     {
//         try{
        
//         if(argument < 0){
//             throw new IdError('ID must not be negative: ' + argument);
//         }
//         else{
//             checkedIds.push(argument);
//         }
//     }
//     catch (IdError) {
//         console.log(IdError.name + ':'+ IdError.message);
//         }
//     }
//     return checkedIds;
// }

// console.log(showUser(1));
// console.log(showUsers(userIDs));