iterate();

let h1 = $('h1');
logMessageWithDate(h1.innerHTML);

let titleNews = $('#titleNews');
logMessageWithDate(titleNews.val());

let titles = $('.title');
titles.each(element => logMessageWithDate(element));

let button = $('input[name="addNewsBtn"]');
bindButton(button);

let buttons = $('article button');
buttons.each(function(element) {
    element.onclick = viewdetailClick;
});

$('#researchPannel').click(()=>{
    $('#addNewsForm').hide('slow');
    $('#newsAndResearch').attr('style','display: inline-block;');
});

$('#addArticlePannel').click(()=>{
    $('#newsAndResearch').hide('slow');
    $('#addNewsForm').attr('style','display: inline-block;');
});

let articles = JSON.parse(ALLNEWSJSON);
articles.forEach(function(element) {
    console.log(element);

    try {
        let a = new Article(element.id, element.title, element.description);
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
});