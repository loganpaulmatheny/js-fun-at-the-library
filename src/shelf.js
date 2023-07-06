function shelfBook(bookObj, shelfName) {
  if (shelfName.length < 3) {
    shelfName.unshift(bookObj);
    return shelfName;
  } else {
    console.log("The shelf is full 🥺, but you can unshelf a book");
  }
}

function unshelfBook(title, shelf) {
  var removeIndex = shelf.findIndex((book) => book.title === title);
  shelf.splice(removeIndex, 1);
  // console.log(shelf);
  return shelf;
}
// CITE: https://stackoverflow.com/questions/15997879/get-the-index-of-the-object-inside-an-array-matching-a-condition
// The way I read this is that in order to pass the test, you need to 'feed' the function the book title as an argument.
// The trick to this one is that there's no 'good way' to then access the higher level book object from within the array.
// The answer is to use an arrow function which can run another function within the function to specifically look at the objects within the array.
// EXPAND - with help from instructor

function listTitles(shelf) {
  var titlesArr = [];
  var titles = "";
  for (i = 0; i < shelf.length; i++) {
    titlesArr.push(shelf[i].title);
  }
  titles = titlesArr.join(", ");
  console.log(titles);
  return titles;
}

// The best way I can think of to solve the 'join' problem, which is that you need the titles of the objects all in a string, but you can't have a comma on the last index (ergo you can't just do string interpolation easily) is to put all the titles in their own array and then join them.

function searchShelf(shelf, title) {
  var found = shelf.some((book) => book.title === title);
  console.log(found);
  if (found === true) {
    console.log("Yes that book is in 📚");
  } else {
    console.log(
      `I'm sorry it looks like that book is checked out or missing 💨`
    );
  }
  return found;
}
// My function was not working earlier because I was also trying to print the titles from the objects within the array. However, if no title exists there will be nothing to print - this was causing my function to have irregular behavior.

module.exports = {
  shelfBook,
  unshelfBook,
  listTitles,
  searchShelf,
};

// Refactor - the code should DEFINITELY be reafactored specifically you should search the shelf before unshelfing a book as a well before shelfing it (maybe there's already a copy). We could simply alter the code a bit to include those callback functions within shelfBook() and unshelfBook() to take this into account. Currently the tests don't check for this case.
