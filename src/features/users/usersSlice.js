import { createSlice } from '@reduxjs/toolkit'

let initialState = {
    id: 12,
    userName: 'Tera',
    profilePic: 'https://images.unsplash.com/photo-1586182987320-4f376d39d787?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80',
    gifts: [11,13,14,15,16],
    friends: []
}

const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {},
    extraReducers: {},
})


// export const {} = usersSlice.actions

export default usersSlice.reducer


// write selectors below if needed.

export const selectProfilePicture = state => state.users.profilePic
export const selectUserName = state => state.users.userName