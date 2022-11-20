let array = [];

for(let i = 0; i<10; i++) {
    let numb = +prompt('Nhập số');
    array[i] = numb;
}
document.getElementById('arr').innerHTML = array;

let max = array[0];

for(let j = 1; j < 10; j++) {
    if(max < array[j]) max = array[j];
}
document.getElementById('result').innerHTML = `Số lớn nhất là <b>${max}</b>`;
