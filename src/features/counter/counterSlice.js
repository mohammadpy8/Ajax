import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    counter: 0
}

const counterSlice = createSlice({

    name: "counter",
    initialState,
    reducers: {
        increament: (state) => {
            state.counter++
        },
        decreament: (state) => {
            state.counter--
        }
    }
});

export default counterSlice.reducer;
export const { increament, decreament } = counterSlice.actions;