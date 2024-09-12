let hatPrice = 100;
console.log(`Hat price: ${hatPrice}`);
let bootsPrice = "100";
console.log(`Boots price: ${bootsPrice}`);

function sumPrices(first, second, third = 0) {
    return first + second + third;
}

let totalPrice = sumPrices(hatPrice, bootsPrice);
console.log(`Total Price: ${totalPrice} ${typeof totalPrice}`);
totalPrice = sumPrices(100, 200, 300);
console.log(`Total Price: ${totalPrice} ${typeof totalPrice}`);
totalPrice = sumPrices(100, 200);
console.log(`Total Price: ${totalPrice} ${typeof totalPrice}`);

// if (hatPrice === bootsPrice) {
//     console.log("Prices are the same");
// } else {
//     console.log("Prices are different");
// }

// let totalPrice = Number(hatPrice) + Number(bootsPrice);
// console.log(`Total Price: ${totalPrice}`);

// let myVariable = "Adam";
// console.log(`Type: ${typeof myVariable}`);

// myVariable = 100;
// console.log(`Type: ${typeof myVariable}`);

// let firstCity;
// let secondCity = firstCity || "London";
// console.log(`City: ${secondCity}`);

// let taxRate;
// console.log(`Tax rate: ${taxRate ?? 10}%`);
// taxRate = 0;
// console.log(`Tax rate: ${taxRate ?? 10}%`);
