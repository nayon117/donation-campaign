import PropTypes from "prop-types";
import { Link } from "react-router-dom";
 

const CategoriesCard = ({ category }) => {
    const { id, title, picture,cate_gory,text_color,category_bg,card_bg } = category || {}
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
   

  return (
    <Link to={`/categories/${id}`}>
       <div   className="cursor-pointer" style={cardBg}>
      <div className="max-w-sm rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        
          <img
            className="rounded-t-lg"
            src={picture}
            alt=""
          />
       
        <div className="p-5">
         
            <h5 style={categoryBg} className="mb-2 p-1 rounded font-medium text-sm tracking-tight text-gray-900 dark:text-white">
               {cate_gory}
            </h5>
           
          <p style={textColor} className="mb-3 text-xl font-semibold text-gray-700 dark:text-gray-400">
             {title}
          </p>
          
        </div>
      </div>
    </div>
    </Link>
  );
};

CategoriesCard.propTypes = {
  category: PropTypes.object,
};

export default CategoriesCard;
