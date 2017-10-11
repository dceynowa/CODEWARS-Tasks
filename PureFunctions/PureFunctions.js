const state = {
  modifier: 5,
};

// function solution(arr, options) {
//   for (let i = 0; i < arr.length; ++i) {
//     arr[i] += 2 * state.modifier;
//   }
//
//   console.log(arr);
//
//   return arr;
// }
debugger;
const solution = (array) => {
  return array.map(item => {
    return item += 2 * state.modifier
  })
}

console.log(solution([1,2,3]))