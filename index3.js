let names = ["Hat", "Boots", "Gloves"];
let [one, two] = names;
console.log(`First: ${one}, Second: ${two}`);

let [, , three] = names;
console.log(`Third: ${three}`);


let prices = [100, 120, 50.25];
[, ...highest] = prices.sort((a, b) => a - b);
highest.forEach(price => console.log(`High price: ${price}`));
