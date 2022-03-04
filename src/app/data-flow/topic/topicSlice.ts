import {createAsyncThunk, createSlice, PayloadAction} from '@reduxjs/toolkit';
import {RootState} from '../store';
import {TopicListItem} from '../../shared/core/interfaces';
import {fetchTopicList} from '../../shared/core/services/topicAPI';
import {StateStatuses} from '../../shared/core/types';
import {STATE_STATUS} from '../../shared/core/constant';

export interface TopicState {
  list: TopicListItem[];
  current: TopicListItem;
  status: StateStatuses;
}

const initialState: TopicState = {
  list: [],
  current: {} as TopicListItem,
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
    setCurrent: (state, action: PayloadAction<TopicListItem>) => {
      state.current = action.payload;
    },
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

export const { setCurrent } = topicSlice.actions;

export const selectTopicList = (state: RootState) => state.topic.list;
export const selectCurrentTopic = (state: RootState) => state.topic.current;

export default topicSlice.reducer;
