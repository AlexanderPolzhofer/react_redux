import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import FAKE_DATA from './fake-data/FakeData';

type User = {
    id: number;
    name: string;
    username: string;
    email: string;
    address: {
        street: string;
        suite: string;
        city: string;
        zipcode: string;
        geo: {
            lat: string;
            lng: string;
        };
    };
    phone: string;
    website: string;
    company: {
        name: string;
        catchPhrase: string;
        bs: string;
    };
}

export const userSlice = createSlice({
    name: 'users',
    initialState: { value: FAKE_DATA },
    reducers: {
        addUser: (state, action: PayloadAction<User>) => {
            state.value.push(action.payload)
        },
        deleteUser: (state, action: PayloadAction<User>) => {
            state.value = state.value.filter((user) => user.id !== action.payload.id)
        },
        updateUsername: (state, action: PayloadAction<User>) => {
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