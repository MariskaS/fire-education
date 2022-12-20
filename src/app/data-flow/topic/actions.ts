import {createAsyncThunk} from "@reduxjs/toolkit";
import {fetchTopicList} from "../../shared/core/services/topicAPI";

export const loadTopicListAsync = createAsyncThunk(
  'topic/fetchTopicList',
  async () => {
    const response = await fetchTopicList();
    return response.data;
  }
);
