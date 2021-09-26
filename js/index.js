// ? today
function dayOfWeek() {
  let today = new Date();
  let day = today.getDay();
  let daylist = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday ",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  console.log("Today is : " + daylist[day] + ".");
  let hour = today.getHours();
  let minute = today.getMinutes();
  let second = today.getSeconds();
  let prepand = " PM ";
  console.log(
    "Current Time : " + hour + prepand + " : " + minute + " : " + second
  );
}
dayOfWeek();

// ? Reverse

function reverseNumber(n) {
	n = n + "";
	return n.split("").reverse().join("");
}
console.log(Number(reverseNumber(213456)));

// ? Factorial

// document.querySelector('button').onclick = myClick

// function myClick() {
// 	const input = document.querySelector('.input').value
// 	console.log(input)
// }

function factorial(n) {
  if (n === 0) {
    return 1;
  }
  return n * factorial(n - 1);
}
console.log(factorial(5));

// ? More Less

function moreLess(num1,num2) {
  if (num1 > num2) {
    return (
      "Большее из этих чисел " + num1 + " и " + num2 + ", будет " + num1 + "."
    );
  } else if (num1 < num2) {
    return (
      "Большее из этих чисел " + num1 + " и " + num2 + ", будет " + num2 + "."
    );
  } else {
    return "Числа " + num1 + " и " + num2 + " равны.";
  }
}
console.log(moreLess(31,30));

// ? converting

function convertingToString (arr) {
     console.log(arr.toString(''));
	  console.log(arr.join(' + '));
}
convertingToString(arr=["Red", "Green", "White", "Black"])

// ? Get month

function monthName(n) {
  monthArr = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  return monthArr[n.getMonth()];
};
console.log(monthName(new Date("09/26/2021")));
console.log(monthName(new Date("11/13/2014")));

// ? check Uppercase

function upper_case(str) {
  check = /^[A-Z]/;
  if (check.test(str)) {
    console.log("Первый символ строки, в верхнем регистре");
  } else {
    console.log("Первый символ строки, не в верхнем регистре");
  }
}
upper_case("Abcd");
upper_case("abcd");

// ? draw smile

const string1 = document.getElementById('string-1')
const string2 = document.getElementById('string-2')
const string3 = document.getElementById('string-3')
const string4 = document.getElementById('string-4')
const string5 = document.getElementById('string-5')
const string6 = document.getElementById('string-6')
console.log(string3)
console.log(string5)
console.log(string2)
console.log(string6)
console.log(string4)
console.log(string1)

const elements = document.querySelectorAll(".element");
const elementClass = elements[0].className;

elements[0].classList.add("red");
elements[1].classList.add("red");
elements[2].classList.add("red");
elements[3].classList.add("green");
elements[4].classList.add("green");
elements[5].classList.add("green");



const todo = document.getElementById("todo-list");
let tasks = [
  "Buy lemonade",
  "Make toasts",
  "Repair car",
  "Play games",
  "Pet a cat",
];

todo.innerHTML = `
<li class="task">${tasks[0]}</li>
<li class="task">${tasks[1]}</li>
<li class="task">${tasks[2]}</li>
<li class="task">${tasks[3]}</li>
<li class="task">${tasks[4]}</li>
`;

// for (let i = 0; i < tasks.length; i++) {
//   let a = tasks[i];
//   console.log(a)
//   todo.innerHTML = `
//   <li class="task">${a}</li>
//   `;
// }



const paragraf = document.querySelectorAll('p')
for (const item of paragraf) {
	const newElement = document.createElement('div')
	newElement.innerHTML = `<hr class="hr">`;
	item.after(newElement);
}



const item = document.querySelectorAll('.item');
for (const i of item) {
	console.log(i)
}

