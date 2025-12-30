import { useSelector , useDispatch} from "react-redux";
import { removeBook } from './action';



const Inventary = () => {
  const dispatch = useDispatch();

  const books = useSelector((state) => state.books);
  console.log(books, "books");

  const handleBookRemove = (isbn) => {
    // dispatch({type: "REMOVE_BOOK", payload: isbn})
    dispatch(removeBook(isbn)); 

  }

  return (
    <>
      <h2>Library Summary</h2>
      <p>
        <strong>Total Book: {books.length}</strong>{" "}
      </p>
      <ul>
      {books.map((book) => (
        <li key={book.isbn}>
          {book.title} by {book.author}(ISBN: {book.isbn})
          <button onClick={() => handleBookRemove(book.isbn)}>Remove</button>
        </li>
      ))
        
      } 
      </ul>
    </>
  );
};

export default Inventary;
