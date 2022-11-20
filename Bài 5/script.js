let str = document.getElementById('str');
let nguyenAm = 'ueoai'
let count = 0;

function checkNguyenAm() {
    str = str.value;
    for(let i = 0; i < str.length; i++) {
        if(nguyenAm.indexOf(str[i]) != -1) count++;
    }
    
    document.getElementById('result').innerHTML = `Có ${count} nguyên âm trong chuỗi`;
}
