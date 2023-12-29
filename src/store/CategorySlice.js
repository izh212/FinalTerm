import { createSlice } from "@reduxjs/toolkit";
const CategorySlice = createSlice({
    name: "Category",
    initialState: {
        value: '',
    },

    reducers: {
        addCategory: (state, action) => {
            state.value = (action.payload);
        }
    },
})

export const { addCategory } = CategorySlice.actions;
export const selectCategory = (state) => state.Category.value;
export default CategorySlice.reducer;