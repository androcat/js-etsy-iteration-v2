(function () {
  "use strict";

  function calcMeanUSD(arr) {
    // Here is the sum of all prices
    // Targets the price key of each obj in the array
    return (
      Math.round(
        (arr
          .filter((obj) => obj.currency_code === "USD") // gives back arr of just usd items
          .reduce((acc, obj) => acc + obj.price, 0) / // adds up prices of each of those objects in the array
          arr.length) *
          100
      ) / 100
    );
    // for rounding to 2 decimals:
    // Math.round(num * 100) / 100;
    // Why ? because via * and then / we reformat via the '00'
    // OR use toFixed()
    // etc.toFixed(2) for 2 decimals

    // OR use map()
    // this give an array of just the prices
    // arr.filter((obj) => obj.currency_code === "USD").map((obj) => obj.price).reduce((acc, price) => acc + price);
  }

  // Show me how to get an array of items that cost between $14.00 and $18.00 USD
  function filterPrices(arr) {
    return arr.filter(
      (obj) => obj.price >= 14 && obj.price <= 18 && obj.currency_code === "USD"
    ); // filter in if the item's price is btn 14 and 18 inclusive AND looks at only USD items
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
  function findNumMadeBySellers(arr) {
    return arr.filter((obj) => obj.who_made === "i_did").length;
  }

  console.log(`The average price is ${calcMeanUSD(items)}`);

  console.log(
    `Items that cost between $14.00 USD and $18.00 USD:`,
    filterPrices(items)
  );
  // OR
  // filterPrices(items).forEach((obj) => console.log(obj.title));

  console.log(`${findGBP(items)[0].title} costs £${findGBP(items)[0].price}`);

  filterWoodMaterial(items).forEach((obj) => console.log(`${obj.title}`));

  filterEightMaterials(items).forEach((obj) => {
    console.log(`${obj.title}`);
    obj.materials.forEach((materialName) => console.log(materialName));
  });

  console.log(
    `${findNumMadeBySellers(items)} items were made by their sellers.`
  );
})();
