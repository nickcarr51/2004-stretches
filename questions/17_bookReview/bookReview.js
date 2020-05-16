class BookReview {
    constructor(title, author) {
        this.title = title;
        this.author = author;
        this.notes = {}
        this.rating;
    }
    addNotes(page, note) {
        if (this.notes[page]) {
            this.notes[page] = `${this.notes[page]} ${note}`;
        } else {
            this.notes[page] = note;
        }
    }
    addRating(rating) {
        if (rating > 5) throw new Error('that rating is too high');
        this.rating = rating;
    }
}
module.exports = { BookReview };
