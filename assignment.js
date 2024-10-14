//write a function that takes in a string and conerts the first letter of every word to uppercase
const firstLetterToCaps = (str) => {
  const result = str.split(" ").map((word) => {
    return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
  });
};
console.log(firstLetterToCaps("omokehinde is a good boy"));

//write a function that checks if the parameter is a number or not. return true or false

const checkNumber = (arg) => typeof arg === "number";
console.log(checkNumber("hllo"));

/////////////////////////////////////////////
const currencyData = [
  { from: "GBP", to: "NGN", rate: 2200 },
  { from: "USD", to: "NGN", rate: 1700 },
  { from: "EUR", to: "NGN", rate: 1900 },
  { from: "YEN", to: "NGN", rate: 400 },
];

// Iterate over the currencydata and log a message "The exchange rate for USD to NGN is 1700"

currencyData.map((currencyRate) => {
  console.log(
    `The Exchange Rate for ${curencyRate.from} to ${currencyRate.to} is ${currencyRate.rate}`
  );
});

////////////////////////////
//write a function that returns the exchange rate for that currency pair or an appropriate message if the pair is not found
const findCurrencyPair = (baseCurrency, toCurrency) => {
  //search through the currencyDate to find a match
  const pair = currencyData.find((currency) => {
    return currency.from === baseCurrency && currency.to === toCurrency;
  });

  if (pair) {
    console.log(
      `The Exchange Rate for ${pair.from} to ${pair.to} is ${pair.rate}`
    );
  } else {
    console.log("The currency pair cannot be found");
  }
};

console.log(findCurrencyPair("YEN", "NGN"));

//write a conversion function
//2usd =
//200 AUS
const convertCurrency = (baseCurrency, toCurrency, amount) => {
  const pair = currencyData.find((currency) => {
    return currency.from === baseCurrency && currency.to === toCurrency;
  });

  if (pair) {
    //conversion
    console.log(
      `${amount} ${pair.from} is equaivalent to ${amount * pair.rate} ${
        pair.to
      }`
    );
  } else {
    console.log("Currency pair not found");
  }
};

convertCurrency("GBP", "NGN", 500);

//write a function to add to the currency date list
//AUS NGN 300
const addNewCurrency = (from, to, rate) => {
  //push
  currencyData.push((from, to, rate));
  console.log(currencyData);
};
addNewCurrency("AUS", "NGN", "500");
 


////////ASSIGNMENT 
//ASSIGNMENTS
const cart = [
  { title: "Laptop", price: 1000, quantity: 1 },
  { title: "Headphones", price: 200, quantity: 2 },
  { title: "Mouse", price: 50, quantity: 3 },
  { title: "AirPods", price: 400, quantity: 2 },
  { title: "TV", price: 1200, quantity: 2 },
];

// 1. Write a function that prints out the title of each product in the cart array.
const printCartItemsTitle = () => {
  cart.map((item) => {
    const { title } = item;
    console.log(title);
  });
};
printCartItemsTitle();

// 2. Write a function that calculates the total number of items (quantity) in the cart.
const totalQuantity = () => {
  return cart.reduce((prev, curr) => prev + curr.quantity, 0);
};
console.log(totalQuantity());

// 3. Write a function that finds and prints the most expensive product in the cart.
const mostExpensive = () => {
  let expensive = cart[0].price; //1000
  for (item of cart) {
    if (item.price > expensive) {
      expensive = item.price;
    }
  }
  console.log(expensive);
};
mostExpensive();
//the total price
//4. Write a function that calculates the total value of the cart by multiplying the price
//and quantity for each product, and then summing up the results.
const totalValueInCart = () => {
  const totalValue = cart.reduce(
    (prev, curr) => prev + curr.price * curr.quantity,
    0
  );
  console.log(totalValue);
};
totalValueInCart();

//5. Write a function that filters and displays products that cost more 100

const itemsGreaterthan100 = () => {
  const items = cart.filter((item) => item.price > 100);
  console.log(items);
};
itemsGreaterthan100();

//6. Write a function that checks if a certain product is in the cart
// based on its title.e.g is Laptop in the cart
const searchItem = (search) => {
  const item = cart.find((product) => product.title === search);
  if (item) {
    console.log(item);
  } else {
    console.log("That item is not in cart");
  }
};
searchItem("TV");

//7. Write a function that displays each product along with its total value (price * quantity).
const displayItemPrice = () => {
  cart.forEach((product) => {
    console.log(`${product.title} costs ${product.price * product.quantity}`);
  });
};

displayItemPrice();
//laptop,
//8. Write a function that concatenates all the
// product titles into a single string, separated by dash.
const concatTitles = () => {
  return cart.map((product) => product.title).join("-");
};
console.log(concatTitles());

//9. Write a function that checks if the cart contains
//any products that are more expensive than 70.
//some
const checkmoreExpensivethan70 = () => {
  return cart.some((item) => item.price > 70);
};
console.log(checkmoreExpensivethan70());

//10. Write a function that clears the entire cart (removes all products).
const clearCart = () => [];
console.log(clearCart());