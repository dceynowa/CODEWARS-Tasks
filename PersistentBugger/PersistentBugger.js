function persistence(num) {
  var input = num.toString().split('');
  var inputLength = input.length
  var output = 0;
  var numberOfLoop = 0;
  debugger;
  if (inputLength === 1) {
    return numberOfLoop
  } else {
    do {
      (input.reduce(function (prev, next) {
        output = prev * next
        input = output;
        return input
      }));
      input = input.toString().split('');
      numberOfLoop += 1;
      console.log(numberOfLoop);
      if (input < 10) {
        return numberOfLoop
      }
    } while (inputLength = 1)
  }
}
console.log(persistence(39))