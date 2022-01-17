import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "../@core/axios/index";


const initialState = {
    data: [],
    loading: false,
    error: [],
}
export const getAllData = createAsyncThunk(
    "department/getAllData",
    async () => {
      const response = await axios.get("departments");
      return response.data;
    }
  );

const departmentSlice = createSlice({
    name:'department',
    initialState,
    reducers: {},
    extraReducers:(builder) => {
      builder.addCase(getAllData.pending, (state, action) => {
        state.loading = true;
        state.error = [];
      });
      builder.addCase(getAllData.fulfilled, (state, action) => {
        state.data = action.payload;
        state.loading = false;
      });
      builder.addCase(getAllData.rejected, (state, action) => {
        state.error = action.error;
        state.loading = false;
      });
    }
});

export default departmentSlice.reducer;