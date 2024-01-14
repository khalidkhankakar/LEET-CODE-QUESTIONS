// STATEMENT
/* Given an integer array arr and a mapping function fn, return a new array with a transformation applied to each element.

The returned array should be created such that returnedArray[i] = fn(arr[i], i).

Please solve it without the built-in Array.map method.

Example 1:

Input: arr = [1,2,3], fn = function plusI(n, i) { return n + i; }
Output: [1,3,5]
Explanation: The function increases each value by the index it resides in.  */

const map = (arr, fn)=>{
    let result = [];
    let n = arr.length;
    console.log(arr);
    for (let i = 0; i < n; i++) {
          let number = fn(arr[i]);
          result.push(number)  
    }
    return result;
}
const fn = (num) => num + 1;
console.log(map([1,2,3], fn));