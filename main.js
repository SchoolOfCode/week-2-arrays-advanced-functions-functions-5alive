console.log("hello world");

const numbersArray = [2, 3, 4, 5, 6];

const newNumbersArray = numbersArray.map((input) => input * 2);

console.log(newNumbersArray);

const filteredNumbers = newNumbersArray.filter((element) => element > 10);

console.log(filteredNumbers);

function greeting(name) {
  console.log(`Hi ${name}, how are you?`);
}

function newGreeting(callBack, name1, name2, name3) {
  callBack(name1);
  callBack(name2);
  callBack(name3);
}

//create a function
//that accepts a callback function and 3 name parameters
//and calls the callback function

function mulitply(number) {
  console.log(number * 1000);
}

function newMultiply(callBack, num1, num2, num3) {
  callBack(num1);
  callBack(num2);
  callBack(num3);
}

function newTest(one) {
  return one * 3000;
}

function testTwo(callBack, num1) {
  console.log(callBack(num1));
}

let shoeStock = [
  {
    product: "Chanel Mules",
    price: 1225,
  },
  {
    product: "Jimmy Choo Jemma 90",
    price: 675,
  },
  {
    product: "Choo Skye 70",
    price: 445,
  },
];

let incVat = shoeStock.map(function (stock) {
  return {
    product: stock.product,
    price: stock.price,
    priceIncVat: stock.price * 1.2,
  };
});

console.log(incVat);

let reducedPrices = incVat.map(function (stock) {
  return {
    product: stock.product,
    price: stock.price,
    priceIncVat: stock.price * 1.2,
    salePrice: stock.price * 0.8,
  };
});

console.log(reducedPrices);

let newStock = incVat.push({
  product: "cool shoesies",
  price: "1 million dollaz",
});

console.log(incVat);

let numbArr = [1, 2, 3, 4, 5];

function doubleOrNothin(input) {
  return input * 2;
}

let doubled = numbArr.map(doubleOrNothin);

let doubleBubble = numbArr.map(function (numbers) {
  return numbers * 2;
});

console.log(doubleBubble);

let strings = ["one", "two", "three", "four"];

function checkForFive(array) {
  return array.filter(function (element) {
    return element.length >= 5;
  });
}

function addOne(array) {
  return array.filter(function (elements) {
    return elements.includes("e");
  });
}

let sold = [1, 2, 3, 4, 5];

let totalSold = sold.reduce(function (accumulator, current) {
  return (accumulator += current);
}, 0);
let profitAfterVat = totalSold * 0.8;

console.log(profitAfterVat);

//let lastSold = sold.pop();

//console.log(lastSold);

function checkFor(listSold) {
  if (listSold.includes(5)) {
    return true;
  } else {
    return false;
  }
}

let newPrices = strings.concat(sold);

console.log(newPrices);

let animals = ["Monkeys", "Girrafes", "Donkeys", "Elephants", "Chimpanzee"];

console.log(animals.slice(0, 2));

console.log(animals.indexOf("Donkeys"));
