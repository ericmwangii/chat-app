const Pool = require("pg").Pool;

// const pool = new Pool({
//   user: process.env.USER,
//   host: process.env.HOST,
//   database: process.env.DATABASE,
//   password: process.env.PASSWORD,
//   port: process.env.PORT,
// });

const pool = new Pool({
  user: "eric",
  host: "localhost",
  database: "books",
  password: "sf90hv6",
  port: 5432,
});

//add book
const addBook = (request, response) => {
  const { id, booktitle, author, description, price, photourl } = request.body;

  pool.query(
    "INSERT INTO books (id, booktitle, author, description, price, photourl) VALUES ($1, $2, $3, $4, $5, $6)",
    [id, booktitle, author, description, price, photourl],
    (error, results) => {
      if (error) {
        throw error;
      }
      response.status(200).json("Book added");
    }
  );
};

//get all books
const getBooks = (request, response) => {
  const author = request.query.author;

  pool.query("SELECT * FROM books", (error, results) => {
    if (error) {
      throw error;
    }
    response.status(200).json(results.rows);
  });
};

//get by id
const getBookById = (request, response) => {
  const id = parseInt(request.params.id);

  pool.query("SELECT * FROM books WHERE id = $1", [id], (error, results) => {
    if (error) {
      throw error;
    }
    response.status(200).json(results.rows);
  });
};

//update
const updateBook = (request, response) => {
  const id = parseInt(request.params.id);

  const { price } = request.body;

  pool.query(
    "UPDATE books SET price = $1 WHERE id = $2",
    [id, price],
    (error, results) => {
      if (error) {
        throw error;
      }
      response.status(200).json(`Book with id  ${id}  has been modified`);
    }
  );
};

//delete
const deleteBook = (request, response) => {
  const id = parseInt(request.params.id);

  pool.query("DELETE FROM books WHERE id = $1", [id], (error, results) => {
    if (error) {
      throw error;
    }
    response.status(200).json(`Book with id  ${id}  has been deleted`);
  });
};

module.exports = { addBook, getBooks, getBookById, updateBook, deleteBook };
