import { configureStore, createSlice, createAction } from "@reduxjs/toolkit";
//create manual action
export const reset = createAction('app/reset');
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

const store = configureStore({
    reducer: {
        songs: songsSlice.reducer,
        movies: movieSlice.reducer
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
export const { addMovie, removeMovie} = movieSlice.actions;
// export const { addMovie, removeMovie, reset} = movieSlice.actions;