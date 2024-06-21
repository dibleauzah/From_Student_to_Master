//!_Day 2 of Student-to-Master (STM) Self-Challenge: Mar 13, 2024
//!_Executed in algos.js file.

//!-----------------------------------------------//
//!_Day 3 of Student-to-Master (STM) Self-Challenge: Mar 14, 2024

//*_Agenda:
//*_#-5--Given an array, find and print its maximum.
//*_#-6--Analyze an array's values and print the average.
//*_#-7--Create an array with all the odd integers between 1 and 255 (inclusive).

//*_#-5: [From Line 14 to 23]

// function findTheMax(arr){
//     var max = 0;
//     for(i = 0; i < arr.length; i++ ){
//         if (arr[i] > max){
//             max = arr[i];
//         }
//     }
//    return max;
// }
// console.log(findTheMax[1, 2, 34, -1000, 5, 89, 0, -2]);
//?_Remarks, re: testing: test failed. Reason/output: "undefined".

//*_#-6: [From Line 28 to 37]

// function printArrayAndAvg(arr){
//     var sum = 0;
//     for (i = 0; i < arr.length; i++){
//         sum = sum + arr[i];
//     }

//     var average = sum / arr.length;
//     return average;
// }
// console.log(printArrayAndAvg([1, 2, 3, 4, 5]));
//?_Remarks, re: testing: [test = ] successful! :-)

//*_#-7: [From Line 41 to 49]
// function ReturnOddsArray1To255() {
//     var newArray = []
//     for (i = 1; i <= 255; i += 2) {
//       newArray.push(i);
//     }
//     return newArray;
//   }

//   console.log(ReturnOddsArray1To255());
//?_Remarks, re: testing: [test = ] successful! :-)

//!-----------------------------------------------//
//!_Day 3--Continued/Concluded of Student-to-Master (STM) Self-Challenge:
//!_Mar 15, 2024

//*_Agenda:
//*_#-8--Square each value in a given array, returning the array with changed (squared) values.
//*_#-9--Greater than Y: given an array and a value Y, count and print the number of array values greater than Y.
//*_#-10--Zero Out Negative Numbers: Create an array, and loop through the array. If the values are less than 0, return as 0.

//?_8--"Square Array's Values."
//?__//__Note: Testing is strictly suspended for the current session; i.e., approx. 7:30 AM till end of sesh.

// function squareArrValues(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     var numSquared = arr[i] * arr[i];
//     arr[i] = numSquared;
//   }
//   return arr;
// }

//?_Per no-testing resolution, I am not going to run the line below--i.e., for an output.
//_console.log(SquareArrayValues([1, 800, 58, 899, 2000, 1855, 100]));

//?_9--"Greater Than Y."
//?__//__Note: Testing is strictly suspended for the current session; i.e., approx. 7:30 AM till end of sesh.

// function greaterThanY (arr, y){
//   var Counter = 0;
//   var values = [];
//   for (let i = 0; i < arr.length; i++){
//     if (arr[i] > y){
//       Counter = Counter + 1;
//       values.push(arr[i]);
//     }
//   }
//   console.log(values);
// }

//?_Per no-testing resolution, I am not going to run the line below--i.e., for an output.
//_GreaterThanY([1, 2, 3, -5.9, 6000, -5, 0, 0.5], 2);

//?_10--"Zero Out Negatives"
//?__//__Note: Testing is strictly suspended for the current session; i.e., approx. 7:30 AM till end of sesh.

// function ZeroOut(arr){
//   var NoneSoFar = 0;
//   for (var i = 0; i < arr.length; i++){
//     if (arr[i] > 0){
//       arr[i] = NoneSoFar;
//     }
//   } 
//   return arr;
// }

//?_Per no-testing resolution, I am not going to run the line below--i.e., for an output.
//_ZeroOutArrayNegativeVals([1, 2, 3, -5.9, 6000, -5, 0, 0.5], 2);

//!-----------------------------------------------//
//!-----------------------------------------------//


//!-----------------------------------------------//
//!_Day 17 of STM Self-Challenge: June 21, 2024 

//*_Specific challenge i): "[Find the] Min-Max-Avg"--From "Coding Dojo's 'Basic 13'"

//*_Attempt 1: Done without peeking. See test/ouput result on line 145 farther below.

//?_Step 1: Declare and name the function:
// function minMaxAvg([arr]){
    
//     //?_Step 2: Define the variables:
//     var min = Infinity;
//     var max = -Infinity;

//     var sum = 0;
    
//     //?_Step 3; Use a standard loop to count through the array's contents:
//     for (let i = 0; i <= arr.length; i++){

//             //?_Step 4; Update the sum:
//             sum = sum + arr(i);

//         //?_Step 5; Define the average value:
//         var avg = sum / arr.length;

//         //?_Step 6; Compose an output statement:
//         return ("Hi! It looks like your minimum is " + min + "; your maximum is " + max + "; and your average is " + avg + "! Have an awesome day! :-)")
//     }
// }

// minMaxAvg([1, 2, 3, 4, 5]);

//*_Test result: failed. Reason--"diagnosed" after "peeking at the correct code": I forgot to update the min and max values.

//*_Attempt 2: Via correct copied/pasted code.

function PrintMaxMinAverageArrayVals(arr) {
    var min = Infinity;
    var max = -Infinity;
    var sum = 0;
    for (var i = 0; i < arr.length; i++) {
      sum = sum + arr[i];
      if (arr[i] > max) {
        max = arr[i];
      }
      else if (arr[i] < min) {
        min = arr[i];
      }
    }
    var average = sum / arr.length;
    return ('Min: ' + min + ' Max: ' + max + ' Average: ' + average)
  }
  
  PrintMaxMinAverageArrayVals([1, 800, 58, 899, 2000, 1855, 100]); 
  
  //*_Test result: failed. Reason: terminal / output / console confusion. :-(
