import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {TopicType} from '../../shared/core/types';
import {TOPIC_TYPE} from '../../shared/core/constant';
import {RootState} from "../store";
import {updateTopicType} from "./actions";

export interface SearchState {
  topicType: TopicType;
  query?: string;
}

const initialState: SearchState = {
  topicType: TOPIC_TYPE.all,
};

export const reducers = createSlice({
  name: 'search',
  initialState,
  reducers: {
  },
  extraReducers: (builder) => {
    builder
      .addCase(updateTopicType, (state, action: PayloadAction<TopicType>) => {
        state.topicType = action.payload;
      });
  },
});

export const searchStateSlice = (state: RootState): SearchState => state.search;

export default reducers.reducer;
