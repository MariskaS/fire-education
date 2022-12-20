import {createSelector} from "@reduxjs/toolkit";
import {TOPIC_TYPE} from "../../shared/core/constant";
import {TopicListItem} from "../../shared/core/interfaces";
import {topicStateSlice} from "./reducers";
import {selectQuery, selectTopicType} from "../search/selectors";

export const selectTopicList = createSelector(
  [topicStateSlice, selectTopicType, selectQuery],
  (state, currentTopicTypeState, query) => {
    let filteredList = [];

    if(currentTopicTypeState === TOPIC_TYPE.all) {
      filteredList = [...state.list];
    } else {
      filteredList = [...state.list].filter((v:TopicListItem) => v.type === currentTopicTypeState);
    }

    if(query) {
      console.log('query', query);
    }

    return filteredList;
  }
);
