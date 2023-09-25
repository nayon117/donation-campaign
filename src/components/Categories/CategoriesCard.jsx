import PropTypes from "prop-types";

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
    <div style={cardBg}>
      <div className="max-w-sm rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <a href="#">
          <img
            className="rounded-t-lg"
            src={picture}
            alt=""
          />
        </a>
        <div className="p-5">
          <a href="#">
            <h5 style={categoryBg} className="mb-2 p-1 rounded font-medium text-sm tracking-tight text-gray-900 dark:text-white">
               {cate_gory}
            </h5>
          </a>
          <p style={textColor} className="mb-3 text-xl font-semibold text-gray-700 dark:text-gray-400">
             {title}
          </p>
          
        </div>
      </div>
    </div>
  );
};

CategoriesCard.propTypes = {
  category: PropTypes.object,
};

export default CategoriesCard;
