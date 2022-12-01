// //Task 2
// const myName = "Dmytro"
// console.log(myName);

// //Task 3
// //3a
// let x;
// let y;

// //3b
//     x = 5;
//     y = true;

// //3c
//     alert(x);
//     alert(y);

// //3d

//     c = x;
//     x = y;
//     y = c;

// //3e
//     alert(x);
//     alert(y);

////Task 4
// let car = {
//     brand: "Mazda",
//     modelIndex: 3,
//     isAvaliableForSale: true,
//     vinNumber: undefined,
//     cost: null
// }

// const descText = "The type of the car object property ";

// console.log(descText + car.brand + " is a " + typeof(car.brand));
// console.log(descText + car.modelIndex + " is a " + typeof(car.modelIndex));
// console.log(descText + car.isAvaliableForSale + " is a " + typeof(car.isAvaliableForSale));
// console.log(descText + car.vinNumber + " is a " + typeof(car.vinNumber));
// console.log(descText + car.cost + " is a " + typeof(car.cost));

// //Task 5

// isAdult = confirm("Are you 18 year or more?")
// console.log(isAdult)


// //Task 6
// let name;
// let surname;
// let isGroupAssigned;
// let birthYear;
// let nullVar;
// let var2;

// name = "Dmytro";
// surname = "Shkil";
// isGroupAssigned = true;
// birthYear = 1989;
// nullVar = null;

// //Need to investigate how to order console output
// console.log(typeof(name));
// console.log(typeof(surname));
// console.log(typeof(isGroupAssigned));
// console.log(typeof(birthYear));
// console.log(typeof(var1));
// console.log(typeof(var2));

// //Task 7
// const login = prompt("Enter your login name");
// const email = prompt("Enter your email");
// const password = prompt("Enter your password");

// alert("Dear " + login + " your email is " + email + ", your password is " + password);

//Task 8

//Сalculator can count a number of seconds in: hours, days or months

const startUp = confirm("This culculator can calculate the number of seconds in the hour, day or month. Do you want to procced?")

    userInput = prompt("Please enter h, d or m")

    const secHour = 3600; // seconds in 1 hour
    const secDay = 86400; //seconds in 1 day
    const secMonth = 25920000; //seconds in 1 day

    switch (userInput){
        case h:
            alert("1 hour contains " + secHour + "seconds");
            break;

        case d:
            alert("1 day contains " + secDay + "seconds");
            break;

        case m:
            alert("1 month contains " + secMonth  + "seconds");
            break; 

        default:
            alert("Input is incorrect. Have a nice day");
                break;    
         }    