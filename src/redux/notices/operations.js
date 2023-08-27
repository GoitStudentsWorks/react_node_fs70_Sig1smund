import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

// axios.defaults.baseURL = 'https://team-project-pets-backend.onrender.com/';

// const setAuthHeader = token => {
//   axios.defaults.headers.common.Authorization = `Bearer ${token}`;
// };

// const clearAuthHeader = () => {
//   axios.defaults.headers.common.Authorization = '';
// };

export const getNotices = createAsyncThunk(
  'notices/getNotices',
  async (category, page = 1, query = '', thunkAPI) => {
    try {
      console.log(category);
      let path;
      if (query) {
        path = `api/notices?category=${category}&page=${page}&searchQuery=${query}`;
      } else {
        path = `api/notices?category=${category}&page=${page}`;
      }
      const res = await axios.get(path);
      console.log(res.data);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addNotice = createAsyncThunk(
  'notices/addNotice',
  async (notice, thunkAPI) => {
    try {
      const res = await axios.post('api/notices', notice);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const getOwnNotices = createAsyncThunk(
  'notices/getOwnNotices',
  async (_, thunkAPI) => {
    try {
      const res = await axios.get('api/notices/own');
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const getFavNotices = createAsyncThunk(
  'notices/getFavNotices',
  async (_, thunkAPI) => {
    try {
      const res = await axios.get('api/notices/favorites');
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const getNotice = createAsyncThunk(
  'notices/getNotice',
  async (noticeId, thunkAPI) => {
    try {
      const res = await axios.get(`api/notices/${noticeId}`);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const setFavNotice = createAsyncThunk(
  'notices/setFavNotice',
  async (noticeId, thunkAPI) => {
    try {
      const res = await axios.patch(`api/notices/${noticeId}`);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const removeFavNotice = createAsyncThunk(
  'notices/removeFavNotice',
  async (noticeId, thunkAPI) => {
    try {
      const res = await axios.delete(`api/notices/${noticeId}`);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
