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

module.exports = {
  createTitle,
  buildMainCharacter,
  saveReview,
  calculatePageCount,
  // writeBook,
  // editBooknode
};
