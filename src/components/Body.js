import RestaurantCard, { withPromotedLabel } from "./RestaurantCard";
import { useState, useEffect, useContext } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import UserContext from "../utils/UserContext";
import useOnlineStatus from "../utils/useOnlineStatus";



const Body = () => {

    // Local State Variable - Super powerful variable
    const [listOfRestaurants, setListOfRestaurant] = useState([]);
    const [filteredRestaurants, setFilteredRestaurants] = useState([]);

    const [searchText, setSearchText] = useState("");

    const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);

    // Whenever state variables updates, react triggers a reconciliation cycle(re-renders the component)
    // console.log("Body Rendered");

    
    useEffect(() => {
        fetchData(); // Live data is updating
    }, []);

    

    const fetchData = async () => {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.385044&lng=78.486671&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");

        const json = await data.json();

        // console.log(json);
        // optional Chaining

        setListOfRestaurant(json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setFilteredRestaurants(json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    };

    const onlineStatus = useOnlineStatus();

    if (onlineStatus === false) return <h1>
        Looks like you're offline!! Please check your internet connection
    </h1>

    const {loggedInUser, setUserInfo} = useContext(UserContext);

    if (listOfRestaurants === 0) return <Shimmer />;


    return (
        <div className="body">
            <div className="filter flex justify-between items-center">
                <div className="search m-2 p-4">
                    <input type="text" className="border border-solid border-black" value={searchText} onChange={
                        (e) => setSearchText(e.target.value)
                    } />
                    <button
                    className="px-4 py-2 bg-green-100 m-2 rounded-lg" 
                    onClick={() => {
                        // Filter the restaurant cards and update the UI
                        // searchText
                        console.log(searchText);
                        const filteredRestaurant = listOfRestaurants.filter(
                            (res) => res.info.name.toLowerCase().includes(searchText.toLowerCase())
                        );

                        setFilteredRestaurants(filteredRestaurant);

                    }}>Search</button>
                </div>
                <div className="search m-2 p-4">
                <button 
                className="px-4 py-2 bg-gray-100 m-2 rounded-lg" 
                onClick={() => {
                    // Filter logic here
                    const filteredList = listOfRestaurants.filter(
                        (res) => res.info.avgRating >= 4
                        );
                        setListOfRestaurant(filteredList);
                    }}>
                        Top Rated Restaurants
                    </button>
                </div>
                <div className="search m-2 p-4">
                    <label>User Name : </label>
                    <input 
                    type="text" 
                    value={loggedInUser}
                    onChange={(e) => setUserInfo(e.target.value)} 
                    className="border border-black p-2" />
                </div>
            </div>
            <div className="flex flex-wrap">
              {
                filteredRestaurants.map((restaurant) => 
                <Link style={{ textDecoration: "none", color: "black"}} key={restaurant.info.id} to={`/restaurants/${restaurant.info.id}`}>
                    {/** if the restaurant is promoted then add a promoted label to it */}
                    {
                        restaurant.info.promoted ? <RestaurantCardPromoted resData={restaurant} /> : <RestaurantCard resData={restaurant} />
                    }
                </Link>
                )
              }
            </div>
        </div>
    )
}

export default Body;