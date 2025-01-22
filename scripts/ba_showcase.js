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
            let tmp = new Image();
            tmp.src = img.src;
            cache.push(tmp);
        })
    }
}

const parent = document.getElementById("l_body");
const reference = document.getElementById("l_main");
const date = new Date();
const param = new URLSearchParams(window.location.search);
const students = [
    {name: "mika", img: 8, init: "Sensei，还请多多关照啦☆☆☆", startup: 5, sentences: [{id: 0, prompt: "欢迎回来，Sensei"}, {id: 2, prompt: "今天的午饭怎么又是瑞士卷呜呜呜呜~", animation: "shake"}, {id: 1, prompt: "打扫博客真的累死啦～（＞＜）"}, {id: 3, prompt: "诶？这……"}, {id: 4, prompt: "对啊！老师又~被坏孩子骗了哦"}, {id: 6, prompt: "Sensei，相信我，一定没问题的"}, {id: 7, prompt: "Sensei……"}]},
    {name: "azusa", img: 5, init: "您回来了啊，Sensei，请告诉我该做什么事情", startup: 0, sentences: [{id: 1, prompt: "真是的，Sensei，请您克制一下……"}, {id: 2, prompt: "请不要在这里发癫！！！", animation: "shake"}, {id: 3, prompt: "博客里面空气不是很好……"}, {id: 4, prompt: "呼~今天就先这样吧"}]},
    {name: "hoshino", img: 7, init: "Sensei 来的路上还好吗？有没有人跟踪呢？", startup: 0, sentences: [{id: 1, prompt: "完了！"}, {id: 2, prompt: "嘛，Sensei，不要总是像个小孩子一样哦"}, {id: 3, prompt: "那……那种事情怎么能对大家说呢？！", animation: "shake"}, {id: 4, prompt: "唔嘿，多谢 Sensei~"}, {id: 5, prompt: "（阳光好舒服~）"}, {id: 6, prompt: "诶？Sensei 你这是……"}]},
    {name: "hikari", img: 7, init: "吵~死啦……", startup: 3, sentences: [{id: 1, prompt: "Sensei 你有什么事吗？"}, {id: 2, prompt: "Sensei 还是那么喜欢使唤小孩子", animation: "shake"}, {id: 4, prompt: "も……Sensei 怎么跟小孩子一样把博客弄得乱糟糟的", animation: "shake"}, {id: 5, prompt: "真是的，Sensei，会赶不上铁路交付日期的"}, {id: 6, prompt: "诶……这是送我的礼物吗……"}]},
    {name: "kayoko", img: 5, init: "我没有生气，Sensei……我经常听到别人说我的脸很凶……", startup: 0, sentences: [{id: 1, prompt: "Sensei，还请不要乱开这么不成熟的玩笑"}, {id: 2, prompt: "Sensei……大家还在看着呢……"}, {id: 3, prompt: "嘛，下回我还是带点舒缓点的音乐CD来吧"}, {id: 4, prompt: "都在电脑面前工作一整天了……真的没问题吗？"}]},
    {name: "koharu", img: 8, init: "啊，Sen……Sensei，欢迎回来……", startup: 0, sentences: [{id: 1, prompt: "Sensei！小春来值日啦"}, {id: 2, prompt: "（唔，这么多文章，莫非……莫非是那种内容？？？）"}, {id: 3, prompt: "在……在我面前做坏事……绝对不会被原谅！", animation: "shake"}, {id: 4, prompt: "真是的，Sensei 应该给学生做好榜样才对吧！", animation: "shake"}, {id: 5, prompt: "（唔……不会是，H的事吧……）", animation: "shake"}, {id: 6, prompt: "哇呀呀呀，H的事……达咩呀！！！", animation: "shake"}, {id: 7, prompt: "Sensei……当众涩涩，可是死刑哦~", animation: "shake"}]},
    {name: "noa", img: 5, init: "欢迎，Sensei，您要确认今天的安排吗？", startup: 0, sentences: [{id: 1, prompt: "请您不要在意，只是在观察您罢了"}, {id: 2, prompt: "（Sensei 的博客……原来有这么多内容吗？）"}, {id: 3, prompt: "Sensei 的博客，真应该好好整理一下了呢！"}, {id: 4, prompt: "呜哇，Sensei，请不要再说了！", animation: "shake"}]},
    {name: "aris", img: 6, init: "新游戏即将贩售，Sensei 也会一起玩吧！", startup: 0, sentences: [{id: 1, prompt: "爱丽丝不吃电池……"}, {id: 2, prompt: "爱丽丝已经准备好和 Sensei 一起冒险了！"}, {id: 3, prompt: "爱丽丝来帮您打扫博客啦"}, {id: 4, prompt: "诶诶？爱丽丝不是打扫机器人！", animation: "shake"}, {id: 5, prompt: "Sensei，不听话是不好的呦~"}]}
];
let arr = [];
let cache = [];
if (window.innerWidth / window.innerHeight > 1 && window.innerWidth * 0.17 < reference.offsetParent.offsetLeft) {
    if (parent !== null) {
        let seed = (date.getFullYear() * 10000 + (date.getMonth() + 1) * 100 + date.getDate()) * 7 % students.length;
        if (param.get('student') !== null && param.get('student') < students.length) seed = parseInt(param.get('student'));

        preload(seed).then(() => {
            console.log(`Resources preloaded successfully! ${arr}`);

            let div = document.createElement("div");
            div.className = "ba_showcase";
            parent.appendChild(div);

            let floatBubble = document.createElement("div");
            floatBubble.className = "bubbleBorder";
            if (volantis.dark.mode === 'light') floatBubble.style.backgroundColor = "e6e6e6";
            else floatBubble.style.backgroundColor = "343434";
            div.appendChild(floatBubble);

            let bubbleText = document.createElement("div");
            bubbleText.className = "bubbleText";
            bubbleText.textContent = students[seed].init;
            floatBubble.appendChild(bubbleText);

            let img = document.createElement("img");
            img.src = `https://img.justpureh2o.cn/image/${students[seed].name}/${students[seed].name}${students[seed].startup}.png`;
            img.className = "ba_characters";
            div.appendChild(img);

            addEventListener("resize", function () {
                if (window.innerWidth * 0.17 > reference.offsetParent.offsetLeft) {
                    div.style.opacity = "0;
                } else {
                    div.style.opacity = "1";
                }
            });

            let cooldown = false;
            let last = -1;
            img.addEventListener("click", function () {
                if (!cooldown && arr.length) {
                    let x = parseInt(Math.random() * students[seed].sentences.length % students[seed].sentences.length);
                    if (arr[x]) {
                        while (students[seed].sentences.length > 1 && last === x) x = parseInt(Math.random() * students[seed].sentences.length % students[seed].sentences.length);
                        bubbleText.textContent = students[seed].sentences[x].prompt;
                        img.src = cache[students[seed].sentences[x].id].src;
                        if (students[seed].sentences[x].animation === 'shake') {
                            img.animate([{transform: "translateX(0)"}, {transform: "translateX(-15px)"}, {transform: "translateX(0)"}, {transform: "translateX(15px)"}, {transform: "translateX(0)"}], {duration: 100, iterations: 2});
                        }
                        cooldown = true;
                        last = x;
                    }
                }
                setTimeout(() => {
                    cooldown = false;
                }, 1000);
            });
            volantis.dark.push(function () {
                if (volantis.dark.mode === 'light') {
                    floatBubble.style.backgroundColor = "#e6e6e6";
                    bubbleText.style.color = "#000000";
                } else {
                    floatBubble.style.backgroundColor = "#343434";
                    bubbleText.style.color = "#ffffff";
                }
            });
        });
    }
}
