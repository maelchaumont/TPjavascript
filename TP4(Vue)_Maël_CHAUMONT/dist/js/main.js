Vue.createApp ({
    data() {
        return {
            title: 'TP Vue JS',
            articles: this.getArticles(),
            msgAddArticle: null,
            colorMsgAddArticle: null
        }
    },
    methods: {
        getArticles() {
            return JSON.parse(ALLNEWSJSON);
        },
        addNewArticle(title, desc) {
            try {
                new Article(this.articles[this.articles.length]+1, title, desc);
                this.articles.push({id: `${this.articles[this.articles.length]+1}`, title: title, description: desc});
                this.msgAddArticle = "L'ajout de la news a bien fonctionné";
                this.colorMsgAddArticle = "green";
            } catch (error) {
                this.msgAddArticle = error.toString();
                this.colorMsgAddArticle = "red";
            }
            event.preventDefault();
        }
    },
    computed: {
        getNbArticles() {
            return this.articles.length;
        },
        article_or_es(){
            if (this.getNbArticles >= 2) return 'articles';
            else return 'article';
        }
    }
}).component('articlenews', {
    props: ['art','index'],

    template: '<h3 class="title">{{art.title}}</h3>\
                <p class="desc">{{art.description}}</p>\
                <button @click="this.supprimeArticle(index)">Supprimer</button>\
                <button @click="this.viewDetail(index)">View detail</button>',
    methods: {
        viewDetail(ind) {
            let paragraphes = document.querySelectorAll("article p");
            if(paragraphes[ind].style.display == 'none')
                paragraphes[ind].setAttribute('style','display: block;');
            else
                paragraphes[ind].setAttribute('style','display: none;');
        }
    }
}).mount('body');

