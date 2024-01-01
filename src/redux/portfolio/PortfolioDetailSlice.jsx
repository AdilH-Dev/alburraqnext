import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios';
import { BACKEND_API } from '../../helper/helper'


export const initialState = {
    isLoading: false,
    error: null,
    PortfolioDetailList: [],
}

export const getPortfolioDetailList = createAsyncThunk('portfolio/getPortfolioDetailList', async (id) => {
    try {
        const response = await axios({ url: `${BACKEND_API}/portfolio-detail/${id}`, method: "get" })
        return response;
    } catch (err) {
        throw err
    }
})

export const PortfolioDetailSlice = createSlice({
    name: 'portfolioDetail',
    initialState,
    reducers: {
        ResetPortfolioDetailSlice: (state) => {
            state.PortfolioMessage = ""
            state.error = ""
        },
    },
    extraReducers: (builder) => {
        builder.addCase(getPortfolioDetailList.pending, (state) => {
            state.isLoading = true;
            state.error = null;
        });
        builder.addCase(getPortfolioDetailList.fulfilled, (state, { payload }) => {
            state.isLoading = false;
            state.error = payload?.data?.error;
            state.PortfolioDetailList = payload?.data?.data;
            // if (payload?.data?.products.length > 0) {
            // }
        });
        builder.addCase(getPortfolioDetailList.rejected, (state, action) => {
            state.isLoading = false;
            state.error = "Some thing went wrong";
        });
        /////////////////////////////////
    }
})

export const { ResetPortfolioDetailSlice } = PortfolioDetailSlice.actions
export default PortfolioDetailSlice.reducer;