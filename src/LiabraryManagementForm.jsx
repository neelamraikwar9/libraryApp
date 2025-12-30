import { useState } from "react";
import { useDispatch } from "react-redux";
import { addBook } from './action';

const LiabraryManagementForm = () => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [isbn, setIsbn] = useState("");

  const dispatch = useDispatch();

  const handleAddBook = () => {
    // dispatch({
    //   type: "ADD_BOOK",
    //   payload: { title: title, author: author, isbn: isbn },
    // });

    dispatch(addBook({title, author, isbn}))
  };

  return (
    <>
      <div>
        <h1>Library Management</h1>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="text"
          placeholder="Author"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        />
        <input
          type="number"
          placeholder="ISBN"
          value={isbn}
          onChange={(e) => setIsbn(e.target.value)}
        />
        <button onClick={handleAddBook}>Add Book</button>
      </div>
    </>
  );
};

export default LiabraryManagementForm;
