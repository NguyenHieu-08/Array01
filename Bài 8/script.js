let array = [];

for (let i = 0; i < 10; i++) {
    let numb = +prompt('Nhập số');
    array[i] = numb;
}
document.getElementById('arr').innerHTML = array;

array.sort(function (a,b) {
    return b-a
});

document.getElementById('result').innerHTML = `${array}`;
