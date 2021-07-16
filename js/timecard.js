'use strict';

function timeset(){
const now = new Date();
const year = now.getFullYear();
const month = now.getMonth();
const date = now.getDate();
const hour = now.getHours();
const min = now.getMinutes();
const sec = now.getSeconds();

const output = `${year}年${month +1}月${date}日`;
const output2 = `${hour}：${String(min).padStart(2,'0')}`;
const output3 = `${String(sec).padStart(2,'0')}`;
document.getElementById('date').textContent = output;
document.getElementById('hour').textContent = output2;
document.getElementById('sec').textContent = output3;
refresh();
}

function refresh(){
    setTimeout(timeset,1000);
}

timeset();



