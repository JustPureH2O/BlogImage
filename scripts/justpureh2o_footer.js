(function () {
    let old = document.getElementById('post_next_prev')
    let bar = old.getElementsByClassName('p_n_p_prefix')
    let anchor = document.getElementById('cnblogs_post_body')
    if (bar.length === 1) {
        if (bar[0].nextSibling.textContent.includes('上')) {
            anchor.insertAdjacentHTML("afterend", `<div class="footer-justpureh2o"><div class"button-navi atLeft><a href="${bar[0].href}" id="special-link">上一篇：${bar[0].nextElementSibling.textContent}</a></div></div>`)
        } else {
            anchor.insertAdjacentHTML("afterend", `<div class="footer-justpureh2o"><div class"button-navi atRight><a href="${bar[0].href}" id="special-link">下一篇：${bar[0].nextElementSibling.textContent}</a></div></div>`)
        }
    } else {
        anchor.insertAdjacentHTML("afterend", `<div class="footer-justpureh2o"><div class="button-navi atLeft"><a href="${bar[0].href}" id="special-link">上一篇：${bar[0].nextElementSibling.textContent}</a></div><div class="button-navi atRight"><a href="${bar[1].href}" id="special-link">下一篇：${bar[1].nextElementSibling.textContent}</a></div></div>`)
    }
})()
