import BannerImg from '../../assets/books.jpg'

const Banner = () => {
    return (
        <div className='bg-[#1313130D]'>
            <div className="hero bg-base-200 min-h-screen">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <img 
      src={BannerImg}
      className="max-w-sm pr-16 rounded-lg shadow-2xl" />
    <div className='pl-40'>
      <h1 className="text-5xl font-bold">Books to freshen up your bookshelf</h1>
      
      <div className='pt-12'>
      <button className="btn btn-primary  bg-[#23BE0A] text-white">View The List</button>
      </div>
    </div>
  </div>
</div>
            
        </div>
    );
};

export default Banner;