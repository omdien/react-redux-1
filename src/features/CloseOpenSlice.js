import { createSlice } from '@reduxjs/toolkit';

const CloseOpenSlice = createSlice({
    name: 'closeOpen',
    initialState: {
        buka: true
    },
    reducers: {
        update: (state, action) => {
            state.buka = action.payload.buka
        }
    },
});

export const { update } = CloseOpenSlice.actions
export default CloseOpenSlice.reducer