const data = [
  {
    id: 1,
    title: "The Lord of the Rings",
    publicationDate: "1954-07-29",
    author: "J. R. R. Tolkien",
    genres: [
      "fantasy",
      "high-fantasy",
      "adventure",
      "fiction",
      "novels",
      "literature",
    ],
    hasMovieAdaptation: true,
    pages: 1216,
    translations: {
      spanish: "El señor de los anillos",
      chinese: "魔戒",
      french: "Le Seigneur des anneaux",
    },
    reviews: {
      goodreads: {
        rating: 4.52,
        ratingsCount: 630994,
        reviewsCount: 13417,
      },
      librarything: {
        rating: 4.53,
        ratingsCount: 47166,
        reviewsCount: 452,
      },
    },
  },
  {
    id: 2,
    title: "The Cyberiad",
    publicationDate: "1965-01-01",
    author: "Stanislaw Lem",
    genres: [
      "science fiction",
      "humor",
      "speculative fiction",
      "short stories",
      "fantasy",
    ],
    hasMovieAdaptation: false,
    pages: 295,
    translations: {},
    reviews: {
      goodreads: {
        rating: 4.16,
        ratingsCount: 11663,
        reviewsCount: 812,
      },
      librarything: {
        rating: 4.13,
        ratingsCount: 2434,
        reviewsCount: 0,
      },
    },
  },
  {
    id: 3,
    title: "Dune",
    publicationDate: "1965-01-01",
    author: "Frank Herbert",
    genres: ["science fiction", "novel", "adventure"],
    hasMovieAdaptation: true,
    pages: 658,
    translations: {
      spanish: "",
    },
    reviews: {
      goodreads: {
        rating: 4.25,
        ratingsCount: 1142893,
        reviewsCount: 49701,
      },
    },
  },
  {
    id: 4,
    title: "Harry Potter and the Philosopher's Stone",
    publicationDate: "1997-06-26",
    author: "J. K. Rowling",
    genres: ["fantasy", "adventure"],
    hasMovieAdaptation: true,
    pages: 223,
    translations: {
      spanish: "Harry Potter y la piedra filosofal",
      korean: "해리 포터와 마법사의 돌",
      bengali: "হ্যারি পটার এন্ড দ্য ফিলোসফার্স স্টোন",
      portuguese: "Harry Potter e a Pedra Filosofal",
    },
    reviews: {
      goodreads: {
        rating: 4.47,
        ratingsCount: 8910059,
        reviewsCount: 140625,
      },
      librarything: {
        rating: 4.29,
        ratingsCount: 120941,
        reviewsCount: 1960,
      },
    },
  },
  {
    id: 5,
    title: "A Game of Thrones",
    publicationDate: "1996-08-01",
    author: "George R. R. Martin",
    genres: ["fantasy", "high-fantasy", "novel", "fantasy fiction"],
    hasMovieAdaptation: true,
    pages: 835,
    translations: {
      korean: "왕좌의 게임",
      polish: "Gra o tron",
      portuguese: "A Guerra dos Tronos",
      spanish: "Juego de tronos",
    },
    reviews: {
      goodreads: {
        rating: 4.44,
        ratingsCount: 2295233,
        reviewsCount: 59058,
      },
      librarything: {
        rating: 4.36,
        ratingsCount: 38358,
        reviewsCount: 1095,
      },
    },
  },
];

function getBooks() {
  return data;
}

function getBook(id) {
  return data.find((d) => d.id === id);
}

/*
/// 1. Destructuring
const book = getBook(1);
// const title = book.title;
// const author = book.author;
const { title, author, genres, publicationDate } = getBook(2);
title;
author;
genres;

// const primaryGenre = genres[0];
// const secondaryGenre = genres[1];

// const [primaryGenre, secondaryGenre] = genres;
// console.log(primaryGenre, secondaryGenre);

/// 2. Spread operator
const [primaryGenre, secondaryGenre, ...restOfGenres] = genres;
console.log(primaryGenre, secondaryGenre, restOfGenres);

/// 3. Rest operator
// Add a new genres to Genres
const updatedGenres = [...genres, "epic fantasy"];
updatedGenres;

const updatedBook = {
  ...book, // NEED TO BE FIRST. `...` takes all the properties of the book into a new object
  moviePublicationDate: "2001-12-19", // Add a new property
  pages: 1210, // Update an existing property
};
updatedBook;

/// 4. Template literals
const summary = `${title} by ${author} in ${publicationDate.split("-")[0]}`;
summary;

*/

/*
/// map returns a new array
const books = getBooks();
const x = [1, 2, 3, 4, 5].map((n) => n * 2);
x;

const titles = books.map((book) => book.title);
titles;

const bookSummaries = books.map((book) => ({
  title: book.title,
  author: book.author,
  reviewsCount: getTotalReviewsCount(book),
}));
bookSummaries;

function getTotalReviewsCount(book) {
  const goodreads = book.reviews.goodreads?.reviewsCount ?? 0;
  const librarything = book.reviews.librarything?.reviewsCount ?? 0;
  return goodreads + librarything;
}

/// filter returns a new array
const fantasyBooks = books
  .filter((book) => book.genres.includes("fantasy"))
  .map((book) => book.title);
fantasyBooks;

/// reduce returns a single value
// get the total number of pages of all books combined, setting initial value to 0
const totalPages = books.reduce((acc, book) => acc + book.pages, 0);
// accumulator, the current value of the final result.
totalPages;

/// sort in-place
const arr = [3, 1, 5, 2, 4];
const sortedInPlace = arr.sort((a, b) => a - b);
sortedInPlace;
arr;

/// sort return a new array
const sortedArr = arr.slice().sort((a, b) => b - a);
sortedArr;
arr;

const sortedByPages = books.slice().sort((a, b) => a.pages - b.pages);
sortedByPages;

/// mutate the array without effecting the original one
// 1) Add a new book
const newBook = {
  id: 6,
  title: "The Hobbit",
  author: "J. R. R. Tolkien",
  publicationDate: "1937-09-21",
};

const booksAfterAdd = [...books, newBook]; // spread the original array and add the new book
booksAfterAdd;
books;

// 2) Remove a book
const booksAfterDelete = books.filter((book) => book.id !== 2); //filter makes the result array shorter
booksAfterDelete;

// 3) Update a book
const booksAfterUpdate = books.map(
  (book) => (book.id === 3 ? { ...book, pages: 700 } : book) // for other books we return the same book, for the book with id 3 we return a new book with updated pages
);
booksAfterUpdate;

*/

// old way
fetch("https://jsonplaceholder.typicode.com/todos")
  .then((res) => res.json())
  .then((data) => console.log(data));

console.log("Hello World");

// new way
async function fetchData() {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos");
  const data = await res.json();
  console.log(data);
  return data;
}
