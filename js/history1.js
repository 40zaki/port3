'use strict';

// 経理部社員データ　--------------------------------------------------------------------
let soumu1 ={
    name: '伊東　海',
    num: '0001',
    dpt: '経理部',
    pht: 'mem1.png',
    aks: 'あ'
};

let soumu2 ={
    name: '神山　たか志',
    num: '0002',
    dpt: '経理部',
    pht: 'mem2.png',
    aks: 'か'
};

let soumu3 = {
    name:'豪　ヒロミ',
    num:'0003',
    dpt:'経理部',
    pht: 'mem3.png',
    aks:'か'
};

let soumu4 = {
    name: '瀬戸内　寂ソン',
    num: '0004',
    dpt: '経理部',
    pht: 'mem4.png',
    aks: 'さ'
}

let soumu5 = {
    name: '竹ノ内　豊',
    num: '0005',
    dpt: '経理部',
    pht: 'mem5.png',
    aks: 'た'
}
let soumu6 = {
    name: '中尾　明',
    num: '0006',
    dpt: '経理部',
    pht: 'mem6.png',
    aks: 'な'
}

let soumu7 ={
    name: '林田　慎じ郎',
    num: '0007',
    dpt: '経理部',
    pht: 'mem7.png',
    aks: 'は'
};

let soumu8 ={
    name: 'フレディ',
    num: '0008',
    dpt: '経理部',
    pht: 'mem8.png',
    aks: 'は'
};

let soumu9 = {
    name:'メカ沢　新いち',
    num:'0009',
    dpt:'経理部',
    pht: 'mem9.png',
    aks:'ま'
};

let soumu10 = {
    name: '山口　のぼる',
    num: '0010',
    dpt: '経理部',
    pht: 'mem10.png',
    aks: 'や'
}

let soumu11 = {
    name: 'ライザー',
    num: '0011',
    dpt: '経理部',
    pht: 'mem11.png',
    aks: 'ら'
}


// 社員データを配列にする
let soumu = [soumu1,soumu2,soumu3,soumu4,soumu5,soumu6,soumu7,soumu8,soumu9,soumu10,soumu11];

// -----------------------------------------------------------------------------------------


// 今日の年月日を取得
let clickNow = new Date();
    const clickYear = clickNow.getFullYear();
    const clickMonth = clickNow.getMonth();
    const clickDate = clickNow.getDate();
    // const clickHour = clickNow.getHours();
    // const clickMin = clickNow.getMinutes();
    
    // 今日～２日前までの年月日
    const clickOutput0 = `${clickYear}年${clickMonth +1}月${clickDate}日`;
    const clickOutput1 = `${clickYear}年${clickMonth +1}月${clickDate - 1}日`;
    const clickOutput2 = `${clickYear}年${clickMonth +1}月${clickDate - 2}日`;


// 日付と名前をkeyにする（過去3日分）【出勤】-----------------------------------
// 今日
let key0 = clickOutput0 + soumu[0].name; 
let key1 = clickOutput0 + soumu[1].name;
let key2 = clickOutput0 + soumu[2].name;
let key3 = clickOutput0 + soumu[3].name;
let key4 = clickOutput0 + soumu[4].name;
let key5 = clickOutput0 + soumu[5].name;
let key6 = clickOutput0 + soumu[6].name;
let key7 = clickOutput0 + soumu[7].name;
let key8 = clickOutput0 + soumu[8].name;
let key9 = clickOutput0 + soumu[9].name;
let key10 = clickOutput0 + soumu[10].name;
// 昨日
let key0_1 = clickOutput1 + soumu[0].name; 
let key1_1 = clickOutput1 + soumu[1].name;
let key2_1 = clickOutput1 + soumu[2].name;
let key3_1 = clickOutput1 + soumu[3].name;
let key4_1 = clickOutput1 + soumu[4].name;
let key5_1 = clickOutput1 + soumu[5].name;
let key6_1 = clickOutput1 + soumu[6].name;
let key7_1 = clickOutput1 + soumu[7].name;
let key8_1 = clickOutput1 + soumu[8].name;
let key9_1 = clickOutput1 + soumu[9].name;
let key10_1 = clickOutput1 + soumu[10].name;
// 一昨日
let key0_2 = clickOutput2 + soumu[0].name; 
let key1_2 = clickOutput2 + soumu[1].name;
let key2_2 = clickOutput2 + soumu[2].name;
let key3_2 = clickOutput2 + soumu[3].name;
let key4_2 = clickOutput2 + soumu[4].name;
let key5_2 = clickOutput2 + soumu[5].name;
let key6_2 = clickOutput2 + soumu[6].name;
let key7_2 = clickOutput2 + soumu[7].name;
let key8_2 = clickOutput2 + soumu[8].name;
let key9_2 = clickOutput2 + soumu[9].name;
let key10_2 = clickOutput2 + soumu[10].name;

