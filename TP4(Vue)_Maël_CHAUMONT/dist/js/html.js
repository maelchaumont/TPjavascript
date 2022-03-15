function bindButton(button) {
    button.onclick = function(event) {
        event.preventDefault();
        let title = document.querySelector('input[name="titleToAdd"]');
        let description = document.querySelector('textarea[name="descriptionToAdd"]');

        let articleIds = [];
        document.querySelectorAll('article').forEach(function(element) {
            articleIds.push(element.id.replace(Article.idPrefix, ''));
        });
        let newId = articleIds.sort()[articleIds.length - 1] + 1;

        try {
            let article = new Article(newId, title.value, description.value);
            if (article.insertArticleHtml()) {
                title.value = '';
                description.value = '';
            }
        } catch (e) {
            clearErrors();
            let form = document.querySelector('#addNewsForm');

            if (e instanceof RequiredPropertyError || e instanceof DuplicateArticleError) {
                addError(e.message, form);
            } else {
                addError('Une erreur inconnue est survenue !', form);
                console.error(e);
            }
        }

        return false;
    };
}

function clearErrors() {
    let errors = document.querySelectorAll('.error');

    if (errors) {
        while (errors.length > 0 && errors[0].parentNode != null) {
            errors[0].parentNode.removeChild(errors[0]);
        }
    }
}

function addError(message, parent) {
    let error = document.createElement('p');
    error.innerHTML = message;
    error.style.color = ROUGE;
    error.classList.add('error');

    parent.prepend(error);
}

function viewdetailClick() {
    let p = this.parentNode.querySelector('p');

    logMessageWithDate(p.innerHTML);
}