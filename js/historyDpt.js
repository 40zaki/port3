'use strict';

// function timeset(){
// const now = new Date();
// const year = now.getFullYear();
// const month = now.getMonth();
// const date = now.getDate();
// const hour = now.getHours();
// const min = now.getMinutes();
// const sec = now.getSeconds();

// const output = `${year}年${month +1}月${date}日`;
// const output2 = `${hour}：${String(min).padStart(2,'0')}`;
// const output3 = `${String(sec).padStart(2,'0')}`;
// document.getElementById('date').textContent = output;
// document.getElementById('hour').textContent = output2;
// document.getElementById('sec').textContent = output3;
// refresh();
// }

// function refresh(){
//     setTimeout(timeset,1000);
// }

// timeset();



// 部署　-------------------------------------------------------------------------------------
let dpt = ['総務部','経理部','営業部','生産管理部','技術部','製造部','品質管理部','開発部'];

// リストタグとリンクタグを付けて部署を表示、各部署ページへとぶ
for(let i = 0; i < dpt.length; i++){
    document.getElementById('dpt').insertAdjacentHTML('beforeend',`<a href="history/history${i}.html"><li class="dpts">${dpt[i]}</li></a>`);
}