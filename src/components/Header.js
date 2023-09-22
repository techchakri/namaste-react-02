import { LOGO_URL } from "../utils/constants";
import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
    const [btnNameReact, setBtnNameReact] = useState("Login");
    
    const onlineStatus = useOnlineStatus();

    const {loggedInUser} = useContext(UserContext);

    // console.log("header rendered");

    // if no dependency array => useEffect is called on every render
    // if dependency array is empty = [] => useEffect is called on initial render (just once)
    // if dependency array is [btnNameReact] => called everytime btnNameReact is updated
    // useEffect(() => {
    //     console.log("useEffect called");
    // }, [btnNameReact]);

    // Subscribing to the store using a Selector
    const cartItems = useSelector((store) => store.cart.items); 

    return (
        <div className="flex justify-between bg-pink-50 shadow-lg sm:bg-yellow-50 lg:bg-green-50">
            <div className="logo-container">
                <img className="w-36" src={LOGO_URL} />
            </div>
            <div className="flex items-center">
                <ul className="flex p-4 m-2">
                    <li className="px-4">
                        Online Status: {onlineStatus ? "Online": "Offline"}
                    </li>
                    <li className="px-4">
                        <Link to="/" className="no-underline text-black">Home</Link>
                    </li>
                    <li className="px-4">
                        <Link to="/about" className="no-underline text-black">About Us</Link>
                    </li>
                    <li className="px-4">
                        <Link to="/contact" className="no-underline text-black">Contact Us</Link>
                    </li>
                    <li className="px-4">
                        <Link to="/grocery" className="no-underline text-black">Grocery</Link>
                    </li>
                    <li className="px-4 font-bold text-lg">
                        <Link to="/cart" className="no-underline text-black">
                            Cart 
                            <i className="bi bi-cart-check">
                                <span className="text-lime-500">{cartItems.reduce((acc,curr) => {
                                    acc = acc + curr.card.info.inStock
                                    return acc;
                                }, 0)}</span>
                            </i>
                        </Link>
                    </li>
                    <button
                    className="login"
                    onClick={
                        () => {
                            btnNameReact === "Login" ?
                            setBtnNameReact("Logout") :
                            setBtnNameReact("Login");
                            }}>
                            {btnNameReact}
                    </button>
                    <li className="px-4 font-bold">{loggedInUser}</li>
                </ul>
            </div>
        </div>
    )
}

export default Header;