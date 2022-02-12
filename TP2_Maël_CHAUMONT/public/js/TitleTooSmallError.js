class TitleTooSmallError extends Error{
    message = 'Titre trop court';

    toString() {
        return this.message;
    }
}