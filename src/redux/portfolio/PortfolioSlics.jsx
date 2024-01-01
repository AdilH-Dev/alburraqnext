import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios';
import { BACKEND_API } from '../../helper/helper'


export const initialState = {
    isLoading: false,
    error: null,
    PortfolioList: [],
}

export const getPortfolioList = createAsyncThunk('portfolio/getPortfolioList', async () => {
    try {
        const response = await axios({ url: `${BACKEND_API}/portfolio`, method: "get" })
        return response;
    } catch (err) {
        throw err
    }
})



export const PortfolioSlice = createSlice({
    name: 'porfolio',
    initialState,
    reducers: {
        ResetPortfolioSlice: (state) => {
            state.PortfolioMessage = ""
            state.error = ""
        },
    },
    extraReducers: (builder) => {
        builder.addCase(getPortfolioList.pending, (state) => {
            state.isLoading = true;
            state.error = null;
        });
        builder.addCase(getPortfolioList.fulfilled, (state, { payload }) => {
            state.isLoading = false;
            state.error = payload?.data?.error;
            state.PortfolioList = payload?.data?.data;
        });
        builder.addCase(getPortfolioList.rejected, (state, action) => {
            state.isLoading = false;
            state.error = "Some thing went wrong";
        });
        /////////////////////////////////


    }

})
export const { ResetPortfolioSlice } = PortfolioSlice.actions
export default PortfolioSlice.reducer;