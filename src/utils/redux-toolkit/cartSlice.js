import { createSlice, current } from "@reduxjs/toolkit";


const cartSlice = createSlice({
    name: "cart",
    initialState: {
        items: []
    },
    reducers: {
        addItem: (state,action) => {
            // Vanilla (older) Redux => Don't Mutate state, returning was mandatory
            // const newState = [...state];
            // newState.items.push(action.payload);
            // return newState;

            // Redux Toolkit
            // We Have to mutate the state
            const demo = state.items.find((item) => item.card.info.id === action.payload.card.info.id);
            // console.log(demo);
            if (state.items.length === 0) {
                state.items.push(action.payload);
            } else if(demo !== undefined){
                state.items.map((item) => action.payload.card.info.id === item.card.info.id ? {...item,card:{info:{inStock:++item.card.info.inStock}}} : item)
            } else {
                state.items.push(action.payload);
            }
        },
        removeItem: (state,action) => {
            // state.items.pop();
            const demo = state.items.find((item) => item.card.info.id === action.payload.card.info.id);

            if (demo !== undefined && action.payload.card.info.inStock > 1) {
                state.items.map((item) => item.card.info.id === action.payload.card.info.id ? {...item,card:{info:{inStock:--item.card.info.inStock}}}: item)
            }
        },
        clearCart: (state,action) => {
            state.items.length = 0;
        },
    },
});



export const { addItem, removeItem, clearCart } = cartSlice.actions;

export default cartSlice.reducer;