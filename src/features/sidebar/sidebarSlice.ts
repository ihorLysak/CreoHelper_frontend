import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export interface SidebarState {
    isOpen: boolean;
}

const initialState: SidebarState = {
    isOpen: false,
};

export const sidebarSlice = createSlice({
    name: 'sidebar',
    initialState,
    reducers: {
        toggleOpen: (state) => {
            console.log('hello');
            state.isOpen = !state.isOpen;
            console.log(state.isOpen);
        },
    },
});

export const { toggleOpen } = sidebarSlice.actions;
export default sidebarSlice.reducer;
