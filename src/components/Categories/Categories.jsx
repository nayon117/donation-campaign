 import PropTypes from 'prop-types';
import CategoriesCard from './CategoriesCard';

const Categories = ({ categories }) => {
  
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 my-12 mx-auto'>
            {
                categories.map(category => <CategoriesCard
                    key={category.id}
                    category={category}
                ></CategoriesCard>)
            }
        </div>
    );
};

Categories.propTypes = {
    categories:PropTypes.array
};

export default Categories;