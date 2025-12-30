const initialState = {
  books: [],
};

const LiabraryManagementReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_BOOK":
      return {
        ...state,
        books: [...state.books, action.payload],
      };

    // console.log(action.payload)

    case "REMOVE_BOOK":
      return {
        ...state,
        books: [...state.books.filter((book) => book.isbn !== action.payload)],
      };

    default:
      return state;
  }
};

export default LiabraryManagementReducer;
