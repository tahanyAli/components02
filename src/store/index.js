import { configureStore, createSlice } from "@reduxjs/toolkit";

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
    }
});

const store = configureStore({
    reducer: {
        songs: songsSlice.reducer
    }
});

// console.log(songsSlice.actions);
// console.log(songsSlice.actions.addSong('some song!!'));

// const startingState = store.getState();
// console.log(JSON.stringify(startingState));

//normal way

// store.dispatch({
//     type: 'song/addSong',
//     payload: 'New Song!!!'
// });

//using action creators
// store.dispatch(songsSlice.actions.addSong('new Song!'))
// const finalState = store.getState();
// console.log(JSON.stringify(finalState));

export { store };

export const { addSong, removeSong } = songsSlice.actions;