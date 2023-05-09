(function () {
  "use strict";

  function calcMean(arr) {
    // Here is the sum of all prices
    // Targets the price key of each obj in the array
    return (
      Math.round(
        (arr.reduce((acc, obj) => acc + obj.price, 0) / arr.length) * 100
      ) / 100
    );
    // for rounding to 2 decimals:
    // Math.round(num * 100) / 100;
    // Why ? because via * and then / we reformat via the '00'
  }

  console.log(`The average price is ${calcMean(items)}`);
})();
