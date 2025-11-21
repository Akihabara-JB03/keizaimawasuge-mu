var hurousyotoku_youtuber;
var subscriber_wakusei_syuukai;
var hurousyotoku_syuukai;
function toJP(num) {
    const units = ["", "万", "億", "兆", "京","垓","𥝱","穣","溝","澗","正","載","極","恒河沙","阿僧祇","那由他","不可思議","無量大数"];
    let unitIndex = 0;

    while (num >= 10000 && unitIndex < units.length - 1) {
        num /= 10000;
        unitIndex++;
    }

    return num.toLocaleString() + units[unitIndex];
}

var keizai_point = 0;
function keizai() {
    keizai_point++;
    document.getElementById("counter").textContent = "お金："+toJP(keizai_point) + "$";
    
}

var nedann = 10
var 購入数 = 0
var 不労所得の値段 = 1
function kounyuu() {
    if (keizai_point >= nedann) {
    keizai_point -= nedann
    nedann = nedann * 3;
    購入数 += 1;
    不労所得の値段 *= 2;
    document.getElementById("counter").textContent =  "お金："+ toJP(keizai_point) + "$";
    document.getElementById("nedann").textContent = toJP(nedann) +"$で購入"
    }
    else {
        alert("購入できません！")
    }

}

function hurousyotoku() {
    if(購入数 >= 1) {
        keizai_point += 不労所得の値段;
        document.getElementById("counter").textContent ="お金："+ toJP(keizai_point) + "$";
    }
}

hurousyotoku_syuukai = setInterval(hurousyotoku,1000);
var 購入数_subscriber = 0;
var nedann_subscribe = 100
var subscr = 0
var subscriber_amount = 0
function subscriber() {
    if (購入数_subscriber >= 1) {
        subscr += subscriber_amount
        document.getElementById("subscriber").textContent = "登録者・賛同者：" + subscr + "名"
        不労所得の値段 *= 1.25;
    }
}
function subscriber_kounyuu() {
        if (keizai_point >= nedann_subscribe) {
    keizai_point -= nedann_subscribe
    nedann_subscribe *= 2;
    購入数_subscriber += 1;
    subscriber_amount += 10

    document.getElementById("counter").textContent = "お金：" + toJP(keizai_point) + "$";
    document.getElementById("nedann_subscribe").textContent = toJP(nedann_subscribe) +"$で購入"
    }
    else {
        alert("購入できません！")
    }
}

hurousyotoku_youtuber = setInterval(subscriber,1000)
var 購入数_utyuu = 0;
var nedann_utyuu = 1500000000000000;
function utyuu_kaihatu() {
            if (keizai_point >= nedann_utyuu) {
    keizai_point -= nedann_utyuu
    nedann_utyuu *= 3
    不労所得の値段 *= 500;
    document.getElementById("counter").textContent = "お金：" + toJP(keizai_point) + "$";
    document.getElementById("utyuu_kaihatu_nedann").textContent = toJP(nedann_utyuu) +"$で購入"
    }
    else {
        alert("購入できません！")
    }   

}
function keizai_kakunin() {
    console.log(toJP(keizai_point)+"$の資産を持っています。")
    console.log(toJP(subscr)+"名の登録・称賛者が待っています。")
}
setInterval(keizai_kakunin,5000)
var nedann_wakusei =3141592653589793238
var 購入数_wakusei = 0
function wakusei() {
    if (keizai_point >= nedann_wakusei) {
        keizai_point -= nedann_wakusei
        nedann_wakusei *= 2
        購入数_wakusei += 1;
        document.getElementById("counter").textContent = "お金：" + toJP(keizai_point) + "$";
        document.getElementById("wakusei").textContent = toJP(nedann_wakusei) +"$で購入"

    }
    else {
        alert("購入できません！")
    } 
}
function subscriber_wakusei() {
    if (購入数_wakusei >= 1) {
        subscr += subscriber_amount
        document.getElementById("subscriber").textContent = "登録者・賛同者：" + subscr + "名"
                不労所得の値段 *= 200;
                subscr += 5000;
    }
}
subscriber_wakusei_syuukai = setInterval(subscriber_wakusei,1000);
var nedann_reset = 1000000000000000000000
var reset_kaisu = 0;
function reset() {
    
    if (keizai_point >= nedann_reset) {
    reset_kaisu++;
    nedann_wakusei = 3141592653589793238
    購入数_wakusei = 0
    nedann_utyuu = 1500000000000000;   
    購入数_utyuu = 0; 
    不労所得の値段 = 1; // 基本値に戻す
    不労所得の値段 *= 1 + reset_kaisu * 0.1; // リセットボーナスを倍率として加える

    subscriber_amount = 0;
    subscr = 0;
    nedann_subscribe = 100;
    購入数 = 0;
    nedann = 10;
    keizai_point = 0;
    clearInterval(subscriber_wakusei_syuukai)
    clearInterval(hurousyotoku_youtuber)
    clearInterval(hurousyotoku_syuukai)
    document.getElementById("reset").textContent = "リセット回数：" + reset_kaisu + "回";

    document.getElementById("counter").textContent = "お金：" + toJP(keizai_point) + "$";
    document.getElementById("subscriber").textContent = "登録者・賛同者：" + toJP(subscr) + "名"; 
    document.getElementById("nedann").textContent = toJP(nedann) + "$で購入";
    document.getElementById("nedann_subscribe").textContent = toJP(nedann_subscribe) + "$で購入";
    document.getElementById("utyuu_kaihatu_nedann").textContent = toJP(nedann_utyuu) + "$で購入";
    document.getElementById("wakusei").textContent = toJP(nedann_wakusei) + "$で購入";

    hurousyotoku_syuukai = setInterval(hurousyotoku, 1000);
    hurousyotoku_youtuber = setInterval(subscriber, 1000);
    subscriber_wakusei_syuukai = setInterval(subscriber_wakusei, 1000);

    } else {
        alert("購入できません！")
    }
}
