

export const addBook = ({title, author, isbn}) => {
    return {
    type: "ADD_BOOK",
    payload: ({"title": title, "author": author, "isbn": isbn})
    }
}


export const removeBook = (isbn) => {
    return {
        type: "REMOVE_BOOK", 
        payload: isbn 
    }
}