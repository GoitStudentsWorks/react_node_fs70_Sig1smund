import { createSlice } from '@reduxjs/toolkit';
import {
  getNotices,
  addNotice,
  getOwnNotices,
  getFavNotices,
  getNotice,
  removeOwnNotice,
} from './operations';

const initialState = {
  notices: [],
  total: 0,
  isLoading: false,
  isDeleting: false,
  error: null,
  filters: { gender: [], age: [] },
};

const noticesSlice = createSlice({
  name: 'notices',
  initialState,
  reducers: {
    updateGenderFilters: (state, action) => {
      state.filters.gender = action.payload;
    },
    updateAgeFilters: (state, action) => {
      state.filters.age = action.payload;
    },
  },
  extraReducers: builder =>
    builder
      .addCase(getNotices.pending, state => {
        state.isLoading = true;
      })
      .addCase(getNotices.fulfilled, (state, action) => {
        state.notices = action.payload.notices;
        state.total = action.payload.total;
        state.isLoading = false;
      })
      .addCase(getNotices.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(addNotice.pending, state => {
        state.isLoading = true;
      })
      .addCase(addNotice.fulfilled, (state, action) => {
        state.notices = [action.payload.notice, ...state.notices];
        state.isLoading = false;
      })
      .addCase(addNotice.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(getOwnNotices.pending, state => {
        state.isLoading = true;
      })
      .addCase(getOwnNotices.fulfilled, (state, action) => {
        state.notices = action.payload.notices;
        state.isLoading = false;
      })
      .addCase(getOwnNotices.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(getFavNotices.pending, state => {
        state.isLoading = true;
      })
      .addCase(getFavNotices.fulfilled, (state, action) => {
        state.notices = action.payload.notices;
        state.isLoading = false;
      })
      .addCase(getFavNotices.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(getNotice.pending, state => {
        state.isLoading = true;
      })
      .addCase(getNotice.fulfilled, (state, action) => {
        state.notices = action.payload.notices;
        state.isLoading = false;
      })
      .addCase(getNotice.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(removeOwnNotice.pending, state => {
        state.isDeleting = true;
        state.isLoading = true;
      })
      .addCase(removeOwnNotice.fulfilled, (state, action) => {
        console.log(action.payload);
        state.notices = state.notices.filter(n => n._id !== action.payload.id);
        state.isDeleting = false;
        state.isLoading = false;
      })
      .addCase(removeOwnNotice.rejected, (state, action) => {
        state.isLoading = false;
        state.isDeleting = false;
        state.error = action.payload;
      }),
});

export const noticesReducer = noticesSlice.reducer;
export const { updateGenderFilters, updateAgeFilters } = noticesSlice.actions;
