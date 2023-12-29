import { createSlice } from "@reduxjs/toolkit";
const EmojiSlice = createSlice({
    name: "Emojis",
    initialState: {
        values: [],
    },

    reducers: {
        addEmoji: (state, action) => {
            state.values = (action.payload);
        }
    },
})

export const { addEmoji } = EmojiSlice.actions;
export const selectEmoji = (state) => state.Emojis.values;
export default EmojiSlice.reducer;