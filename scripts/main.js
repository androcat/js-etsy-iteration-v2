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

  // Show me how to get an array of items that cost between $14.00 and $18.00 USD
  function filterPrices(arr) {
    return arr.filter((obj) => obj.price >= 14 && obj.price <= 18);
  }

  console.log(`The average price is ${calcMean(items)}`);
  console.log(
    `Items that cost between $14.00 USD and $18.00 USD:`,
    filterPrices(items)
  );
})();
