//import createSlice

import { createSlice } from "@reduxjs/toolkit";
import data from "../../utils/constants/data";


/**
 * buat slice : untuk generate action dan reducer
 * menerima param object : name, initialState, reducers
 */

const moviesSlice = createSlice({
    name: "Movie Slice",
    initialState:{
        movies: data,

    },
    reducers:{
        addMovie(state, action) {
            //add movie to movies

            state.movies.push(action.payload);


        },
        deleteMovie() {},
    },
});


//generation action dan reducers

const moviesReducer = moviesSlice.reducer;
const { addMovie, deleteMovie } = moviesSlice.actions;


//export action dan reducer
export default moviesReducer;
export {
    addMovie, deleteMovie
};


