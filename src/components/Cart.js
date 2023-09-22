import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/redux-toolkit/cartSlice";

const Cart = () => {
    const cartItems = useSelector((store) => store.cart.items);

    const dispatch = useDispatch();
    
    const handleClearCart = () => {
        dispatch(clearCart());
    }

    return (<>
    <div className="text-center m-3 p-3">
        <h2 className="text-xl font-bold">Cart</h2>
        <div className="w-6/12 mx-auto">
            <button 
            className="p-2 m-2 bg-black text-white rounded-lg" 
            onClick={handleClearCart}
            >
                Clear Cart
            </button>
            {
                cartItems.length === 0 && <h2>Cart is empty. Add Items to the cart!</h2>
            }
            <ItemList items={cartItems} />
        </div>
    </div>
    </>)
}

export default Cart;