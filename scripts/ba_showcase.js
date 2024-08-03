function preloadAllAsync(src) {
    return new Promise((resolve, reject) => {
        let img = new Image();
        img.onload = function () {
            resolve(img);
        }
        img.onerror = function () {
            reject(src);
        }
        img.src = src;
    });
}

async function preload(idx) {
    for (let i = 0; i < students[idx].img; i++) {
        await preloadAllAsync(`https://img.justpureh2o.cn/image/${students[idx].name}/${students[idx].name}${i}.png`).then(img => {
            arr.push(img.src);
        })
    }
}

const parent = document.getElementById("l_body");
const date = new Date();
const param = new URLSearchParams(window.location.search);
const students = [
    {name: "mika", img: 8, init: "Sensei，还请多多关照啦☆☆☆", startup: 5, sentences: [{id: 0, prompt: "欢迎回来，Sensei"}, {id: 2, prompt: "今天的午饭怎么又是瑞士卷呜呜呜呜~", animation: "shake 0.1s"}, {id: 1, prompt: "打扫博客真的累死啦～（＞＜）"}, {id: 3, prompt: "诶？这……"}, {id: 4, prompt: "对啊！老师又~被坏孩子骗了哦"}, {id: 6, prompt: "Sensei，相信我，一定没问题的"}, {id: 7, prompt: "Sensei……"}]},
    {name: "azusa", img: 5, init: "您回来了啊，Sensei，请告诉我该做什么事情", startup: 0, sentences: [{id: 1, prompt: "真是的，Sensei，请您克制一下……"}, {id: 2, prompt: "请不要在这里发癫！！！", animation: "shake 0.1s"}, {id: 3, prompt: "博客里面空气不是很好……"}, {id: 4, prompt: "呼~今天就先这样吧"}]},
    {name: "hoshino", img: 7, init: "Sensei 来的路上还好吗？有没有人跟踪呢？", startup: 0, sentences: [{id: 1, prompt: "完了！"}, {id: 2, prompt: "嘛，Sensei，不要总是像个小孩子一样哦"}, {id: 3, prompt: "那……那种事情怎么能对大家说呢？！", animation: "shake 0.1s"}, {id: 4, prompt: "唔嘿，多谢 Sensei~"}, {id: 5, prompt: "（阳光好舒服~）"}, {id: 6, prompt: "诶？Sensei 你这是……"}]}
];
let arr = [];
if (parent !== null) {
    let seed = (date.getFullYear() * 1000 + (date.getMonth() + 1) * 10 + date.getDate()) % students.length;
    if (param.get('student') !== null && param.get('student') < students.length) seed = parseInt(param.get('student'));
    console.log(seed);

    let div = document.createElement("div");
    div.className = "ba_showcase";
    parent.appendChild(div);

    let floatBubble = document.createElement("div");
    floatBubble.className = "bubbleBorderBright";
    div.appendChild(floatBubble);

    let bubbleText = document.createElement("div");
    bubbleText.className = "bubbleTextBright";
    bubbleText.textContent = students[seed].init;
    floatBubble.appendChild(bubbleText);

    let img = document.createElement("img");
    img.src = `https://img.justpureh2o.cn/image/${students[seed].name}/${students[seed].name}${students[seed].startup}.png`;
    img.className = "ba_characters";
    div.appendChild(img);

    preload(seed).then(() => console.log(arr));
    let cooldown = false;
    let last = -1;
    img.addEventListener("click", function () {
        if (!cooldown && arr.length) {
            let x = parseInt(Math.random() * students[seed].sentences.length % students[seed].sentences.length);
            if (arr[x]) {
                while (students[seed].sentences.length > 1 && last === x) x = parseInt(Math.random() * students[seed].sentences.length % students[seed].sentences.length);
                bubbleText.textContent = students[seed].sentences[x].prompt;
                img.src = arr[students[seed].sentences[x].id];
                if (students[seed].sentences[x].animation) {
                    div.style.animation = students[seed].sentences[x].animation;
                    div.style.animationIterationCount = "2";
                }
                cooldown = true;
                last = x;
            }
        }
        setTimeout(() => {cooldown = false;}, 1000);
    });
}
