import { useEffect, useState } from "react";
import DonationCard from "./DonationCard";

 

const Donation = () => {
    const [donations, setDonations] = useState([])
    const [noFound, setNoFound] = useState(false)
    const [IsShow,setIsShow] = useState(false)
    
    useEffect(() => {
        const donationsItems = JSON.parse(localStorage.getItem("donations"))
        if (donationsItems) {
            setDonations(donationsItems)
        }
        else {
            setNoFound("No Data Found")
        }
    },[])
    return (
        <div>
            {
                noFound ? <p className="h-[70vh] flex justify-center items-center text-2xl font-bold">{noFound}</p>
                    :
        <div>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 py-10">
                {
                        IsShow ? donations.map(category => <DonationCard
                            key={category.id}
                            category={category}
                        ></DonationCard>) :   
                        donations.slice(0,4).map(category => <DonationCard
                            key={category.id}
                            category={category}
                        ></DonationCard>)      
                }     
                        </div>
                        {
                            donations.length > 4 && <button className="px-3 my-4 py-2 bg-red-500 rounded-md text-white block mx-auto" onClick={() => setIsShow(!IsShow)}>
                                {IsShow ? 'See Less' : "See More"}
                            </button>
            }            
            </div>
             }
        </div>
    );
};

export default Donation;