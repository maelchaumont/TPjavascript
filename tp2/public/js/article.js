class Article {
    id;
    title;
    desc;

    constructor(id, title, desc) {
        this.id = id;
        this.title = title;
        this.desc = desc;
    }

    createArticleHtml() {
        let newArticle = document.createElement('article');
        let h3 = document.createElement('h3');
        let p = document.createElement('p');
        let myBtn = document.createElement('button');
        let news = document.querySelector('#news');
        h3.innerHTML = this.title;
        p.innerText = this.desc;
        myBtn.innerText = 'View Detail';
        newArticle.id = this.id;
        h3.classList.add('title');
        newArticle.append(h3);
        news.append(newArticle);
    }

    assertRequiredField() {
        if (this.title === '')
            throw 'Titre vide';
    
        if (this.title.length < 3)
            throw 'Titre trop court';
    }

    assertArticleUnicity() {
        let h3s = document.querySelectorAll('h3.title');
    
        for (let i = 0; i < h3s.length; i++) {
            if (h3s[i].innerHTML.toLowerCase().trim() === this.title.toLowerCase().trim()) {
                throw 'Erreur article deja existant';
            }
        }
    
        return true;
    }

    addArticle() {
        try {
            clearErrors();
            assertRequiredField(this.title)
            assertArticleUnicity(this.title)
            createArticleHtml(this.title);
    
            return true;
        } catch (e) {
            let form = document.querySelector('#addNewsForm');
            addError(e, form);
    
            return false;
        }
    }
}
