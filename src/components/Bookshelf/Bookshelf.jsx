import { useState } from 'react';

// Bookshelf component manages the form and the list of books
const Bookshelf = () => {
  // State for the list of books
  const [books, setBooks] = useState([
    { title: 'Fourth Wing', author: 'Rebecca Yarros' },
    { title: 'The Lion, the Witch and the Wardrobe', author: 'C.S. Lewis' },
  ]);
  // State for the new book form inputs
  const [newBook, setNewBook] = useState({ title: '', author: '' });

  // Updates form state as user types
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setNewBook({
      ...newBook,
      [name]: value,
    });
  };

  // Handles form submission, adds new book, and resets form
  const handleSubmit = (event) => {
    event.preventDefault();
    setBooks([...books, newBook]);
    setNewBook({ title: '', author: '' });
  };

  return (
    <div className="bookshelfDiv">
      <div className="formDiv">
        <h3>Add a Book</h3>
        <form onSubmit={handleSubmit}>
          <label>
            Title:
            <input
              type="text"
              name="title"
              value={newBook.title}
              onChange={handleInputChange}
              required
            />
          </label>
          <label>
            Author:
            <input
              type="text"
              name="author"
              value={newBook.author}
              onChange={handleInputChange}
              required
            />
          </label>
          <button type="submit" style={{ backgroundColor: "#7c4dff", color: "white" }}>
            Add Book
          </button>
        </form>
      </div>
      <div className="bookCardsDiv">
        {books.map((book, idx) => (
          <div className="bookCard" key={idx}>
            <strong>{book.title}</strong>
            <span>by {book.author}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Bookshelf;