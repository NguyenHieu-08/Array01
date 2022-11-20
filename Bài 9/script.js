let arrayA = [];
let arrayB = [];
let arrayC = new Array(20);

for (let i = 0; i < 10; i++) {
    arrayA[i]  = +prompt('Nhập số cho mảng A');
}
document.getElementById('arrA').innerHTML = arrayA;

for (let i = 0; i < 10; i++) {
    arrayB[i]  = +prompt('Nhập số cho mảng B');
}
document.getElementById('arrB').innerHTML = arrayB;

arrayC = arrayA.concat(arrayB)

document.getElementById('result').innerHTML = `${arrayC}`;
