//example1
const array1 = ["a", "b", "c"];
const iterator1 = array1[Symbol.iterator]();
for (const value of iterator1) {
  console.log(value);
}

//example2
const array2 = ["4", "6", "8", "10"];
let index = 2;
console.log(
  "using an index on " + index + " the item returned is " + array2.index
);
console.log(
  "using an index on" + index + " the item returned is " + array2.at(index)
);

//example3
const array3 = ["1", "2", "3"];
let number = "4";
const array4 = array3.concat(number);
console.log(array4);

//example4
const array6 = ["a", "b", "c"];
const iterator2 = array6.entries();
console.log(iterator2.next().value);
console.log(iterator2.next().value);
console.log(iterator2.next().value);
console.log(iterator2.next().value); //undefined.çünkü dördüncü bir item yok.

//example5
const array7 = [100, 72, 48, "78", "48", "46"];
const controling = (currentvalue) => currentvalue < 40;
console.log(array7.every(controling));
