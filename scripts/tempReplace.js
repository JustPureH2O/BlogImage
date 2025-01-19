(
  setInterval(() => {
    let element = document.getElementById('blogRunTimeSpan')
    let extra = document.getElementById('mineTime')
    if (element !== null) {
      element.style.display = "none";
      if (extra === null) {
        element.insertAdjacentHTML("afterend", `<span id="mineTime">${element.textContent.replace('This blog has running', '本博客已运行')}</span>`)
      } else {
        extra.textContent = element.textContent.replace('This blog has running', '本博客已运行')
      }
    }
  }, 100)
)()
