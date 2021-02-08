console.log("HELLO");
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// reduce
// filter
// map
// forEach
// sort
// reverse
// indexOf
// splice
// slice
// push
// pop
// shift
// unshift

// slice
// const newArr = arr.slice(0, 4)
// splice
// arr.splice(0, 1) //
// arr.splice(0,2)
// arr.splice(arr.length-1, 0, 11)

// indexOf
// arr.indexOf(9)
// arr.indexOf(10000) => -1, <0

// reverse
// const reversed = arr.reverse() = > [10,9,8,7,6,5,4,3,2,1]

// sort
// arr.sort((a,b) => {
// if (a < b) {
// return -1
// }
// })

const forEach = arr.forEach((currentValue) => {
  console.log("currentValue:", currentValue);
  return 1;
  //   console.log("currentIndex:", currentIndex);
  //   console.log("arrItself:", arrItself);
});

console.log("forEach", forEach);

const map = arr.map((currentValue) => {
  return currentValue * 2;
});
console.log("map:", map);

const filter = arr.filter((currentValue, currentIndex, arrItself) => {
  return currentValue < 5;
});
console.log("filter:", filter);

// const reduce = arr.reduce(function(), optional secondValue)
const nelli = arr.reduce((acc, currentValue) => {
  return acc + currentValue;
  // 1st loop:
  //   acc -> 0
  // currentValue
  // gets returned: 1 + 0
  // 2nd loop:
  // acc -> 1 +0
  // currentValue: 2
  // gets returned: 1 + 0 + 2
  // 3rd loop:
  // acc -> 1 + 2 +0
  // currenValue: 3
  // gets returned: 1 + 0 +2 +3
  // 4th loop:
  // acc
}, 0);
console.log("reduce:", nelli);

const users = [
  { name: "Khrys", in: "Netherlands" },
  { name: "Tadej", in: "Europe, but lets be honest, kinda Africa" },
];
// const inNetherlands = users.find((person) => person.in === "Netherlands");
// console.log("inNetherlands:", inNetherlands);
// find
// const loneliestNumber = arr.find(element => element === 1)
// loneliestNumber => 1
// const sayWhaaaaat =  arr.find(element => element === 10000000)
// sayWhaaaat => null

// findIndex
const indexOfNetherlands = users.findIndex(
  (element) => element.in === "Netherlands"
);

// some
// every

console.clear();
function withoutParams() {}
function withParams(param1, param2) {
  console.log("param1:", param1);
}

withParams(1, 2);

console.clear();

let count = 0;

const plusBtn = document.querySelector(".plus");
const minutBtn = document.querySelector(".minus");
// span
const thatSpan = document.querySelector("div h1 span");
const colorToggleSection = document.querySelector("section");

thatSpan.innerText = count;

minutBtn.addEventListener("click", () => {
  count--;
  thatSpan.innerText = count;
});

plusBtn.onclick = () => {
  count++;
  thatSpan.innerText = count;
};

colorToggleSection.onclick = (event) => {
  event.target.classList.toggle("blue");
};

console.clear();

const objectForExample = {
  name: "John",
  age: 21,
};

// obj.name => 'get me the literal value of name inside the obj'
// obj.age => age propery
// obj.john => look for the literal property called john

// obj["name"] === obj.name
// obj["age"] === obj.age
// const age = "age";
// obj[age] === obj['age'] === obj.age

for (let veryImportantKey in objectForExample) {
  console.log("veryImportantKey:", veryImportantKey);
  objectForExample[veryImportantKey];
}

console.clear();
