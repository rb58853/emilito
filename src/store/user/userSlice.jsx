import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    country: '',
    name: '',
    last_name:'',
    email: '',
    city: '',
    address: '',
    apartament_number: '',
    state: '',
    postal_code: '',
};

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        setUser: (state, action) => {
            // Recibe una lista de parametros en orden
            state.country = action.payload[0];
            state.name = action.payload[1];
            state.last_name = action.payload[2];
            state.email = action.payload[3];
            state.city = action.payload[4];
            state.address = action.payload[5];
            state.apartament_number = action.payload[6];
            state.state = action.payload[7];
            state.postal_code = action.payload[8];
        },

        setCountry: (state, action) => {
            state.country = action.payload;
        },

        setName: (state, action) => {
            state.name = action.payload;
        },

        setLastName: (state, action) => {
            state.last_name = action.payload;
        },
        setEmail: (state, action) => {
            state.email = action.payload;
        },

        setCity: (state, action) => {
            state.city = action.payload;
        },
        setAddress: (state, action) => {
            state.address = action.payload;
        },

        setApartamentNumber: (state, action) => {
            state.apartament_number = action.payload;
        },

        setState: (state, action) => {
            state.state = action.payload;
        },

        setPostalCode: (state, action) => {
            state.postal_code = action.payload;
        },
    },
});

export const { setUser, setCountry, setName, setLastName, setEmail, setCity, setAddress, setApartamentNumber, setState, setPostalCode } = userSlice.actions;
export default userSlice.reducer;