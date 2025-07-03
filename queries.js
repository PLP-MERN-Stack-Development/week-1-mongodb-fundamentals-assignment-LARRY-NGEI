//Find all books in a specific genre
db.books.find({ genre: "Fantasy" }).pretty();
// Find all books published after certain year (e.g., 1946)
db.books.find({ year: { $gt: 1946 } }).pretty();
// Find all books with a specific author (e.g., "Moby Dick")
db.books.find({ author: "Moby Dick" }).pretty();
// Update the price of a specific book (e.g., "Animal Farm")
db.books.updateOne(
  { title: "Animal Farm" },
  { $set: { price: 12.99 } }
);
// Delete a specific book by title (e.g., "The Hobbit")
db.books.deleteOne({ title: "The Hobbit" });

// Find books in stock published after 2010 (with projection)
db.books.find(
  { year: { $gt: 2010 }, inStock: true },
  { title: 1, author: 1, year: 1 }
).pretty();
// Sort books by price in ascending order (cheapest first)
db.books.find().sort({ price: 1 }).pretty();
// Sort books by title in descending order (expensive first)
db.books.find().sort({ title: -1 }).pretty();
// Page implementation (5 books per page)
const pageSize = 5;
const pageNumber = 1; // Change this to get different pages
db.books.find()
  .skip((pageNumber - 1) * pageSize)
  .limit(pageSize)
  .pretty();


// Create an index on the title field for faster searches
db.books.createIndex({ title: 1 });
// Create a compound index on author and year for faster queries
db.books.createIndex({ author: 1, year: 1 });
// Performance Comparison using explain()
db.books.find({ genre: "Fantasy" }).explain("executionStats");