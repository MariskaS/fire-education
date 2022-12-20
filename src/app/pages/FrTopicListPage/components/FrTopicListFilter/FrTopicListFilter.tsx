import React from 'react';
import {UiDropdown} from "../../../../shared/components/UiDropdown/UiDropdown";
import {TOPIC_LIST_DROPDOWN} from "../../../../shared/core/constant";
import {UiSearch} from "../../../../shared/components/UiSearch/UiSearch";
import {TopicListItem} from "../../../../shared/core/interfaces";

export interface FrTopicListFilterProps {
  list: TopicListItem[];
}

export const FrTopicListFilter: React.FC<FrTopicListFilterProps> = ({list}) => {
  return (
    // <div>
    //   <UiDropdown list={TOPIC_LIST_DROPDOWN}/>
    //   <UiSearch/>
    // </div>
    <UiDropdown list={TOPIC_LIST_DROPDOWN}/>
  );
}
