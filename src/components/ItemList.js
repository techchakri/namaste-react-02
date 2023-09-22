import { CDN_URL } from "../utils/constants";
import { addItem, removeItem } from "../utils/redux-toolkit/cartSlice";
import { useDispatch } from "react-redux";

const ItemList = ({ items }) => {

    const dispatch = useDispatch();

    const handleAddItem = (item) => {
        // Dispatch an action
        dispatch(addItem(item))
    }

    const handleRemoveItem = (item) => {
        // Dispatch an action
        dispatch(removeItem(item))
    }

    return <div>
        {items.map((item,index) => 
            <div key={item.card.info.id} className={`p-2 m-2 ${ index < items.length - 1 ? "border-gray-200 border-b-2" : "" } text-left flex justify-between items-center`}>
                <div className="w-9/12">
                    <div className="py-2">
                        <span>{item.card.info.name}</span>
                        <span>- &#8377; {item.card.info.price ? item.card.info.price/100 : item.card.info.defaultPrice}</span>
                    </div>
                    <p className="text-xs">
                        {item.card.info.description}
                    </p>
                </div>
                <div className="w-3/12">
                    <div className="absolute">
                        {
                            item.card.info.inStock > 1 ? <> 
                                <button 
                                className="p-2 rounded-lg text-center bg-black text-white shadow-lg mx-2"
                                onClick={() => handleRemoveItem(item)}>
                                    -
                                </button>
                                <span className="text-white font-bold text-xl">{item.card.info.inStock}</span>
                                <button 
                                className="p-2 rounded-lg text-center bg-black text-white shadow-lg mx-2"
                                onClick={() => handleAddItem(item)}>
                                    +
                                </button>
                            </> : 
                            <button 
                            className="p-2 rounded-lg bg-black text-white shadow-lg mx-16"
                            onClick={() => handleAddItem(item)}>
                                Add +
                            </button> 
                        }
                        
                    </div>
                    { item.card.info.imageId && <img src={CDN_URL+item.card.info.imageId} className="w-full" />}
                </div>
            </div>)}
         </div>
};


export default ItemList;