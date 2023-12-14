import { createSlice } from "@reduxjs/toolkit";

export const sidebarSlice = createSlice({
    name: 'isOpen',
    initialState:{ isOpen: false},
    reducers: {
        open: (state, action)=> {
            state.isOpen = !state.isOpen
        }
    }
})

export const {open} = sidebarSlice.actions;
export default sidebarSlice.reducer;