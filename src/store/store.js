import { configureStore } from "@reduxjs/toolkit";
import EmojiReducer from "./EmojiSlice";
import CategoryReducer from "./CategorySlice";

const store = configureStore({
    reducer: {
        Category: CategoryReducer,
        Emojis: EmojiReducer,
    },
});

export default store;