// 日付と名前をkeyにする（過去3日分）【退勤】----------------------------
// 今日
let KEY0 = '退' + clickOutput0 + soumu[0].name; 
let KEY1 = '退' + clickOutput0 + soumu[1].name;
let KEY2 = '退' + clickOutput0 + soumu[2].name;
let KEY3 = '退' + clickOutput0 + soumu[3].name;
let KEY4 = '退' + clickOutput0 + soumu[4].name;
let KEY5 = '退' + clickOutput0 + soumu[5].name;
let KEY6 = '退' + clickOutput0 + soumu[6].name;
let KEY7 = '退' + clickOutput0 + soumu[7].name;
let KEY8 = '退' + clickOutput0 + soumu[8].name;
let KEY9 = '退' + clickOutput0 + soumu[9].name;
let KEY10 = '退' + clickOutput0 + soumu[10].name;

// 昨日
let KEY0_1 = '退' + clickOutput1 + soumu[0].name; 
let KEY1_1 = '退' + clickOutput1 + soumu[1].name;
let KEY2_1 = '退' + clickOutput1 + soumu[2].name;
let KEY3_1 = '退' + clickOutput1 + soumu[3].name;
let KEY4_1 = '退' + clickOutput1 + soumu[4].name;
let KEY5_1 = '退' + clickOutput1 + soumu[5].name;
let KEY6_1 = '退' + clickOutput1 + soumu[6].name;
let KEY7_1 = '退' + clickOutput1 + soumu[7].name;
let KEY8_1 = '退' + clickOutput1 + soumu[8].name;
let KEY9_1 = '退' + clickOutput1 + soumu[9].name;
let KEY10_1 = '退' + clickOutput1 + soumu[10].name;

// 一昨日
let KEY0_2 = '退' + clickOutput2 + soumu[0].name; 
let KEY1_2 = '退' + clickOutput2 + soumu[1].name;
let KEY2_2 = '退' + clickOutput2 + soumu[2].name;
let KEY3_2 = '退' + clickOutput2 + soumu[3].name;
let KEY4_2 = '退' + clickOutput2 + soumu[4].name;
let KEY5_2 = '退' + clickOutput2 + soumu[5].name;
let KEY6_2 = '退' + clickOutput2 + soumu[6].name;
let KEY7_2 = '退' + clickOutput2 + soumu[7].name;
let KEY8_2 = '退' + clickOutput2 + soumu[8].name;
let KEY9_2 = '退' + clickOutput2 + soumu[9].name;
let KEY10_2 = '退' + clickOutput2 + soumu[10].name;


// 出勤履歴がnullじゃないときに履歴を表示させる----------------------------------
let his = document.getElementById('historyList');//共通

// 今日
let result0 = '<p>' + localStorage.getItem(key0) + '</p>';
if(localStorage.getItem(key0) !== null){
    his.insertAdjacentHTML('beforeend',result0);
}

let result1 = '<p>' + localStorage.getItem(key1) + '</p>';
if(localStorage.getItem(key1) !== null){
    his.insertAdjacentHTML('beforeend',result1);
}

let result2 = '<p>' + localStorage.getItem(key2) + '</p>';
if(localStorage.getItem(key2) !== null){
    his.insertAdjacentHTML('beforeend',result2);
}

let result3 = '<p>' + localStorage.getItem(key3) + '</p>';
if(localStorage.getItem(key3) !== null){
    his.insertAdjacentHTML('beforeend',result3);
}

let result4 = '<p>' + localStorage.getItem(key4) + '</p>';
if(localStorage.getItem(key4) !== null){
    his.insertAdjacentHTML('beforeend',result4);
}

let result5 = '<p>' + localStorage.getItem(key5) + '</p>';
if(localStorage.getItem(key5) !== null){
    his.insertAdjacentHTML('beforeend',result5);
}

