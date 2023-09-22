import React, {useState} from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";

const RestaurantMenu = () => {    
    const { resId } = useParams();

    const resInfo = useRestaurantMenu(resId);

    const [showIndex, setShowIndex] = useState({
        id: 0,
        isActive: true,
    });

    if (resInfo === null) return <Shimmer />;

    // console.log(resInfo);

    const { name, cuisines, cloudinaryImageId, costForTwoMessage} = resInfo?.cards[0]?.card?.card?.info;

    const {itemCards} = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;

    const {cards} = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR;


    
    // console.log(cards);

    const categories = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR.cards.filter(
        c => c.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

    // console.log(categories);

    return (
        <div className="text-center">
            <h2 className="font-bold my-6 text-2xl">{name}</h2>
            <p className="font-bold text-lg">
                {cuisines.join(", ")} - {costForTwoMessage}
            </p>
            
            {/* categories accordions */}

            {
                categories.map((category,index) => {
                    // controlled component
                    return <RestaurantCategory 
                    key={category?.card?.card?.title} 
                    data={category?.card?.card} 
                    showItems={ (index === showIndex.id) && showIndex.isActive } 
                    setShowIndex={() => setShowIndex(
                        prevState => ({
                            id: index,
                            isActive: index === prevState.id ? !prevState.isActive : true
                        })
                    )}
                    />
                })
            }



        </div>
    );
};

export default RestaurantMenu;