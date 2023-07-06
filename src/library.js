const { shelfBook, unshelfBook, searchShelf } = require(`./shelf.js`);

function createLibrary(libraryName) {
  var library = {
    name: libraryName,
    shelves: {
      fantasy: [],
      fiction: [],
      nonFiction: [],
    },
  };
  return library;
}

function addBook(library, book) {
  // we know the genre which determines shelf
  // select where it is going
  // call shelfBook from previous module
  var shelf = book.genre;
  // console.log(shelf);
  var libraryShelf = library.shelves[shelf];
  // console.log(libraryShelf);
  shelfBook(book, libraryShelf);
}

function checkoutBook(library, title, genre) {
  // check to see if it's available
  // unshelf works by using the title and shelf
  // get the title of the book
  // get the shelf at the library
  // unshelf book
  // console.log(library);
  var status = "";
  var libraryShelf = library.shelves[genre];
  var available = searchShelf(libraryShelf, title);
  if (available === true) {
    var updatedShelf = unshelfBook(title, libraryShelf);
    status = `You have now checked out ${title} from the ${library.name}.`;
    return status;
  } else {
    status = `Sorry, there are currently no copies of ${title} available at the ${library.name}.`;
    return status;
  }
}

function takeStock(library, genre) {
  if (arguments.length === 2) {
    var libraryShelf = library.shelves[genre];
    var shelfBooks = libraryShelf.length;
    var status = `There are a total of ${shelfBooks} ${genre} books at the ${library.name}.`;
    return status;
  } else {
    // console.log(library);
    var shelvesArray = Object.entries(library.shelves);
    // console.log(shelvesArray);
    // console.log(shelvesArray.length);
    var count = 0;
    for (i = 0; i <= shelvesArray[0].length; i++) {
      // console.log(shelvesArray[i][1].length);
      count += shelvesArray[i][1].length;
    }
    var status = `There are a total of ${count} books at the ${library.name}.`;
    return status;
  }
}

module.exports = {
  createLibrary,
  addBook,
  checkoutBook,
  takeStock,
};