let result6 = '<p>' + localStorage.getItem(key6) + '</p>';
if(localStorage.getItem(key6) !== null){
    his.insertAdjacentHTML('beforeend',result6);
}

let result7 = '<p>' + localStorage.getItem(key7) + '</p>';
if(localStorage.getItem(key7) !== null){
    his.insertAdjacentHTML('beforeend',result7);
}

let result8 = '<p>' + localStorage.getItem(key8) + '</p>';
if(localStorage.getItem(key8) !== null){
    his.insertAdjacentHTML('beforeend',result8);
}

let result9 = '<p>' + localStorage.getItem(key9) + '</p>';
if(localStorage.getItem(key9) !== null){
    his.insertAdjacentHTML('beforeend',result9);
}

let result10 = '<p>' + localStorage.getItem(key10) + '</p>';
if(localStorage.getItem(key10) !== null){
    his.insertAdjacentHTML('beforeend',result10);
}

// 昨日
let result0_1 = '<p>' + localStorage.getItem(key0_1) + '</p>';
if(localStorage.getItem(key0_1) !== null){
    his.insertAdjacentHTML('beforeend',result0_1);
}

let result1_1 = '<p>' + localStorage.getItem(key1_1) + '</p>';
if(localStorage.getItem(key1_1) !== null){
    his.insertAdjacentHTML('beforeend',result1_1);
}

let result2_1 = '<p>' + localStorage.getItem(key2_1) + '</p>';
if(localStorage.getItem(key2_1) !== null){
    his.insertAdjacentHTML('beforeend',result2_1);
}

let result3_1 = '<p>' + localStorage.getItem(key3_1) + '</p>';
if(localStorage.getItem(key3_1) !== null){
    his.insertAdjacentHTML('beforeend',result3_1);
}

let result4_1 = '<p>' + localStorage.getItem(key4_1) + '</p>';
if(localStorage.getItem(key4_1) !== null){
    his.insertAdjacentHTML('beforeend',result4_1);
}

let result5_1 = '<p>' + localStorage.getItem(key5_1) + '</p>';
if(localStorage.getItem(key5_1) !== null){
    his.insertAdjacentHTML('beforeend',result5_1);
}

let result6_1 = '<p>' + localStorage.getItem(key6_1) + '</p>';
if(localStorage.getItem(key6_1) !== null){
    his.insertAdjacentHTML('beforeend',result6_1);
}

let result7_1 = '<p>' + localStorage.getItem(key7_1) + '</p>';
if(localStorage.getItem(key7_1) !== null){
    his.insertAdjacentHTML('beforeend',result7_1);
}

let result8_1 = '<p>' + localStorage.getItem(key8_1) + '</p>';
if(localStorage.getItem(key8_1) !== null){
    his.insertAdjacentHTML('beforeend',result8_1);
}

let result9_1 = '<p>' + localStorage.getItem(key9_1) + '</p>';
if(localStorage.getItem(key9_1) !== null){
    his.insertAdjacentHTML('beforeend',result9_1);
}

let result10_1 = '<p>' + localStorage.getItem(key10_1) + '</p>';
if(localStorage.getItem(key10_1) !== null){
    his.insertAdjacentHTML('beforeend',result10_1);
}

// 一昨日
let result0_2 = '<p>' + localStorage.getItem(key0_2) + '</p>';
if(localStorage.getItem(key0_2) !== null){
    his.insertAdjacentHTML('beforeend',result0_2);
}

let result1_2 = '<p>' + localStorage.getItem(key1_2) + '</p>';
if(localStorage.getItem(key1_2) !== null){
    his.insertAdjacentHTML('beforeend',result1_2);
}

let result2_2 = '<p>' + localStorage.getItem(key2_2) + '</p>';
if(localStorage.getItem(key2_2) !== null){
    his.insertAdjacentHTML('beforeend',result2_2);
}

let result3_2 = '<p>' + localStorage.getItem(key3_2) + '</p>';
if(localStorage.getItem(key3_2) !== null){
    his.insertAdjacentHTML('beforeend',result3_2);
}

let result4_2 = '<p>' + localStorage.getItem(key4_2) + '</p>';
if(localStorage.getItem(key4_2) !== null){
    his.insertAdjacentHTML('beforeend',result4_2);
}

let result5_2 = '<p>' + localStorage.getItem(key5_2) + '</p>';
if(localStorage.getItem(key5_2) !== null){
    his.insertAdjacentHTML('beforeend',result5_2);
}

