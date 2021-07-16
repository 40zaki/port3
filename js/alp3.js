'use strict';

// 現時刻の時計を表示--------------------------------------------------------------
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



// あいうえお順のリスト　--------------------------------------------------------------------
let alp = ['全員','あ','か','さ','た','な','は','ま','や','ら','わ'];

for(let i = 0; i < alp.length; i++){
    document.getElementById('alp').insertAdjacentHTML('beforeend',`<li id="alp${i}" onclick="clickalp(${i})">${alp[i]}</li>`);
};



// 生産管理部社員データ　--------------------------------------------------------------------
let soumu1 ={
    name: '石野　ようこ',
    num: '0001',
    dpt: '生産管理部',
    pht: 'mem1.png',
    aks: 'あ'
};

let soumu2 ={
    name: '岩崎　ヒロミ',
    num: '0002',
    dpt: '生産管理部',
    pht: 'mem2.png',
    aks: 'あ'
};

let soumu3 = {
    name:'川島　直美',
    num:'0003',
    dpt:'生産管理部',
    pht: 'mem3.png',
    aks:'か'
};

let soumu4 = {
    name: '阪井　涼子',
    num: '0004',
    dpt: '生産管理部',
    pht: 'mem4.png',
    aks: 'さ'
}

let soumu5 = {
    name: '坂上　龍一',
    num: '0005',
    dpt: '生産管理部',
    pht: 'mem5.png',
    aks: 'さ'
}

let soumu6 = {
    name: '新庄　公兵',
    num: '0006',
    dpt: '生産管理部',
    pht: 'mem6.png',
    aks: 'さ'
}

let soumu7 = {
    name: '武内　力',
    num: '0007',
    dpt: '生産管理部',
    pht: 'mem7.png',
    aks: 'た'
}

let soumu8 = {
    name: '速水　祥子',
    num: '0008',
    dpt: '生産管理部',
    pht: 'mem8.png',
    aks: 'は'
}

let soumu9 ={
    name: '萬田　銀二郎',
    num: '0009',
    dpt: '生産管理部',
    pht: 'mem9.png',
    aks: 'ま'
};

let soumu10 = {
    name:'柳沢　真吾',
    num:'0010',
    dpt:'生産管理部',
    pht: 'mem10.png',
    aks:'や'
};

let soumu11 = {
    name: '矢吹　朝子',
    num: '0011',
    dpt: '生産管理部',
    pht: 'mem11.png',
    aks: 'や'
}

let soumu12 = {
    name: '山本　太朗',
    num: '0012',
    dpt: '生産管理部',
    pht: 'mem12.png',
    aks: 'や'
}


// -------------------------------------------------------------------

// 営業部社員データを配列にする
let soumu = [soumu1,soumu2,soumu3,soumu4,soumu5,soumu6,soumu7,soumu8,soumu9,soumu10,soumu11,soumu12];


// 全員は初めから表示、あ～わ行はクリックしたら表示（全員もクリックすると再生成）
let mem = document.getElementById('mem');
for(let i = 0; i < soumu.length; i++){
    mem.insertAdjacentHTML('beforeend',`<li onclick="clickMove(${i})">${soumu[i].name}</li>`);
}

function clickalp(num){
    while(mem.firstChild){
        mem.removeChild(mem.firstChild);
    }

    if(num === 0){
        for(let i = 0; i < soumu.length; i++){
            mem.insertAdjacentHTML('beforeend',`<li onclick="clickMove(${i})">${soumu[i].name}</li>`);
        }        
    } else if(num === 1) {
        for(let i = 0; i < soumu.length; i++){
            if(soumu[i].aks === 'あ'){
            mem.insertAdjacentHTML('beforeend',`<li onclick="clickMove(${i})">${soumu[i].name}</li>`);
    }}} else if(num === 2){
        for(let i = 0; i < soumu.length; i++){
            if(soumu[i].aks === 'か'){
            mem.insertAdjacentHTML('beforeend',`<li onclick="clickMove(${i})">${soumu[i].name}</li>`);
    }}} else if(num === 3){
        for(let i = 0; i < soumu.length; i++){
            if(soumu[i].aks === 'さ'){
            mem.insertAdjacentHTML('beforeend',`<li onclick="clickMove(${i})">${soumu[i].name}</li>`);
    }}} else if(num === 4){
        for(let i = 0; i < soumu.length; i++){
            if(soumu[i].aks === 'た'){
            mem.insertAdjacentHTML('beforeend',`<li onclick="clickMove(${i})">${soumu[i].name}</li>`);
    }}} else if(num === 5){
        for(let i = 0; i < soumu.length; i++){
            if(soumu[i].aks === 'な'){
            mem.insertAdjacentHTML('beforeend',`<li onclick="clickMove(${i})">${soumu[i].name}</li>`);
    }}} else if(num === 6){
        for(let i = 0; i < soumu.length; i++){
            if(soumu[i].aks === 'は'){
            mem.insertAdjacentHTML('beforeend',`<li onclick="clickMove(${i})">${soumu[i].name}</li>`);
    }}} else if(num === 7){
        for(let i = 0; i < soumu.length; i++){
            if(soumu[i].aks === 'ま'){
            mem.insertAdjacentHTML('beforeend',`<li onclick="clickMove(${i})">${soumu[i].name}</li>`);
    }}} else if(num === 8){
        for(let i = 0; i < soumu.length; i++){
            if(soumu[i].aks === 'や'){
            mem.insertAdjacentHTML('beforeend',`<li onclick="clickMove(${i})">${soumu[i].name}</li>`);
    }}} else if(num === 9){
        for(let i = 0; i < soumu.length; i++){
            if(soumu[i].aks === 'ら'){
            mem.insertAdjacentHTML('beforeend',`<li onclick="clickMove(${i})">${soumu[i].name}</li>`);
    }}} else {
        for(let i = 0; i < soumu.length; i++){
            if(soumu[i].aks === 'わ'){
            mem.insertAdjacentHTML('beforeend',`<li onclick="clickMove(${i})">${soumu[i].name}</li>`);
    }}}
    
}



