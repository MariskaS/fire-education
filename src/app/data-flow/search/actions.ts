import {createAction} from "@reduxjs/toolkit";
import {TopicType} from "../../shared/core/types";

export const updateTopicType = createAction<TopicType>('search/updateTopicType');