let result6_2 = '<p>' + localStorage.getItem(key6_2) + '</p>';
if(localStorage.getItem(key6_2) !== null){
    his.insertAdjacentHTML('beforeend',result6_2);
}

let result7_2 = '<p>' + localStorage.getItem(key7_2) + '</p>';
if(localStorage.getItem(key7_2) !== null){
    his.insertAdjacentHTML('beforeend',result7_2);
}

let result8_2 = '<p>' + localStorage.getItem(key8_2) + '</p>';
if(localStorage.getItem(key8_2) !== null){
    his.insertAdjacentHTML('beforeend',result8_2);
}

let result9_2 = '<p>' + localStorage.getItem(key9_2) + '</p>';
if(localStorage.getItem(key9_2) !== null){
    his.insertAdjacentHTML('beforeend',result9_2);
}

let result10_2 = '<p>' + localStorage.getItem(key10_2) + '</p>';
if(localStorage.getItem(key10_2) !== null){
    his.insertAdjacentHTML('beforeend',result10_2);
}

// 【退勤】----------------------------------------------------------------
// 今日
let RESULT0 = '<p>' + localStorage.getItem(KEY0) + '</p>';
if(localStorage.getItem(KEY0) !== null){
    his.insertAdjacentHTML('beforeend',RESULT0);
}

let RESULT1 = '<p>' + localStorage.getItem(KEY1) + '</p>';
if(localStorage.getItem(KEY1) !== null){
    his.insertAdjacentHTML('beforeend',RESULT1);
}

let RESULT2 = '<p>' + localStorage.getItem(KEY2) + '</p>';
if(localStorage.getItem(KEY2) !== null){
    his.insertAdjacentHTML('beforeend',RESULT2);
}

let RESULT3 = '<p>' + localStorage.getItem(KEY3) + '</p>';
if(localStorage.getItem(KEY3) !== null){
    his.insertAdjacentHTML('beforeend',RESULT3);
}

let RESULT4 = '<p>' + localStorage.getItem(KEY4) + '</p>';
if(localStorage.getItem(KEY4) !== null){
    his.insertAdjacentHTML('beforeend',RESULT4);
}

let RESULT5 = '<p>' + localStorage.getItem(KEY5) + '</p>';
if(localStorage.getItem(KEY5) !== null){
    his.insertAdjacentHTML('beforeend',RESULT5);
}

let RESULT6 = '<p>' + localStorage.getItem(KEY6) + '</p>';
if(localStorage.getItem(KEY6) !== null){
    his.insertAdjacentHTML('beforeend',RESULT6);
}

let RESULT7 = '<p>' + localStorage.getItem(KEY7) + '</p>';
if(localStorage.getItem(KEY7) !== null){
    his.insertAdjacentHTML('beforeend',RESULT7);
}

let RESULT8 = '<p>' + localStorage.getItem(KEY8) + '</p>';
if(localStorage.getItem(KEY8) !== null){
    his.insertAdjacentHTML('beforeend',RESULT8);
}

let RESULT9 = '<p>' + localStorage.getItem(KEY9) + '</p>';
if(localStorage.getItem(KEY9) !== null){
    his.insertAdjacentHTML('beforeend',RESULT9);
}

let RESULT10 = '<p>' + localStorage.getItem(KEY10) + '</p>';
if(localStorage.getItem(KEY10) !== null){
    his.insertAdjacentHTML('beforeend',RESULT10);
}

// 昨日
let RESULT0_1 = '<p>' + localStorage.getItem(KEY0_1) + '</p>';
if(localStorage.getItem(KEY0_1) !== null){
    his.insertAdjacentHTML('beforeend',RESULT0_1);
}

let RESULT1_1 = '<p>' + localStorage.getItem(KEY1_1) + '</p>';
if(localStorage.getItem(KEY1_1) !== null){
    his.insertAdjacentHTML('beforeend',RESULT1_1);
}

let RESULT2_1 = '<p>' + localStorage.getItem(KEY2_1) + '</p>';
if(localStorage.getItem(KEY2_1) !== null){
    his.insertAdjacentHTML('beforeend',RESULT2_1);
}

let RESULT3_1 = '<p>' + localStorage.getItem(KEY3_1) + '</p>';
if(localStorage.getItem(KEY3_1) !== null){
    his.insertAdjacentHTML('beforeend',RESULT3_1);
}

