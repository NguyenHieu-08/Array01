let arr = [1,2,4,5,8,10,25,40];
let max = arr[0];
let sum = 0;

document.getElementById('arr').innerHTML = arr;

for(let i = 1; i < arr.length; i++) {
    if(max < arr[i]) max = arr[i];
}

for(let j = 0; j < arr.length; j++) {
    sum += arr[j];
}
let average = sum / arr.length;

document.getElementById('result').innerHTML = `Số lớn nhất là ${max}. Giá trị trung bình là ${average}`;