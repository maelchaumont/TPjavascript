function bindButton(button){
	button.onclick = function(event){
		event.preventDefault();
    	let title = document.querySelector('input[name="titleToAdd"]');
        let desc = document.querySelector('input[name="descToAdd"]');
		let articles = document.querySelectorAll('article');
        let maxIdArticle = 0;
        articles.forEach(element => {
            if(parseInt(element.id.match('/\d*/') > maxIdArticle))
                maxIdArticle = parseInt(element.id.match('/\d*/'));
        });

		if((new Article(maxIdArticle+1, title.value, desc.value)).addArticle()) {
			title.value = '';
            desc.value = '';
        }
		return false;
	}
}

function clearErrors(){
	let errors = document.querySelectorAll('.error');

    if(errors){
        while(errors.length > 0 && errors[0].parentNode != null){
            errors[0].parentNode.removeChild(errors[0]);
        }        
    }
}

function addError(message, parent){
	let error = document.createElement('p');
    error.innerHTML = message;
    error.style.color = ROUGE;
    error.classList.add('error');

    parent.prepend(error);
}