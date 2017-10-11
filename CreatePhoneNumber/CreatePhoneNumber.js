const createPhoneNumber = (numbers) => {
 return (`(${numbers.slice(0,3)}) ${numbers.slice(3,6)}-${numbers.slice(6)}`).split(',').join('')
}

console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]))

