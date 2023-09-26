import PropTypes from 'prop-types'

const Banner = ({ search,onSearchChange, handleSearch}) => {
  
  return (
    <div>
      <div
        className="hero relative h-[80vh] rounded"
        style={{
          backgroundImage:
            "url(https://i.ibb.co/Vqq4t93/Rectangle-4281.png)",
        }}
      >
        <div className="hero-overlay bg-white bg-opacity-90"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <div className="form-control  absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ">
            <h1 className="mb-5 text-xl md:text-2xl text-black lg:text-4xl whitespace-nowrap font-bold">I Grow By Helping People In Need</h1>
                <label className="input-group ml-0 md:ml-5 lg:ml-24">
                <input
                  value={search}
                  onChange={(e) => onSearchChange(e.target.value)} type="text" placeholder="searh here..." className="input text-black input-bordered" />
                    <span onClick={ handleSearch} className="bg-[#FF444A] text-white font-semibold  ">Search</span>        
                </label>
            </div>
             
          </div>
        </div>
      </div>
    </div>
  );
};

Banner.propTypes = {
  search: PropTypes.string,
  onSearchChange: PropTypes.func,
  handleSearch:PropTypes.func
}
export default Banner;
