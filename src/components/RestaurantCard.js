import { useContext } from "react";
import { CDN_URL } from "../utils/constants";
import UserContext from "../utils/UserContext";


const RestaurantCard = ({ resData }) => {
    
    const {cloudinaryImageId, name, cuisines, avgRating, costForTwo, sla} = resData.info;
    const {loggedInUser} = useContext(UserContext);

    return (
        <div className="m-4 p-2 w-[250px] rounded-lg bg-gray-100 hover:bg-gray-200 shadow-lg">
            <img className="rounded-lg" alt="res-logo" src={CDN_URL+cloudinaryImageId} />
            <h4 className="font-bold py-4 text-lg">{name}</h4>
            <h5>{cuisines.join(", ")}</h5>
            <h6>{avgRating} Stars</h6>
            <h6>{costForTwo}</h6>
            <h6>{sla.deliveryTime} minutes</h6>
            <h6> user: {loggedInUser} </h6>
        </div>
    );
};

// Higher Order Component

// input - RestaurantCard => RestaurantCardPromoted

export const withPromotedLabel = (RestaurantCard) => {
    return ({resData}) => {
        return (
            <div>
                <label className="absolute bg-black text-white m-2 p-2 rounded-lg">Promoted</label>
                <RestaurantCard resData={resData} />
            </div>
        );
    };
};

export default RestaurantCard;