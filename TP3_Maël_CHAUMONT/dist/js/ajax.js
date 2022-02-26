$(document).ready(function(){
    $.ajax({ url: "https://newsdata.io/api/1/news?apikey=pub_4627365ed0e1d1c0536016b89a969e1275ef&language=fr&category=technology", method: "GET"})
        .done(function(data) {ajaxRequestSuccess(data)})
        .fail(function(data) {logMessageWithDate("Problème lors de l'appel ajax.")});
});


function ajaxRequestSuccess(data) {
    console.log(data);

    let nbActuelArticles = $('#section#news article');
    let idToAdd = nbActuelArticles + 1;

    data.results.forEach(element => {
        try {
            let a = new Article(idToAdd, element.title, element.description);
            a.insertArticleHtml();
        } catch (e) {
            clearErrors();
            let form = $('#addNewsForm');
    
            if (e instanceof RequiredPropertyError || e instanceof DuplicateArticleError) {
                addError(e.message, form);
            } else {
                addError('Une erreur inconnue est survenue !', form);
                console.error(e);
            }
        }
        idToAdd++;
    });
}