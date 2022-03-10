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
        },
        updateUsername: (state, action) => {
            state.value.map(user => {
                if (user.id === action.payload.id) {
                    return (user.username = action.payload.username);
                }
                return null;
            });
        }
    }
});

export const { addUser, deleteUser, updateUsername } = userSlice.actions;

export default userSlice.reducer;