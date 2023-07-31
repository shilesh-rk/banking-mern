import { createSlice } from "@reduxjs/toolkit";

const userDetailsStorage = localStorage.getItem('userData')?JSON.parse(localStorage.getItem("userData")):null
const initialState = {
    userLogin: {userData: userDetailsStorage}
};
console.log("userDetailsStorage",initialState.userLogin.userData)

export const userSlice = createSlice({
    name:'user',
    initialState,
    reducers:{
        userLog:(state, action)=>{
            state.userLogin.userData = action.payload;
        },
        logout:(state)=>{
            state.userLogin.userData = false;
            localStorage.removeItem('userData');
        },
        addResult:(state, action) =>{
            console.log("Ldata",action.payload);
            const L_Data = localStorage.setItem('userData', JSON.stringify(action.payload))
            state.userLogin.userData = JSON.parse(localStorage.getItem('userData'));
        },
    }
})

export const {userLog, logout, addResult} =userSlice.actions

export default userSlice.reducer;