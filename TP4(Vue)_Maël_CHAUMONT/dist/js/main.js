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
        supprimeArticle(index) {
            this.articles.splice(index, 1);
        },
        addNewArticle(title, desc) {
            if(typeof title === 'undefined' || typeof desc === 'undefined' || title === '' || desc === '') {
                this.msgAddArticle = "Le titre ou la description n'est pas renseigné";
                this.colorMsgAddArticle = "red";
            }
            else {
                this.articles.push({id: `${this.articles[this.articles.length]+1}`, title: title, description: desc});
                this.msgAddArticle = "L'ajout de la news a bien fonctionné";
                this.colorMsgAddArticle = "green";
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
}).mount('body');

/*
Vue.component ('article-news', { props: ['title', 'desciption', 'index'],

    template: '<h3 class="title">{{title}}</h3>\
                <p class="desc">{{description}}</p>\
                <button @click="supprimeArticle(index)">Supprimer</button>\
                <button>View detail</button>'
});*/