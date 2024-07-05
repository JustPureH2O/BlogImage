(function() {
    let arr = [
    	"穷方圆平直之情，尽规矩准绳之用",
        "——Kyrie Elesion, Kyrie Elesion——",
        "我要往你那小嘴里面……塞进整个瑞士卷了哦！？",
        "瓦尼瓦尼？",
        "别在这理发店！",
        "苦呀西~",
        "李嘉琪，放肆！",
        "书拿出来，需要时间读会书不？",
        "水晶宫里奏《霓裳》，准拟岳阳楼上",
        "暑假黄金周，寒假变双休"
    ];
    var ele = document.getElementById("justpureh2o-splash");
    if (ele && !ele.innerText) {
        ele.innerText = arr[Math.floor(Math.random() * arr.length)];
    }
}(window));
