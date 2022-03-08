import { createSlice } from "@reduxjs/toolkit";

import FAKE_DATA from './fake-data/FakeData';

export const userSlice = createSlice({
    name: 'users',
    initialState: { value: FAKE_DATA },
    reducers: {
        addUser: (state, action) => {
            state.value.push(action.payload)
        },
        deleteUser: (state, action) => {
            state.value = state.value.filter((user) => user.id !== action.payload.id)
        }
    }
});

export const { addUser, deleteUser } = userSlice.actions;

export default userSlice.reducer;