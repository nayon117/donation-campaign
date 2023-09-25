 
import PropTypes from 'prop-types';
import swal from 'sweetalert';

const CategoryCard = ({ category }) => {
    const { picture, title, description, price,text_color } = category || {}
    const textColor = {
        backgroundColor: text_color,
        color:"white"
    }
    // onclick funtionality
   
    const handleDonate = () => {
        const donationsArray = []
        const donationsItems = JSON.parse(localStorage.getItem("donations"))
        if (!donationsItems) {
            donationsArray.push(category)
            localStorage.setItem('donations', JSON.stringify(donationsArray))
            swal("Thanks!", "Donate Succeed!", "success");
        }
        else {
            donationsArray.push(...donationsItems, category)
            localStorage.setItem('donations', JSON.stringify(donationsArray))
            swal("Thanks!", "Donate Succeed!", "success");
        }
    }
    
    return (
        <div className='min-h-screen flex items-center justify-center py-10  '>
            <div className='space-y-4 relative  '>
                <img style={{ maxWidth: '100%' }} className='w-full h-[550px] mx-auto object-cover rounded-md   ' src={picture} alt="" />
                <div className='hero-overlay bg-opacity-50 absolute top-2/3   w-full h-20  '>
                <button onClick={handleDonate} className='btn ml-5 mt-4' style={textColor}>Donate $ {price }</button>
               </div>
            <h2 className='text-3xl font-bold py-2 '>{ title}</h2>
            <p>{ description}</p>
           </div>
        </div>
    );
};

CategoryCard.propTypes = {
    category: PropTypes.object
};

export default CategoryCard;