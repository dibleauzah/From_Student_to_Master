//!_Day 1: of Student-to-Master (STM) Self-Challenge: Feb 20, 2024
//*_Self-encouragement note: Don't focus on sites or tools that discourage you. For instance: **IGNORE Hackerrank!**

//?_Challenge #-1 (of STM Day 1); Coding: SumArray
// function sumArray(arr){
//     let sum = 0;
//     for (let i = 0; i < arr.length; i++){
//         sum += arr[i];
//     }
//     return sum;
// }
// //?_Testing function:
// const numbers = [1, 2, 3, 4, 5];
// console.log(sumArray(numbers));
//?_Test result: successful.
//!_============================================_//

//!_Day 2: of Student-to-Master (STM) Self-Challenge: Mar 13, 2024
//*_Self-encouragement note: "It's okay to look." **RE: HACKERRANK: (Try to) look up a PDF online of the Q and As. The goal(s): For now, to "peek" for self-encouragement. Then ASAP, to holistically master them.**

//!_#-1:...

//?_Print 1 to 255:
//?_Brief Commentary: Apparently a simple look. No edge cases, "Log of N," etc.
//?_Testing = Optional.
// function printOneTo255(){

//     for (i = 0; i < 255; i++){
//         return i;
//     }
// }
// console.log(printOneTo255);
//!_============================================_//
//!_#-2:...

//?_Print the odd numbers between 1 to 255:
//?_Brief Commentary: Similar to 1 above, re: simplicity--i.e., in this particular situation. (No edge cases, "Log of N," etc.)
//?_Testing = Optional.
// function printOdds(){
//     for (i = 1; i <= 255; i++){
//         if(i % 2 !== 0){
//             return i;
//         }
//     }
// }
// console.log(printOdds);
//!_============================================_//
//!_#-3:...

//?_Iterate through a given array--backwards, printing each value:
//?_Brief Commentary 1: Ditto the above observations with this particular challenge as well, unless I'm mistaken.
//?_Testing = Optional.

// let arr = [1, 2, 3, 4, 5];

// function arrayValueDecrease(arr){
//     for (let i = arr.length; i >= 0; i--){
//         console.log(arr[i]);
//     }
// }
// console.log(arrayValueDecrease(arr));

//!_============================================_//
//!_#-4:...

//?_For a/the given array, print the element with the least value.
//?_Brief Commentary: N/A // Same as the above three; i.e., no special considerations observed.

// let arr = [-90, -100, 60, 20, 4000];

// let min = Infinity;

// function findMin (arr){
//     for(let i = 0; i < arr.length; i++){
//         if (min > arr[i]){
//             min = arr[i];
//         }
// }
// return min;
// }
// console.log(findMin(arr));

//!_============================================_//
//!_============================================_//

//!_Day 3--Continued/Concluded of Student-to-Master (STM) Self-Challenge:
//!_Mar 15, 2024

//*_Agenda:
//*_#-11--Max, Min, Average: Given an array, print the max, min and average values for that array.
//*_#-12--Shift Array Values: given an array, move all values forward by one index, dropping the first and leaving a "0" value at the end.
//*_#-13--Swap String For Negative Values: Given an array of numbers, replace any negative vlaues with the string of "Dojo".

//?_11--"Min, Max, Avg."
//?__//__Note: Testing is strictly suspended for the current session; i.e., approx. 7:30 AM till end of sesh.

//?_11:
//!_VERY IMPORTANT (!!!)_____(!!!)_____(!!!!)_____//______VERY IMPORTANT  (!!!)_____(!!!)_____(!!!!): Rember to consult with "Prof. Chat" re: this challenge. E.g., request them for a clear explanation, re: logic of using (-)infinity; other solutions; Log of N, etc.

// function minMaxAvg(arr){
//     sum = 0;
//     min = Infinity;
//     max = -Infinity;
//     for (let i = 0; i < arr.length; i++){
//         sum = sum + arr[i];
//         if (arr[i] > max){
//             max = arr[i];
//         }
//         else if (arr[i] < min){
//             min = arr[i];
//         }
//     }
//     var avg = sum / arr.length;
//?_Note 1--Later--during testing, add a flourish--esp./e.g. humor, re: the output (-return) statement below. :-)
//_console.log('Min: ' + min + ' Max: ' + max + ' Average: ' + average)

//?_Note 2--Double-check the "{}"! :-( As in / e.g./i.e.: isn't there supposed to be a closing "}" below?

//?_12--"Shift Array Values."
//?__//__Note: Testing is strictly suspended for the current session; i.e., approx. 7:30 AM till end of sesh.

// function shiftArrValues(arr){
//     for (let i = 0; i < arr.length - 1; i++){
//         arr[i] = arr[i + 1];
//     }
//     arr[arr.length - 1] = 0;
//     return arr;
// }

//?_Line below to be tested later.
//_console.log(shiftArrValues([1, 800, 58, 899, 2000, 1855, 100]));

//?_13--"Swap String For Negative Values."
//?__//__Note: Testing is strictly suspended for the current session; i.e., approx. 7:30 AM till end of sesh.

// function SwapStringForArrayNegativeVals(arr) {
//     var zero = 0;
//     for (var i = 0; i < arr.length; i++) {
//       if (arr[i] < zero) {
//         arr[i] = 'Dojo';
//       }
//     }
//     return arr;
//   }

//?_Line below to be tested later.
//_console.log(SwapStringForArrayNegativeVals([1, 2, 3, -5.9, 6000, -5, 0, 0.5], 2));

//!_============================================_//
//!_============================================_//
