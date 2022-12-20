import {createSelector} from "@reduxjs/toolkit";
import {SearchState, searchStateSlice} from "./reducers";

export const selectTopicType = createSelector(
  [searchStateSlice],
  (state: SearchState) => state.topicType
);

export const selectQuery = createSelector(
  [searchStateSlice],
  (state: SearchState) => state.query
);
