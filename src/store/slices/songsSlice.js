import { createSlice } from "@reduxjs/toolkit";
import { reset } from "../actions";

const songsSlice = createSlice({
    name: 'song',
    initialState: [],
    reducers: {
        // 'song' + '/' + 'addSong' = 'song/addSong'
        addSong(state, action) {
            // State is not the big state object 
            //In the store 
            //It is the piece of state managed
            //By this reducer
            state.push(action.payload);
        },
        removeSong(state, action) {
            //action.payload === string, the song we want to remove
            const index = state.indexOf(action.payload);
            state.splice(index, 1);
        }
    },
    extraReducers(builder) {
        builder.addCase(reset, (state, action) => {
            return [];
        });
    },
    //way to watch some additional action types
    // extraReducers(builder){
        //not good
        // builder.addCase('movie/reset', (state, action) => {
        //     return [];
        // });
        //Good idea
        //or with .toString()
    //     builder.addCase(movieSlice.actions.reset(), (state, action) => {
    //         return [];
    //     });
    // }

});

export const {addSong, removeSong} = songsSlice.actions;
export const songsReducer = songsSlice.reducer;