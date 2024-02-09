//!_Random Memory-Test
//!_Feb 9, 2024 (US-QT-UG)

function(minMaxAvg(arr){

let arr = [];
var min = Infinity;
var max = -Infinity;
var sum = 0;

for (let i = 0; i <= arr.length; i++){
    if (arr[i] < min){
        min = arr[i];
    } 
    if (arr[i] > max){
        max = arr[i];
    }
    var avg = sum / arr.length;
}
return;
}

console.log(minMaxAvg[1, 2, 3]);

