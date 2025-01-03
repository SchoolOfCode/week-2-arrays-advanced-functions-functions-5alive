// console.log("hello world");

// const numbersArray = [2, 3, 4, 5, 6];

// const newNumbersArray = numbersArray.map((input) => input * 2);

// console.log(newNumbersArray);

// const filteredNumbers = newNumbersArray.filter((element) => element > 10);

// console.log(filteredNumbers);

// function greeting(name) {
//   console.log(`Hi ${name}, how are you?`);
// }

// function newGreeting(callBack, name1, name2, name3) {
//   callBack(name1);
//   callBack(name2);
//   callBack(name3);
// }

// //create a function
// //that accepts a callback function and 3 name parameters
// //and calls the callback function

// function mulitply(number) {
//   console.log(number * 1000);
// }

// function newMultiply(callBack, num1, num2, num3) {
//   callBack(num1);
//   callBack(num2);
//   callBack(num3);
// }

// function newTest(one) {
//   return one * 3000;
// }

// function testTwo(callBack, num1) {
//   console.log(callBack(num1));
// }

// let shoeStock = [
//   {
//     product: "Chanel Mules",
//     price: 1225,
//   },
//   {
//     product: "Jimmy Choo Jemma 90",
//     price: 675,
//   },
//   {
//     product: "Choo Skye 70",
//     price: 445,
//   },
// ];

// let incVat = shoeStock.map(function (stock) {
//   return {
//     product: stock.product,
//     price: stock.price,
//     priceIncVat: stock.price * 1.2,
//   };
// });

// console.log(incVat);

// let reducedPrices = incVat.map(function (stock) {
//   return {
//     product: stock.product,
//     price: stock.price,
//     priceIncVat: stock.price * 1.2,
//     salePrice: stock.price * 0.8,
//   };
// });

// console.log(reducedPrices);

// let newStock = incVat.push({
//   product: "cool shoesies",
//   price: "1 million dollaz",
// });

// console.log(incVat);

// let numbArr = [1, 2, 3, 4, 5];

// function doubleOrNothin(input) {
//   return input * 2;
// }

// let doubled = numbArr.map(doubleOrNothin);

// let doubleBubble = numbArr.map(function (numbers) {
//   return numbers * 2;
// });

// console.log(doubleBubble);

// let strings = ["one", "two", "three", "four"];

// function checkForFive(array) {
//   return array.filter(function (element) {
//     return element.length >= 5;
//   });
// }

// function addOne(array) {
//   return array.filter(function (elements) {
//     return elements.includes("e");
//   });
// }

let sold = [1, 2, 3, 4, 5];

let totalSold = sold.reduce(function (accumulator, current) {
  return (accumulator += current);
}, 0);
let profitAfterVat = totalSold * 0.8;

// console.log(profitAfterVat);

// //let lastSold = sold.pop();

// //console.log(lastSold);

// function checkFor(listSold) {
//   if (listSold.includes(5)) {
//     return true;
//   } else {
//     return false;
//   }
// }

// let newPrices = strings.concat(sold);

// console.log(newPrices);

// let animals = ["Monkeys", "Girrafes", "Donkeys", "Elephants", "Chimpanzee"];

// console.log(animals.slice(0, 2));

// console.log(animals.indexOf("Donkeys"));

let addressBook = [
  {
    name: "Caitlin",
    age: "30",
    city: "London",
  },
  {
    name: "Jake",
    age: "32",
    city: "Nottingham",
  },
  {
    name: "Devon",
    age: "29",
    city: "Stockholm",
  },
  {
    name: "Sashka",
    age: "32",
    city: "New York",
  },
  {
    name: "Ellice",
    age: "27",
    city: "Berlin",
  },
  {
    name: "Chloe",
    age: "30",
    city: "Barcelona",
  },
  {
    name: "Benjy",
    age: "31",
    city: "Sitges",
  },
];

function addNewContact() {
  let userName = prompt(
    "Please enter the name of the contact you would like to add to the address book"
  );

  let userAge = prompt(
    "Please enter the age of the contact you would like to add to the address book"
  );

  let userCity = prompt(
    "Please enter the ciy of the contact you would like to add to the address book"
  );

  addressBook.push({
    Name: userName,
    Age: userAge,
    City: userCity,
  });
}

function viewAddressBook() {
  console.log(addressBook);
}

function updateUser(addressBook, name, newInfo) {
  const user = addressBook.find(
    (user) => user.name.toLowerCase() === name.toLowerCase()
  );
  if (user) {
    Object.assign(user, newInfo);
    return `User ${name} updates successfully.`;
  } else {
    return `User ${name} not found`;
  }
}

function changeUserInfo() {
  let currentName = prompt(
    `Please input the name of the user who's information you wish to change`
  );
  let dataType = prompt(
    `Please enter the type of data you wish to change. Either name, age or city.`
  );
  let newInfo = prompt(
    `Please input the new ${dataType} the user infomation should be updated to`
  );
  let updatedUser = updateUser(addressBook, currentName.toLowerCase(), {
    [dataType]: newInfo,
  });

  return updatedUser;
}

function deleteUserInner(addressBook, userName) {
  const userIndex = addressBook.findIndex(
    (user) => user.name.toLowerCase() === userName.toLowerCase()
  );
  if (userIndex !== -1) {
    addressBook.splice(userIndex, 1);
    return `${userName} has been deleted`;
  } else {
    return `${userName} not found`;
  }
}

function deleteUser(name) {
  return deleteUserInner(addressBook, name.toLowerCase());
}

function findUserByCity(addressBook, city) {
  const matchingUsers = addressBook.filter(
    (users) => users.city.toLowerCase() === city.toLowerCase()
  );
  if (matchingUsers.length > 0) {
    return matchingUsers;
  } else {
    return `No contacts were found in ${city}`;
  }
}

function listContactbyCity(citySearch) {
  return findUserByCity(addressBook, citySearch);
}

//create a function that accepts paramaters of address book and user name
//finds the user within the address book
//deletes the user

// function changeUserName() {
//   let currentName = prompt(
//     "Please input the name of the user information you would like to change"
//   );
//   let nameChange = prompt("Please input the updated name change");
//   let updatedUser = updateUser(addressBook, currentName, { name: nameChange });
//   return updatedUser;
// }

// function changeUserAge() {
//   let currentName = prompt(
//     "Please input the name of the user who's information you would like to change"
//   );
//   let ageChange = prompt("Please input the updated age of the user");
//   let updatedUserAge = updateUser(addressBook, currentName, { age: ageChange });
//   console.log(
//     `You have succesfully updated ${currentName}'s age to ${ageChange}`
//   );
//   return updatedUserAge;
// }

// function changeUserCity() {
//   let currentName = prompt(
//     "Please input the name of the user who's information you would like to change"
//   );
//   let cityChange = prompt(
//     "Please input the name of the new City you would like to update your user to"
//   );
//   return updateUser(addressBook, currentName, { city: cityChange });
// }
