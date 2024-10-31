import { Link } from "react-router-dom";


const Book = ({book}) => {
    const {bookName,image,author,category,rating,tags,bookId}=book;
    return (
        <Link to={`/books/${bookId}`}>
           <div>
            <div className="card bg-base-100 w-96 shadow-xl p-6">
  <figure className=" bg-blue-300 rounded-2xl">
    <img
      src={image}
      className="h-[167px] p-8"
      alt="Shoes" />
  </figure>
  <div className="flex gap-2 justify-center pt-3">
    {
        tags.map(tag=><button className="btn btn-xs bg-green-200 text-[#23BE0A] font-medium text-base">{tag}</button>)

    }
  </div>
  <div className="pt-5">
    <h2 className="card-title text-2xl font-bold">
    {bookName}
    </h2>
    <p className="pt-2 pb-4">By : {author}</p>
    <div className=" border-t-2 border-dashed"></div>
    <div className="  pt-4">
      <div className="text-xl font-medium flex justify-between items-center">
        <h4>{category}</h4>
       <div className="flex gap-2 items-center">
       <h4>{rating}</h4>
       <div className="rating">
       <input type="radio" name="rating-9" className="rating-hidden" />
       <input type="radio" name="rating-9" className="mask mask-star-2" />
       </div>
       </div>
      </div>
    </div>
  </div>
</div>
            
        </div>
        </Link>
    );
};

export default Book;