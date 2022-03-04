import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {RootState} from '../store';
import {TopicListItem} from '../../shared/core/interfaces';
import {fetchTopicList} from '../../shared/core/services/topicAPI';
import {StateStatuses} from '../../shared/core/types';
import {STATE_STATUS} from '../../shared/core/constant';

export interface TopicState {
  list: TopicListItem[];
  status: StateStatuses;
}

const initialState: TopicState = {
  list: [],
  status: STATE_STATUS.idle,
};

export const loadTopicListAsync = createAsyncThunk(
  'topic/fetchTopicList',
  async () => {
    const response = await fetchTopicList();
    return response.data;
  }
);

export const topicSlice = createSlice({
  name: 'topic',
  initialState,
  reducers: {
  },
  extraReducers: (builder) => {
    builder
      .addCase(loadTopicListAsync.pending, (state) => {
        state.status = STATE_STATUS.loading;
      })
      .addCase(loadTopicListAsync.fulfilled, (state, action) => {
        state.status = STATE_STATUS.idle;
        state.list = action.payload;
      });
  },
});

export const selectTopicList = (state: RootState) => state.topic.list;

export default topicSlice.reducer;
