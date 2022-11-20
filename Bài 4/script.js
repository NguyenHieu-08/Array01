let arr = []

for(let i = 0; i < 6; i++) {
    arr[i] = +prompt('Nhập số');
}
document.getElementById('arr').innerHTML = `Mảng ban đầu: ${arr}`;

for(let j = 0; j < arr.length/2; j++) {
    let temp = arr[j];
    arr[j] = arr[arr.length - j -1];
    arr[arr.length - j -1] = temp;
}
document.getElementById('result').innerHTML = `Mảng lúc sau: ${arr}`;