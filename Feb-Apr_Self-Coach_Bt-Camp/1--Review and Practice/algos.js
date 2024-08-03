//!_Student-to-Master (STM) Self-Challenge: Launch [?] Feb 20, 2024

//!_Day 1--Feb 20:
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

//!_Day 4--Continued/Concluded of Student-to-Master (STM) Self-Challenge:

//!_Also Day 8 of 25 For Summer Challenge

//!_Jul 31, 2024

//*_Agenda:
//?_Copy-Pasting is okay. The point is to look closely at the code, "play with it," etc. Later, test your mastery, re: writing it with test cases.

//*_#-1--"Path Sum"
//*_#-2--"Binary Tree"
//*_#-3--"Find Peak Element"
//*_#-4--"Palindrome Partitioning"
//*_#-5--"Search in Rotated Sorted Array"
//*_#-6--"Merge k-Sorted Array" 

//?_#-1
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {boolean}
 */
// var hasPathSum = function(root, targetSum) {
//     if (!root) return false;

//     const dfs = (node, currentSum) => {
//         if (!node) return false;

//         currentSum += node.val;

//         if (!node.left && !node.right) {
//             return currentSum === targetSum;
//         }

//         return dfs(node.left, currentSum) || dfs(node.right, currentSum);
//     };

//     return dfs(root, 0);
// }; 
//?_Testing Suspended. 


//?_2
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
// var maxPathSum = function(root) {
//     let maxSum = -Infinity; // Initialize with the smallest possible value

//     function dfs(node) {
//         if (node === null) return 0;

//         // Calculate maximum path sum from left and right children
//         let left = Math.max(0, dfs(node.left)); 
//         let right = Math.max(0, dfs(node.right));

//         // Update the overall maximum path sum
//         maxSum = Math.max(maxSum, left + right + node.val);

//         // Return maximum path sum that starts from the current node
//         return Math.max(left, right) + node.val;
//     }

//     dfs(root);
//     return maxSum;
// };
//?_Testing Suspended.


//?_3
// function findPeakElement(arr) {
//     let left = 0;
//     let right = arr.length - 1;
  
//     while (left < right) {
//       let mid = Math.floor((left + right) / 2);
  
//       if (arr[mid] < arr[mid + 1]) {
//         left = mid + 1;
//       } else {
//         right = mid;
//       }
//     }
  
//     return left; // Index of the peak element
//   }
  
//   const arr = [1, 3, 20, 4, 1, 0];
//   const peakIndex = findPeakElement(arr);
//   console.log("Peak element is:", arr[peakIndex]); 

//?_Testing Suspended.


//?_4
{/* <script>

// Javascript code for Palindrome
// Partitioning Problem

// Function to Check if a substring is a palindrome
function isPalindrome(String, i, j)
{
	while (i < j)
	{
		if (String[i] != String[j])
			return false; 
			
		i++;
		j--;
	}
	return true;
}

// Function to find the minimum number of cuts needed
// for palindrome partitioning
function minPalPartion(String, i, j)
{
	// Base case: If the substring is empty or a palindrome,
	// no cuts needed
	if (i >= j || isPalindrome(String, i, j))
		return 0;
		
	let ans = Number.MAX_VALUE, count;
	
	
	// Iterate through all possible partitions and find the
	// minimum cuts needed
	for(let k = i; k < j; k++)
	{
		count = minPalPartion(String, i, k) +
		minPalPartion(String, k + 1, j) + 1;
		ans = Math.min(ans, count);
	}
	return ans;
}

// Driver code
let str = "ababbbabbababa";

// Find the minimum cuts needed for palindrome
// partitioning and display the result
document.write("Min cuts needed for " + 
			"Palindrome Partitioning is " + 
			minPalPartion(str, 0, str.length - 1));

</script>
  */}
//?_Testing Suspended.


//?_5
// function search(nums, target) {
//     let left = 0;
//     let right = nums.length - 1;
  
//     while (left <= right) {
//       const mid = Math.floor((left + right) / 2);
  
//       if (nums[mid] === target) {
//         return mid;
//       }
  
//       // Check if the left half is sorted
//       if (nums[left] <= nums[mid]) {
//         if (target >= nums[left] && target < nums[mid]) {
//           right = mid - 1;
//         } else {
//           left = mid + 1;
//         }
//       } else { // Right half is sorted
//         if (target > nums[mid] && target <= nums[right]) {
//           left = mid + 1;
//         } else {
//           right = mid - 1;
//         }
//       }
//     }
  
//     return -1;
//   }
//?_Testing Suspended.


//?_6
// class Node {
//     constructor(data) {
//       this.data = data;
//       this.next = null;
//     }
//   }
  
//   function mergeKLists(lists) {
//     if (!lists || lists.length === 0) return null;
  
//     // Use a min-heap to efficiently find the smallest element across all lists
//     const minHeap = new MinHeap((a, b) => a.data - b.data);
  
//     // Add the first node of each list to the min-heap
//     for (const list of lists) {
//       if (list) minHeap.insert(list);
//     }
  
//     // Create a dummy node to start the merged list
//     const dummy = new Node(0);
//     let tail = dummy;
  
//     // Extract the smallest node from the min-heap and add it to the merged list
//     while (!minHeap.isEmpty()) {
//       const node = minHeap.extractMin();
//       tail.next = node;
//       tail = tail.next;
  
//       // Add the next node from the same list to the min-heap
//       if (node.next) minHeap.insert(node.next);
//     }
  
//     return dummy.next;
//   }
  
//   // Implementation of MinHeap (priority queue) - You can use a library for this
//   class MinHeap {
//     constructor(compareFn) {
//       this.heap = [];
//       this.compareFn = compareFn;
//     }
  
//     insert(node) {
//       // ...
//     }
  
//     extractMin() {
//       // ...
//     }
  
//     isEmpty() {
//       // ...
//     }
//   }
//?_Testing Suspended. 


//!_============================================_//
//!_============================================_//

//*_Day 5--Continued/Concluded of Student-to-Master (STM) Self-Challenge:
// *_Also Day 9 of 25 For Summer Challenge
// ?_Aug 2, 2024

// ?_Agenda:
//*_Also via an "Open Book (-test)"-style. 

// ?_1) Min-Max-Avg
// ?_2) Sliding Window Maximum
// ?_3) Merge k Sorted Lists
// ?_4) Trapping Rain Water

//!-----------------------------------------------//

// ?_1) Min-Max-Avg:

// function minMaxAvg(arr){
// 	var min = Infinity;
// 	var max = -Infinity;
// 	var sum = 0;

// 	for (var = 0; i < arr.length; i++){
// 		sum = sum + arr[i];
// 		if (arr[i] > max){
// 			max = arr[i];
// 		}
// 		else if (arr[i] < min){
// 			min = arr[i];
// 		}
// 	}
// 	var avg = sum / arr.length;
// 	console.log('Min: ' + min + ' Max: ' + max + ' Average: ' + average)
// }

// PrintMaxMinAverageArrayVals([1, 800, 58, 899, 2000, 1855, 100]);

//?_Functionality test suspended.

//!-----------------------------------------------//

// ?_2) Sliding Window Maximum:
//*_Add solution here...

//!-----------------------------------------------//

// ?_3) Merge k-Sorted Lists: 

//*_Add solution here...

//!-----------------------------------------------//

// ?_4) Trapping Rain Water: 

//*_Add solution here...



//!_============================================_//
//!_============================================_//