//!_Date: Sept 15

//?_"Min, Max, and Avg."
//?_Given an array, print the max, min and average values for that array.
//*_1)--Open-Book--It's Ok to Look Before Testing the Code.
//*_2)--I__Testing suspended (for today.) See farther below for additional related comment.

// let myArr = [1, 2, 3, 4, 5];
// var min = myArr[0];
// var max = myArr[0];
// var avg = 0;

// for (let i = 0; i < myArr.length; i++){
//     if (myArr[i] < min) min = myArr[i];
//     if (myArr[i] > max) max = myArr[i];
//     avg += myArr[i];
// }
// avg /= myArr.length;

// console.log("Min is : " + min);
// console.log("Max is : " + max);
// console.log("Average is " + avg);

//*_2)--II__I am not sure--in fact, I really doubt (with my assigned odds against =  67%), that this code-block is going to run successfully. Regardless, I'm sticking to my plan as declared above, re: not testing it. Goal of not testint the code: to help ease mysele back into the habit of regular codin, versus coding "well".

//!_End of Day
//!-------------------------------//

//!_Date: Sept 24
//!_Agenda: As many algos as possible before 11:59 PM.

//!_Update: I wasn't able to finish these on the above date--Sept 24.
//!_Current Date: Oct 1, 2023.

//?_(#-3 of Basic 13)_"Iterate through a given array, backwards, printing each value."
//?_Printing/testing suspended.
// arr = [1, 2, 3];
// function arrValDecrease (){
//     for (let i = arr.length; i >= 0; i--){
//         console.log(arr[i]);
//     }
// }

//?_(#-5 of CoderByte 18)_"Is N a prime number?"
//?_Printing/testing suspended.
// function isNPrime(n){
//     if (n < 2) { return false; }
//     for (let i = 2; i <= Math.ceil(Math.ceil(n)); i++){

//         if (n % i === 0) { return false; }
//     }
//     return true;
// }

//?_(#-7 of Basic 13)_"Create an array with all the odd integers between 1 and 255 (inclusive)."
//?_Printing/testing suspended.
// function printOdds(){
//     for (let i = 0; i <= 255; i++){
//         if (i % 2 !== 0){
//             console.log(i);
//         }
//     }
// }

//?_(#-9 of CoderByte 18)_"First Non-Repeating Character."
//?_Printing/testing suspended.

// function firstNonRepeating (string){
//     let hashTable = {};
//     for (let c of string){
//         if (hashTable[c] === undefined){
//             hashTable[c] = 1;
//         } else {
//             hashTable[c] += 1;
//         }
//     }
//     for (let c of string){
//         if (hashTable[c] === 1){
//             return c;
//         }
//     }
//     return -1;
// }

//?_(#-17 of CoderByte-18)_"Convert array of strings into an object."

// function convertString(string){

//     let obj = {};
//     const people = string.split(' ');
//     for (let p of people){
//         const info = p.split(',');
//         let userObj = {
//             'email': info[1] || null,
//             'age': parseInt(info[2]) || null,
//             'occupation': info[3] || null 
//        };
//        obj[info[0]] = userObj;
//     }
//     return obj;
// }
// let s = "Daniel,me@test.com,56,Coder John,,,Teacher Michael,mike@test.com,,"; 
// let people = convert(s);
// //?_Testing: suspended.
// people['Daniel']['age']; // => 56 people['Michael']['occupation'] // => null
// 51

//!_End of Day
//!-------------------------------//

//!_Date: Oct 2
//!_Agenda 1; approx. 5:45 PM: "Min, Max, and Avg"
//!_The intention is for me to do more coding before 11:59 PM today. But in the meantime, I can at least accomplish this "warm-up," the "Min, Max, and Avg" algo.

//?_(#-11 of Basic 13)_"IGiven an array, print the max, min and average values for that array."
//?_Printing/testing suspended.

// let myArr = [1, 2, 3, 4, 5];

// var min = myArr[0];
// var max = myArr[0];
// var avg = 0;

// for (let i = 0; i < myArr.length; i++){
//     if (myArr[i] < min) min = myArr[i];
//     if (myArr[i] > max) max = myArr[i];
//     avg += myArr[i];
// }

// avg /= myArr.length;

// console.log("Min is : " + min);
// console.log("Max is : " + max);
// console.log("Average is : " + avg);

//!_End of Day
//!-------------------------------//

