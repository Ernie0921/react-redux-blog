// this is what i want to happen when logged in with a user
import { createSlice } from "@reduxjs/toolkit";  // toolkit for creating reucers and inital states  in one method

const userSlice = createSlice({ // initial state 
    name: "user",
    initialState: {
        isSignedIn: false,   // is user signed in , no 
        userData: null, // dont show data bc user is not signed 
        searchInput: "fashion",  //let the search box have" fasion as its inital input
        blogData: null, 
    },
    reducers:{ // reducers that will update the initial states 
        setSignedIn: (state,action) => {    // a reducer that will update the state of is signed in to the payload passed in 
            state.isSignedIn = action.payload; 
        },
        setUserData: (state, action ) => {
            state.userData = action.payload
        },
        setInput: (state, action) => {
            state.searchInput = action.payload;
        },
        setBlogData: (state, action ) => {
            state.blogData = action.payload; 
        }
    }
})


export const { setSignedIn, setUserData, setInput, setBlogData} = userSlice.actions; // select all the reducers in userSlice 

//export all the initial states in variables 
export const selectSignedIn = (state) => state.user.isSignedIn;
export const selectUserData = (state) => state.user.userData;
export const selectSetInput = (state) => state.user.searchInput;
export const selectBlogData = (state) => state.user.blogData;

export default userSlice.reducer;