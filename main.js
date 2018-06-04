// Use JavaScript to obtain a reference to the first article header and change its text with textContent property to "Welcome the {insert your name here} blog"
// Use JavaScript to obtain a reference to all article__header elements and change their classList property value to "article__header important".

let articleHeaderEl = document.querySelector(".article__header")
articleHeaderEl.textContent = "Welcome to the Seth Dana Blog"

let allArticleElNodeList = document.querySelectorAll(".article__header")
for (let i = 0; i < allArticleElNodeList.length; i++) {
    allArticleElNodeList[i].setAttribute("class", ".article__header__important")
    }