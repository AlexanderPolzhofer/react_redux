import { createSlice } from "@reduxjs/toolkit";

import FAKE_DATA from './fake-data/FakeData';

export const userSlice = createSlice({
    name: 'users',
    initialState: { value: FAKE_DATA },
    reducers: {
        addUser: (state, action) => {
            //write code for adding a user 
        },

    }
});

export default userSlice.reducer;