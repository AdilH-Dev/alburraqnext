import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios';
import { BACKEND_API } from '../../helper/helper'


export const initialState = {
    isLoading: false,
    error: null,
    HomeList: [],
}

export const getHomeList = createAsyncThunk('home/getHomeList', async () => {
    try {
        const response = await axios({ url: `${BACKEND_API}/home`, method: "get" })
        return response;
    } catch (err) {
        throw err
    }
})



export const HomeSlice = createSlice({
    name: 'home',
    initialState,
    reducers: {
        ResetHomeSlice: (state) => {
            state.HomeMessage = ""
            state.error = ""
        },
    },
    extraReducers: (builder) => {
        builder.addCase(getHomeList.pending, (state) => {
            state.isLoading = true;
            state.error = null;
        });
        builder.addCase(getHomeList.fulfilled, (state, { payload }) => {
            state.isLoading = false;
            state.error = payload?.data?.error;
            state.HomeList = payload?.data?.data;
        });
        builder.addCase(getHomeList.rejected, (state, action) => {
            state.isLoading = false;
            state.error = "Some thing went wrong";
        });
        /////////////////////////////////


    }

})
export const { ResetHomeSlice } = HomeSlice.actions
export default HomeSlice.reducer;