// 書き換え場所の名前と写真--------------------------------------------------------------------------
function kakikae(num){
    document.getElementById('syainName').textContent = `${soumu[num].name}　さん　`;
    let photo = document.getElementById('photo');
    photo.src = `member3/${soumu[num].pht}`;
    }
    

// 社員名を押したら書き換え --------------------------------------------------------------------------
function clickMove(num){
    document.getElementById('movePage').innerHTML = 
    `<img id="photo" src="" alt="社員の写真"><article id="syainName"></article><article id="kakikae"><button id="go" onclick="clickGo();clickTime(${num})">出勤</button><button id="leave" onclick="clickLeave();clickTime2(${num})">退勤</button></article>`;
    kakikae(num);
}


// 出勤を押したら「おはようございます」表示、色が変わる-----------共通----------------
function clickGo(){
    document.getElementById('kakikae').innerHTML = "　おはようございます！";
    goTimer();
    document.getElementById('wrapA').style.backgroundColor = "skyblue";
    
}

// 出勤を押したらその瞬間の時刻を取得、ローカルストレージに保存
function clickTime(num){
    let clickNow = new Date();
    const clickYear = clickNow.getFullYear();
    const clickMonth = clickNow.getMonth();
    const clickDate = clickNow.getDate();
    const clickHour = clickNow.getHours();
    const clickMin = clickNow.getMinutes();

    // 出勤した年月日と時間
    const clickOutput = `${clickYear}年${clickMonth +1}月${clickDate}日`;
    const clickOutput2 = `${clickHour}：${String(clickMin).padStart(2,'0')}`;

    // clickOutput3 に社員名と出勤日時を代入
    let clickOutput3 = soumu[num].name + '　さん　' + clickOutput + clickOutput2 + '　出勤';

    // key を出勤日時 + 社員名に設定
    let key = clickOutput + soumu[num].name;
    localStorage.setItem(key, clickOutput3);

    // hiduke に社員の出勤日時を保存して #history に表示
    let hiduke = localStorage.getItem(key);
    document.getElementById('history').textContent = hiduke;
}    



// 退勤を押したら「おつかれさまでした」表示、色が変わる-----------共通---------------- 
 function clickLeave(){
        document.getElementById('kakikae').innerHTML = "　おつかれさまでした！";
        goTimer();
        document.getElementById('wrapA').style.backgroundColor = "#ff7f73";
        }

// 退勤を押したらその瞬間の時刻を取得、ローカルストレージに保存
function clickTime2(num){
    let clickNow = new Date();
    const clickYear = clickNow.getFullYear();
    const clickMonth = clickNow.getMonth();
    const clickDate = clickNow.getDate();
    const clickHour = clickNow.getHours();
    const clickMin = clickNow.getMinutes();

    // 退勤した年月日と時間
    const clickOutput = `${clickYear}年${clickMonth +1}月${clickDate}日`;
    const clickOutput2 = `${clickHour}：${String(clickMin).padStart(2,'0')}`;

    // clickOutput3 に社員名と退勤日時を代入
    let clickOutput3 = soumu[num].name + '　さん　' + clickOutput + clickOutput2 + '　退勤';

    // key を退勤日時 + 社員名に設定
    let KEY = '退' + clickOutput + soumu[num].name;
    localStorage.setItem(KEY, clickOutput3);

    // hiduke に社員の退勤日時を保存して #history に表示
    let hiduke = localStorage.getItem(KEY);
    document.getElementById('history').textContent = hiduke;
    
}    

// --------------------------------------------------------------------------------------
// TOPページに戻る
let goCount = 0;
function goTop(){
    window.location = "../index.html"
}

// 2秒経ったらGOTOP呼び出す
function goTimer(){
    setTimeout(goTop,2500);
}
