//numbers
let arr = [];
let num1 = 0;
let num2 = "";
let num3 = 0;
let num4 = 0;
let one = document.getElementsByTagName("span");
for (let i = 0; i < one.length; i++) {
  arr.push(one[i].innerHTML);
}
console.log(arr);
function calc(n) {
  if (num1 === 0) {
    num1 = arr[n];
    console.log(num1);
    return num1;
  } else {
    num3 = arr[n];
    console.log(num3);
    return num3;
  }
}
function plus() {
  num2 = `${num1} + `;
  console.log(num2);
  return num2;
}
function minus() {
  num2 = `${num1} - `;
  console.log(num2);
  return num2;
}

function total() {
  if (num2.includes("+")) {
    num4 = parseInt(num1) + parseInt(num3);
    console.log(num4);
    return num4;
  } else {
    num4 = parseInt(num1) - parseInt(num3);
    console.log(num4);
    return num4;
  }
}

function reload() {
  reload = location.reload();
}
