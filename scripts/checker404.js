let domain = window.location.href;
let host = window.location.host;
let mandarin = 'justpureh2o.cn/';
let english = 'en.justpureh2o.cn/';
let html = ``;

let flag = false;
if (host.includes('en.justpureh2o.cn')) {
    fetch(`${domain.replace(english, mandarin)}`).then(res => flag = res.status === 200 || res.status === 301).catch(err => flag = false);
    html = `<p><strong>Link Matcher/文章检索</strong></p><p>The page you searched for currently under English site is not found, but article with same ID does exist in Mandarin site. <a href="${domain.replace(english, mandarin)}">Click here</a> to read it in Mandarin if you want.</p><p>您想要阅读的页面在当前站点（英文站）不存在！但我们在主站（中文站）找到了具有相同标识符的文章。您可以<a href="${domain.replace(english, mandarin)}">点击此链接</a>以跳转至中文站的对应页面继续阅读。</p>`;
} else {
    fetch(`${domain.replace(mandarin, english)}`).then(res => flag = res.status === 200 || res.status === 301).catch(err => flag = false);
    html = `<p><strong>Link Matcher/文章检索</strong></p><p>The page you searched for currently under Mandarin site is not found, but article with same ID does exist in English site. <a href="${domain.replace(mandarin, english)}">Click here</a> to read it in English if you want.</p><p>您想要阅读的页面在当前站点（中文站）不存在！但我们在分站（英文站）找到了具有相同标识符的文章。您可以<a href="${domain.replace(mandarin, english)}">点击此链接</a>以跳转至英文站的对应页面继续阅读。</p>`;
}
console.log(flag);
if (flag) {
    let holder = document.getElementById('checker-holder');
    holder.innerHTML = html;
    holder.style.display = "block";
}
