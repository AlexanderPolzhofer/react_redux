import { createSlice } from "@reduxjs/toolkit";

import FAKE_DATA from './fake-data/FakeData';

export const userSlice = createSlice({
    name: 'users',
    initialState: { value: FAKE_DATA },
    reducers: {
        addUser: (state, action) => {
            state.value.push(action.payload)
        },

    }
});

export const {addUser} = userSlice.actions;

export default userSlice.reducer;