let arr = [];

for(let i = 0; i < 10; i++) {
    arr[i] = +prompt('Nhập số: ');
}
document.getElementById('arr').innerHTML = arr;

numberV = +prompt('Nhập số V: ');
document.getElementById('numberV').innerHTML = numberV;

if(arr.indexOf(numberV) != -1) {
    document.getElementById('result').innerHTML = "V is in the array";
} else document.getElementById('result').innerHTML = "V is not in the array";
