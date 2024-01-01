import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios';
import { BACKEND_API } from '../../helper/helper'


export const initialState = {
    isLoading: false,
    error: null,
    TalentShowCaseDetailList: [],
}

export const getTalentShowCaseDetailList = createAsyncThunk('talentshowcase/getTalentShowCaseDetailList', async (id) => {
    try {
        // console.log(id,"=>id")
        const response = await axios({ url: `${BACKEND_API}/talent-details/${id}`, method: "get" })
        return response;
    } catch (err) {
        throw err
    }
})



export const TalentShowCaseDetailSlice = createSlice({
    name: 'talentShowCaseDetail',
    initialState,
    reducers: {
        ResetTalentShowCaseDetailSlice: (state) => {
            // state.PortfolioMessage = ""
            state.error = ""
        },
    },
    extraReducers: (builder) => {
        builder.addCase(getTalentShowCaseDetailList.pending, (state) => {
            state.isLoading = true;
            state.error = null;
        });
        builder.addCase(getTalentShowCaseDetailList.fulfilled, (state, { payload }) => {
            state.isLoading = false;
            state.error = payload?.data?.error;
            state.TalentShowCaseDetailList = payload?.data?.data;
            // if (payload?.data?.products.length > 0) {
            // }
        });
        builder.addCase(getTalentShowCaseDetailList.rejected, (state, action) => {

            state.isLoading = false;
            state.error = "Some thing went wrong";
        });
        /////////////////////////////////
    }
})
export const { ResetTalentShowCaseDetailSlice } = TalentShowCaseDetailSlice.actions
export default TalentShowCaseDetailSlice.reducer;