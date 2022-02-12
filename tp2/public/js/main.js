iterate();

let h1 = document.querySelector('h1');
logMessageWithDate(h1.innerHTML);

let titleNews = document.querySelector('#titleNews');
logMessageWithDate(titleNews.innerText);

let titles = document.querySelectorAll('h3.title');
titles.forEach(element => logMessageWithDate(element.innerHTML));

let button = document.querySelector('input[name="addNewsBtn"]');
bindButton(button);

let articles = document.querySelectorAll('article');
articles.forEach(element => {
    let btn = element.querySelector('button');
    let desc = element.querySelector('p');
    btn.addEventListener('click', logMessageWithDate(desc.innerText))
});