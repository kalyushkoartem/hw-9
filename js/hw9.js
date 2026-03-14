function logItems(array) {
    for (let i = 0; i < array.length; i++) {
console.log(i + 1, array[i]);

    }
}
logItems(["Mango","Poly","Ajax"])

function calculateEngravingPrice(message, pricePerWord) {
    const words = message.split(" ").length
    const total = words * pricePerWord
    return total;
}
console.log(calculateEngravingPrice("hello br br patapim",67));

function findLongestWord(string) {
    const str = string.split(" ");
    let words = str[0];
    for (const elem of str) {
        if (elem.length > words.length) {
            words = elem;
        }
    }
    return words;
}
console.log(findLongestWord("skibidi toilet"));

function formatString(string) {
   if (string.length <= 40) {
       return string;
   } else {
       return string.slice(0,40) + "..."
   }
}
console.log(formatString("1233121233124566544566457899879009123456789009876543211234567890"));

function checkForSpam(message) {
    if (message.includes("spam"|| "sale")) {
        return true;
    } else {
        return false;
    }
}
console.log(checkForSpam("asdfaspamsdasd"));

 let input;
const numbers = [];
let total = 0;
while (true) {
  input = prompt("Write numbers");
  if (input === null) {
    break;
  }
  numbers.push(Number(input));
}
for (const elem of numbers) {
  total += elem;
}
console.log(total); 
