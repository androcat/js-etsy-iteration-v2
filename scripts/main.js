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

  // Show me how find the item with a "GBP" currency code and print its name and price
  function findGBP(arr) {
    return arr.filter((obj) => obj.currency_code === "GBP"); //returns an array of one obj
  }

  // Show me how to find which items are made of wood.
  function filterWoodMaterial(arr) {
    return arr.filter((obj) => obj.materials.includes("wood"));
  }

  // Show me how to find which items are made of eight or more materials
  function filterEightMaterials(arr) {
    return arr.filter((obj) => obj.materials.length >= 8);
  }

  // Show me how to calculate how many items were made by their sellers

  console.log(`The average price is ${calcMean(items)}`);
  console.log(
    `Items that cost between $14.00 USD and $18.00 USD:`,
    filterPrices(items)
  );
  console.log(`${findGBP(items)[0].title} costs £${findGBP(items)[0].price}`);
  filterWoodMaterial(items).forEach((obj) => console.log(`${obj.title}`));
  filterEightMaterials(items).forEach((obj) => {
    console.log(`${obj.title}`);
    obj.materials.forEach((materialName) => console.log(materialName));
  });
})();
