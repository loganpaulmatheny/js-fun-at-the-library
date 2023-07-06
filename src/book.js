// to run tests run
// npm test test/book-test.js

function createTitle(title) {
  var modifiedTitle = `The ${title}`;
  return modifiedTitle;
}
function buildMainCharacter(fullname, yearsOld, pro) {
  var character = { name: fullname, age: yearsOld, pronouns: pro };
  return character;
}

function saveReview(review, array) {
  if (array.includes(review) === false) {
    array.push(review);
    return array;
  } else {
    console.log(`That review has already been made`);
  }
}

function calculatePageCount(title) {
  var pageCount = title.length * 20;
  return pageCount;
}

function writeBook(bookTitle, bookCharacter, bookType) {
  var book = {
    title: bookTitle,
    mainCharacter: bookCharacter,
    pageCount: calculatePageCount(bookTitle),
    genre: bookType,
  };
  return book;
}

function editBook(book) {
  book.pageCount = book.pageCount * 0.75;
  return book;
}

module.exports = {
  createTitle,
  buildMainCharacter,
  saveReview,
  calculatePageCount,
  writeBook,
  editBook,
};

// a better way to pass all of the tests I think would be to have one function that takes in all the information that will represent the book as arguments and assign the key value pairs. But i do understand why it makes sense to separate out some of the functionality to modify parts of the book as desired.
