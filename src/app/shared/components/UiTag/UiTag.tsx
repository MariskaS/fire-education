import React from 'react';

import './ui-tag.scss';
import {TagListItem} from "../../core/interfaces";

export interface UiTagProps {
  tag: TagListItem;
  onClickCb: (tag: TagListItem) => void,
}

export const UiTag: React.FC<UiTagProps> = ({tag, onClickCb}) => {
  return (
    <button className="ui-tag"
            onClick={() => onClickCb(tag)}>
      {tag.text}
    </button>
  );
}
