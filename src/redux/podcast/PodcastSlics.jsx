import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios';
import { BACKEND_API } from '../../helper/helper'


export const initialState = {
    isLoading: false,
    error: null,
    PodcastList: [],
}

export const getPodcastList = createAsyncThunk('podcast/getPodcastList', async () => {

    try {
        const response = await axios({ url: `https://www.techstarmagazine.com/abnews_site/public/api/getAllPodCast`, method: "get" })
        return response;
    } catch (err) {
        throw err
    }
})



export const PordcastSlics = createSlice({
    name: 'podcast',
    initialState,
    reducers: {
        ResetPodcastSlice: (state) => {
            state.PodcastMessage = ""
            state.error = ""
        },
    },
    extraReducers: (builder) => {
        builder.addCase(getPodcastList.pending, (state) => {
            state.isLoading = true;
            state.error = null;
        });
        builder.addCase(getPodcastList.fulfilled, (state, { payload }) => {
            state.isLoading = false;
            state.error = payload?.data?.error;
            // console.log(payload)
            state.PodcastList = payload?.data?.data;
        });
        builder.addCase(getPodcastList.rejected, (state, action) => {
            state.isLoading = false;
            state.error = "Some thing went wrong";
        });
        /////////////////////////////////
    }

})
export const { ResetPodcastSlice } = PordcastSlics.actions
export default PordcastSlics.reducer;