let RESULT4_1 = '<p>' + localStorage.getItem(KEY4_1) + '</p>';
if(localStorage.getItem(KEY4_1) !== null){
    his.insertAdjacentHTML('beforeend',RESULT4_1);
}

let RESULT5_1 = '<p>' + localStorage.getItem(KEY5_1) + '</p>';
if(localStorage.getItem(KEY5_1) !== null){
    his.insertAdjacentHTML('beforeend',RESULT5_1);
}

let RESULT6_1 = '<p>' + localStorage.getItem(KEY6_1) + '</p>';
if(localStorage.getItem(KEY6_1) !== null){
    his.insertAdjacentHTML('beforeend',RESULT6_1);
}

let RESULT7_1 = '<p>' + localStorage.getItem(KEY7_1) + '</p>';
if(localStorage.getItem(KEY7_1) !== null){
    his.insertAdjacentHTML('beforeend',RESULT7_1);
}

let RESULT8_1 = '<p>' + localStorage.getItem(KEY8_1) + '</p>';
if(localStorage.getItem(KEY8_1) !== null){
    his.insertAdjacentHTML('beforeend',RESULT8_1);
}

let RESULT9_1 = '<p>' + localStorage.getItem(KEY9_1) + '</p>';
if(localStorage.getItem(KEY9_1) !== null){
    his.insertAdjacentHTML('beforeend',RESULT9_1);
}

let RESULT10_1 = '<p>' + localStorage.getItem(KEY10_1) + '</p>';
if(localStorage.getItem(KEY10_1) !== null){
    his.insertAdjacentHTML('beforeend',RESULT10_1);
}

// 一昨日
let RESULT0_2 = '<p>' + localStorage.getItem(KEY0_2) + '</p>';
if(localStorage.getItem(KEY0_2) !== null){
    his.insertAdjacentHTML('beforeend',RESULT0_2);
}

let RESULT1_2 = '<p>' + localStorage.getItem(KEY1_2) + '</p>';
if(localStorage.getItem(KEY1_2) !== null){
    his.insertAdjacentHTML('beforeend',RESULT1_2);
}

let RESULT2_2 = '<p>' + localStorage.getItem(KEY2_2) + '</p>';
if(localStorage.getItem(KEY2_2) !== null){
    his.insertAdjacentHTML('beforeend',RESULT2_2);
}

let RESULT3_2 = '<p>' + localStorage.getItem(KEY3_2) + '</p>';
if(localStorage.getItem(KEY3_2) !== null){
    his.insertAdjacentHTML('beforeend',RESULT3_2);
}

let RESULT4_2 = '<p>' + localStorage.getItem(KEY4_2) + '</p>';
if(localStorage.getItem(KEY4_2) !== null){
    his.insertAdjacentHTML('beforeend',RESULT4_2);
}

let RESULT5_2 = '<p>' + localStorage.getItem(KEY5_2) + '</p>';
if(localStorage.getItem(KEY5_2) !== null){
    his.insertAdjacentHTML('beforeend',RESULT5_2);
}

let RESULT6_2 = '<p>' + localStorage.getItem(KEY6_2) + '</p>';
if(localStorage.getItem(KEY6_2) !== null){
    his.insertAdjacentHTML('beforeend',RESULT6_2);
}

let RESULT7_2 = '<p>' + localStorage.getItem(KEY7_2) + '</p>';
if(localStorage.getItem(KEY7_2) !== null){
    his.insertAdjacentHTML('beforeend',RESULT7_2);
}

let RESULT8_2 = '<p>' + localStorage.getItem(KEY8_2) + '</p>';
if(localStorage.getItem(KEY8_2) !== null){
    his.insertAdjacentHTML('beforeend',RESULT8_2);
}

let RESULT9_2 = '<p>' + localStorage.getItem(KEY9_2) + '</p>';
if(localStorage.getItem(KEY9_2) !== null){
    his.insertAdjacentHTML('beforeend',RESULT9_2);
}

let RESULT10_2 = '<p>' + localStorage.getItem(KEY10_2) + '</p>';
if(localStorage.getItem(KEY10_2) !== null){
    his.insertAdjacentHTML('beforeend',RESULT10_2);
}

// ----------------------------------------------------------------------

// 履歴をすべて削除と同時にページを更新する
function clickClear(){
    localStorage.clear();
    window.location = "history1.html";
}

