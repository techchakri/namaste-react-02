import React, { useState } from "react";
import ItemList from "./ItemList";

const RestaurantCategory = ({ data, showItems, setShowIndex }) => {

    const handleClick = () => {
        setShowIndex()
    }

    return <div>
        {/* Header */}
        <div className="w-6/12 my-4 mx-auto bg-gray-50 shadow-lg p-4">
            <div className="flex justify-between cursor-pointer" onClick={handleClick}>
                <span className="font-bold text-lg">{data.title} ({data.itemCards.length})</span>
                <span>&#x25BC;</span>
            </div>

            {showItems && <ItemList items={data.itemCards} />}
        </div>
    </div>
}

export default RestaurantCategory;