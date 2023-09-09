//fillExample
const array8 = ["1", "2", "3", "4", "5"];
const numbers = array8.fill(0, 1, 4);
console.log(numbers);

//filterExample
const array9 = ["helloworld", "javascript", "C#", "C++", "Python"];
const words = array9.filter((item) => item.length > 6);
console.log(words);

//findExample
const array10 = ["10", "20", "30", "40", "50"];
const results = array10.find((item) => {
  return item > 30;
});
console.log(results);
const index = array10.findIndex((item) => {
  return item > 30;
});
console.log(index); //indexof ve fındindex arasındaki fark?

//flatExample
const array11 = ["1", ["2", "3"], ["4", "5", "6"]];
console.log(array11.flat());

//joinExample
const elements = ["fire", "air", "eart", "water", "wood"];
console.log(elements.join());
console.log(elements.join(""));
console.log(elements.join("-"));

//keys-map-popExample
const array12 = ["a", "b", "c"];
const iterator2 = array12.keys();
for (const key of iterator2) {
  console.log(key);
}
console.log(array12.pop());
const map1 = array10.map((v) => v * 2);
console.log(map1);
const push = array12.push("d");
console.log(array12);
console.log(array12.toString());
