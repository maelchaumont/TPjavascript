for(let i=0; i<5 ;i++){
    if(i === 0)
    logMessage('nb itérations = '+i+' et code couleur = '+C_VERT);
    else {
        switch(i%2) {
            case 0:
                logMessage('nb itérations = '+i+' et code couleur = '+C_ROUGE);
                break;
            case 1:
                logMessage('nb itérations = '+i+' et code couleur = '+C_BLEU);
                break;
        }
    }
}


logMessage(document.querySelector('h1').innerHTML);
logMessage(document.querySelector('h2#titleNews').innerText);
let h3Title = document.querySelectorAll('h3.title');
h3Title.forEach(element => {
    logMessage(element.innerText);
});


//preventdefault sur le submit pour empêcher de refresh la page
document.querySelector('#addNewsForm').addEventListener('submit', event =>{
    event.preventDefault();
});

let myBtn = document.querySelector("input[name='addNewsBtn']");
myBtn.addEventListener('click', () => {
    let newTitle = document.querySelector("input[name='titleToAdd']");
    let news = document.querySelector('section#news');
    try {
        if(newTitle.value === '')
            throw new Error('Champ ajout vide');
        else{
            let existingTitles = document.querySelectorAll('h3.title');
            existingTitles.forEach(element => {
                if(element.innerText === newTitle.value){
                    let p = document.createElement('p');
                    p.innerText = 'Titre déjà existant';
                    p.setAttribute('style','color: red;');
                    document.querySelector('#addNewsForm').prepend(p);
                    throw new Error(p.innerText);
                } 
            });
        } 
    } catch (e) {
        console.error(e.message);
        return;
    }

    let myArticle = document.createElement('article');
    myArticle.innerHTML = '<h3 class="title">'+newTitle.value+'</h3>'
    news.append(myArticle);
});


function dateLogMessage(message){
    let today = new Date();
    logMessage(today.getHours()+':'+today.getMinutes()+' -> '+message);
}
dateLogMessage("Salut c'est un test-ostérone");