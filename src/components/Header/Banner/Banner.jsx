const Banner = () => {
  return (
    <div>
      <div
        className="hero h-[80vh] rounded"
        style={{
          backgroundImage:
            "url(https://i.ibb.co/Vqq4t93/Rectangle-4281.png)",
        }}
      >
        <div className="hero-overlay bg-white bg-opacity-90"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-2xl text-black lg:text-4xl whitespace-nowrap font-bold">I Grow By Helping People In Need</h1>
            <div className="form-control ml-6 lg:ml-24 ">
                <label className="input-group ">
                    <input type="text" placeholder="searh here..." className="input text-black input-bordered" />
                    <span className="bg-[#FF444A] text-white font-semibold  ">Search</span>        
                </label>
            </div>
             
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
