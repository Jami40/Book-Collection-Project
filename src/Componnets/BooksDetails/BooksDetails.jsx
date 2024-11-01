import { useLoaderData, useParams } from "react-router-dom";


const BooksDetails = () => {
    const {bookId} = useParams();
    console.log(bookId)
    const id=parseInt(bookId)
    const data = useLoaderData();
    console.log(data)

    const soloBookDetails=data.find(data=>data.bookId===id);
    const{tags}=soloBookDetails

    console.log(soloBookDetails)
    // const id=parseInt(bookId);
    // console.log(bookId)
    // const laod=useLoaderData();
    // console.log(load);
    return (
        <div>
            
            <div className="hero bg-base-200 min-h-screen">
  <div className="hero-content flex-col lg:flex-row">
    <img
      src={soloBookDetails.image}
      className="max-w-sm rounded-xl p-12 shadow-2xl" />
    <div>
      <h2 className="text-4xl font-bold pb-2">{soloBookDetails.bookName}</h2>
      <p className="pb-4">By : {soloBookDetails.author}</p>
      <div className="border-b-2"></div>
      <h4 className="text-xl font-semibold py-3">{soloBookDetails.category}</h4>
      <div className="border-b-2"></div>

      <h5 className="pt-3"><span className="font-bold">Review : </span>{soloBookDetails.review}</h5>
      <div className="flex items-center pt-3 pb-6 gap-5">
      <h5 className="font-bold">Tags</h5>
      <div className="flex gap-2 justify-center pt-3">
      {
        tags.map((tag)=><button className="btn btn-xs bg-green-200 text-[#23BE0A] font-medium text-base">{tag}</button>)

      }
      </div>
      </div>
      <div className="border-b-2"></div>
      <div className="pt-6">
        <div className="flex items-center gap-16 pb-3">
            <h5 className="]">Number of Pages:</h5>
            <h5 className="font-bold">{soloBookDetails.totalPages}</h5>
        </div>
        <div className="flex items-center gap-[120px] pb-3">
            <h5 className="">Publisher:</h5>
            <h5 className="font-bold">{soloBookDetails.publisher}</h5>
        </div>
        <div className="flex items-center gap-[58px] pb-3">
            <h5 className="">Year of Publishing:</h5>
            <h5 className="font-bold">{soloBookDetails.yearOfPublishing}</h5>
        </div>
        <div className="flex items-center gap-[140px]">
            <h5 className="]">Rating:</h5>
            <h5 className="font-bold">{soloBookDetails.rating}</h5>
        </div>

      </div>
      <div className="flex items-center gap-7 pt-7 ">
         <button className="btn btn-outline btn-accent font-semibold"> Read </button>
         <button className="btn btn-secondary font-semibold">Wishlist</button>
      </div>


    </div>
  </div>
</div>
            
        </div>
    );
};

export default BooksDetails;