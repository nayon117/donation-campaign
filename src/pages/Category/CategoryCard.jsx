 
import PropTypes from 'prop-types';

const CategoryCard = ({ category }) => {
     const {picture,title,description} = category || {}
    return (
        <div className='min-h-screen flex items-center justify-center'>
            <div>
            <img style={{maxWidth:'100%'}} className='w-full h-[550px] mx-auto object-cover   ' src={picture} alt="" />
            <h2>{ title}</h2>
            <p>{ description}</p>
           </div>
        </div>
    );
};

CategoryCard.propTypes = {
    category: PropTypes.object
};

export default CategoryCard;