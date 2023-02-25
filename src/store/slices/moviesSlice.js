import { createSlice } from "@reduxjs/toolkit";
import { reset } from "../actions";
const movieSlice = createSlice({
    name: 'movie',
    initialState: [],
    reducers: {
        addMovie(state, action){
            state.push(action.payload);
        },
        removeMovie(state, action) {
            const index = state.indexOf(action.payload);
            state.splice(index, 1);  
        },
        // reset(state, action){
        //     console.log(action);
        //     //update the existing state
        //     return [];
        // }
    },
    //with manual action
    extraReducers(builder) {
        builder.addCase(reset, (state, action) => {
            return [];
        });
    }
});

export const {addMovie, removeMovie} = movieSlice.actions;
export const moviesReducer =  movieSlice.reducer;