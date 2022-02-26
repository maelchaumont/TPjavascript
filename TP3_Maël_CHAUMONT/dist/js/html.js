function bindButton(button) {
    button.click(function(event) {
        event.preventDefault();
        let title = $("input[name='titleToAdd']");
        let description = $("textarea[name='descriptionToAdd']");

        try {
            let article = new Article(0, title.val(), description.val());
            if (article.insertArticleHtml()) {
                title.value = '';
                description.value = '';
            }
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

        return false;
    });
}

function clearErrors() {
    let errors = $('.error');

    if (errors) {
        while (errors.length > 0 && errors[0].parentNode != null) {
            errors[0].parentNode.removeChild(errors[0]);
        }
    }
}

function addError(message, parent) {
    let error = $('<p></p>');
    error.text(message); //text() avec paramètre = setter
    error.attr('style',`color: ${ROUGE};`);
    error.addClass('error');

    parent.prepend(error);
}

function viewdetailClick() {
    let p = this.parentNode.querySelector('p');

    logMessageWithDate(p.innerHTML);
}