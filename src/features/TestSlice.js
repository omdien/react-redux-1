import { createSlice, createAsyncThunk, createEntityAdapter } from '@reduxjs/toolkit';

const TestSlice = createSlice({
    name: 'test',
    initialState: {
        title: "Barang Sangat Mahal",
        price: "Rp. 3.500.000"
    },
    reducers: {
        update: (state, action) => {
            state.title = action.payload.title
            state.price = action.payload.price
        }
    },
});

export const { update } = TestSlice.actions
export default TestSlice.reducer