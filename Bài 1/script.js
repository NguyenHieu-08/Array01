let array = [];
let count = 0;

for (let i = 0; i < 10; i++) {
    let numb = +prompt('Nhập số');
    array[i] = numb;
}
document.getElementById('arr').innerHTML = array;

for (let j = 0; j < 10; j++) {
    if(array[j] >= 10) {
        count++;
    }
}
    document.getElementById('result').innerHTML = `Có <b>${count}</b> số lớn hơn hoặc bằng 10 `;
