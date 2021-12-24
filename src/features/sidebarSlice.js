import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    isOpen: false
}

const sidebarSlice = createSlice({
    name:'sidebar',
    initialState,
    reducers: {
        setOpen: (state, action) => {
            state.isOpen = action.payload
        }
    },
});

export default sidebarSlice.reducer;
export const { setOpen } = sidebarSlice.actions;