import { useParams } from "react-router-dom";


const BooksDetails = () => {
    const {bookId} = useParams();
    console.log(bookId)
    return (
        <div>
            <h2>Books Details Id : {bookId}</h2>
            
        </div>
    );
};

export default BooksDetails;