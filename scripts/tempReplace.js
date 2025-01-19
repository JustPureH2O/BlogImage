(
  setInterval(() => {
    let element = document.getElementById('blogRunTimeSpan')
    if (element !== null) {
      element.textContent = element.textContent.replace('This blog has running', '本博客已运行')
    }
  }, 5)
)()
