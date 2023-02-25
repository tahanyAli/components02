import { configureStore } from "@reduxjs/toolkit";
import { songsReducer, addSong, removeSong} from "./slices/songsSlice";
import { moviesReducer, addMovie, removeMovie } from "./slices/moviesSlice";
import { reset } from "./actions";


const store = configureStore({
    reducer: {
        songs: songsReducer,
        movies: moviesReducer
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

export { store, addSong, removeSong, addMovie, removeMovie, reset};
// export const { addSong, removeSong } = songsSlice.actions;
// export const { addMovie, removeMovie} = movieSlice.actions;
// export const { addMovie, removeMovie, reset} = movieSlice.actions;