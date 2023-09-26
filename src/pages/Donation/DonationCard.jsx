 import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const DonationCard = ({ category }) => {
  const { id, picture, cate_gory, title, price,card_bg,category_bg,text_color } = category || {}
  // import color from json 
  const cardBg = {
    backgroundColor: card_bg
}
const categoryBg = {
    backgroundColor: category_bg,
    color: text_color,
    display:"inline-block"
}
const textColor = {
    color:text_color
  }
  const btnBg = {
    backgroundColor: text_color,
    color:"white"
  }

  return (
      <div style={cardBg}>
      <div className="relative flex w-full max-w-[48rem] flex-row rounded-xl  bg-clip-border  shadow-md">
    <div className="relative m-0 w-2/5 shrink-0 overflow-hidden rounded-xl rounded-r-none bg-white bg-clip-border text-gray-700">
    <img src={picture} alt="image" className="h-full w-full object-cover" />
  </div>
  <div className="p-6">
    <h6 style={categoryBg} className="mb-4 block  text-sm font-normal p-1 rounded leading-relaxed tracking-normal antialiased">
       {cate_gory}
    </h6>
    <h4 className="mb-2 block font-sans text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
       {title}
    </h4>
    <p style={textColor} className="mb-8 block  font-semibold text-base leading-relaxed text-gray-700 antialiased">
      $ {price}
    </p>
     
      <Link to={`/categories/${id}`}>
        <button style={btnBg}
        className="flex  items-center gap-2 rounded-lg py-2 px-3 text-center align-middle font-sans text-xs font-bold uppercase text-pink-500 transition-all hover:bg-pink-500/10 active:bg-pink-500/30 "
        type="button"
      > View Details </button>
    </Link>  
  </div>
</div>
</div>
    );
};

DonationCard.propTypes = {
    category:PropTypes.object
};

export default DonationCard;