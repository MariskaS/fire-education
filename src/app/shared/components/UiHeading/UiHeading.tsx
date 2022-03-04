import React from 'react';
import './ui-heading.scss';
import {HeadingType} from "../../core/types";
import {HEADING_TYPE} from "../../core/constant";

export interface UiHeadingProps {
  type: HeadingType;
}

export const UiHeading: React.FC<UiHeadingProps> = ({type, children}) => {
  const setClass = () => {
    switch (type) {
      case HEADING_TYPE.title:
        return 'ui-heading--title';
      case HEADING_TYPE.subtitle:
        return 'ui-heading--subtitle';
      default:
        return 'ui-heading--title';
    }
  }

  return (
    <div className={setClass()}>{children}</div>
  );
}
