import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios';
import { BACKEND_API } from '../../helper/helper'


export const initialState = {
    isLoading: false,
    error: null,
    PodcastDetailList: [],
}

export const getPodcastDetailList = createAsyncThunk('podcast/getPodcastDetailList', async (slug) => {
    try {
        const response = await axios({ url: `https://www.techstarmagazine.com/abnews_site/public/api/getSinglePodCast/${slug}`, method: "get" })
        return response;
    } catch (err) {
        throw err
    }
})

export const PodcastDetailSlice = createSlice({
    name: 'podcastDetail',
    initialState,
    reducers: {
        ResetPodcastDetailSlice: (state) => {
            state.PortfolioMessage = ""
            state.error = ""
        },
    },
    extraReducers: (builder) => {
        builder.addCase(getPodcastDetailList.pending, (state) => {
            state.isLoading = true;
            state.error = null;
        });
        builder.addCase(getPodcastDetailList.fulfilled, (state, { payload }) => {
            state.isLoading = false;
            state.error = payload?.data?.error;
            state.PodcastDetailList = payload?.data?.data;
            // if (payload?.data?.products.length > 0) {
            // }
        });
        builder.addCase(getPodcastDetailList.rejected, (state, action) => {
            state.isLoading = false;
            state.error = "Some thing went wrong";

        });
        /////////////////////////////////
    }
})

export const { ResetPodcastDetailSlice } = PodcastDetailSlice.actions
export default PodcastDetailSlice.reducer;