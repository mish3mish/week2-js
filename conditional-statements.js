// // Conditional Statements

// /!-----if------/

// let price = 0;
// const subscription = "pro";
// if (subscription === "pro") {
//     price = 100;
// }
// console.log(price); //100

// let price = 0;
// const subscription = "free";
// if (subscription === "pro") {
//     price = 100;
// }
// console.log(price);

// function checkAge(age) {
//     if (age>18) {
//         return "You are an adult";
//     }
// }

// /!-----if else------/

// const grade = 75;
// if (grade > 70) {
//     console.log("Satisfactorily");
// } else {
//     console.log("Unsatisfactorily");
// }

// const grade = 40;
// if (grade > 70) {
//     console.log("Satisfactorily");
// } else {
//     console.log("Unsatisfactorily");
// }

// function checkStorage(available, ordered) {
//     if (available<ordered) {
//     return "Not enough goods in stock!"
//     } else {
//     return "Order is processed, our manager will contact you"
//     }
    
// }

// let result1 = checkStorage(150, 140);
// console.log(result1);



// /!-----if, else if, else------/


// const grade = 85;

// if (grade > 90) {
//     console.log("Perfect");
// } else if (grade > 80) {
//     console.log("Good");
// } else if (grade > 70) {
//     console.log("Satisfactory");
// } else {
//     console.log("Unsatisfactory");
// }

// function checkStorage(available, ordered) {
//     if (ordered === 0) {
//     return "There are no products in the order!"
//     } else if (available<ordered) {
//     return "Your order is too large, there are not enough items in stock!"
//     } else {
//     return "The order is accepted, our manager will contact you"
//     }
// }



// /!-----Ternary operator------/

// let type;
// const age = 20;
// if (age > 18) {
//     type = 'adult';
// } else {
//     type = 'child';
// }
// console.log (type); //adult

// const age = 20;
// const type = age > 18 ? 'adult' : 'child';
// console.log(type); //adult

// const a = 5;
// const b = 10;
// let biggerNumber;

// if (a > b) {
//     biggerNumber = a;
// } else {
//     biggerNumber = b;
// }
// console.log(biggerNumber); //10

// const a = 5;
// const b = 10;
// const biggerNumber = a > b ? a : b;
// console.log(biggerNumber); //10

// function checkPassword(password) {
//     const correctPassword = "jqueryismyjam";
//     return password === correctPassword ? "Access granted" : "Access denied, wrong password!";
// }


// /!-----Switch operator------/

// const fruit = "apple";

// switch (fruit) {
//     case 'apple':
//         console.log('Apple selected');
//         break;
//     case 'banana':
//         console.log('Banana selected');
//         break;
//     case 'orange':
//         console.log('Orange selected');
//         break;
//     default:
//         console.log('The fruit is unknown')
// }



// /!-----Break operator------/

// const day = 3;

// switch (day) {
//     case 1:
//     case 2:
//     case 3:
//     case 4:
//     case 5:
//         console.log('This is a working day');
//         break;
//     case 6:
//     case 7:
//         console.log('It is a day off');
//         break;
//     default:
//         console.log('Invalid');
// }

// function getSubscriptionPrice(type) {
//     switch (type) {
//         case "starter":
//             return 0;
//         case "professional":
//             return 20;
//         case "organization":
//             return 50;
//         default:
//             return "Invalid subscription type!";
//     }
// }

// const globalVar = "Global";

// console.log(globalVar); // Доступ до globalVar з глобальної області видимості
// // Немає доступу до aVar, bVar і cVar

// if(true) {
// 	const aVar = "A";
// 	console.log(globalVar); // Доступ до globalVariable з блоку A
//   console.log(aVar); // Доступ до aVar з блоку A
// 	// Немає доступу до bVar і cVar

// 	if(true) {
// 		const bVar = "B";
// 		console.log(globalVar); // Доступ до globalVariable з блоку B
// 	  console.log(aVar); // Доступ до aVar з блоку B
// 	  console.log(bVar); // Доступ до bVar з блоку B
// 		// Немає доступу до cVar
// 	}
// }

// console.log(globalVar); // Доступ до globalVar із глобальної області видимості
// // Немає доступу до aVar, bVar і cVar

// if(true) {
// 	const cVar = "C";
//   console.log(globalVariable); // Доступ до globalVar з блоку C
//   console.log(cVar); // Доступ до cVar з блоку C
// 	// Немає доступу до aVar і bVar
// }

// console.log(globalVar); // Доступ до globalVar із глобальної області видимості
// // Немає доступу до aVar, bVar і cVar




