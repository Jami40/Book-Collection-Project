import { useEffect, useState } from "react";
import Book from "../Book/Book";


const BooksState = () => {
    const [books,setBooks]=useState([])
    useEffect(()=>{
        fetch('../../../public/data/booksData.json')
        .then(res => res.json())
        .then(data => setBooks(data))
    },[])
    return (
        <div className="pt-20">
            <h2 className="text-4xl font-bold text-center pb-8">Books</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
                {
                    books.map(book=><Book key={book.bookId} book={book}></Book>)
                }
            </div>

            
        </div>
    );
};

export default BooksState;