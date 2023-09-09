//arrayWorks1
//example 1
[a, b, c, d, e] = [1, 2, 3, 4, 5];
console.log(a);
const division = (e /= 2);
console.log(division);

// example 2
const getrectarea = (width, height) => {
  return width * height;
};
console.log(getrectarea(3, 4));

//example 3
const user1 = {
  name: "bahar",
  surname: "isikli",
  age: "19",
  expreince: { university: "marmara" },
};
console.log(user1.name);
console.log("name" in user1);
console.log(user1.expreince.university);

//example 4
let x = 4;
let y = ++x;
let z = x++;
console.log(y);
console.log(z);
console.log(x);

//example 5
const f = { duration: 50 };
f.duration ??= 10;
console.log(f.duration);
f.speed ??= 25;
console.log(f.speed);

//example 6
const g = 8;
const object = { number: g };
console.log(object.number);

//example 7
const user2 = {
  name: "özgür",
  lastname: "isikli",
  cat: { catsname: "letafet", color: "black" },
};
console.log(user2.cat.catsname, user2.cat.color);
