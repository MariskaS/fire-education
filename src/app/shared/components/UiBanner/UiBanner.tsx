import React from 'react';

import './ui-banner.scss'
import {UiDate} from "../UiDate/UiDate";
import {UiHeading} from "../UiHeading/UiHeading";
import {HEADING_TYPE} from "../../core/constant";

export interface UiBannerProps {
  img: string;
  date: string;
  title: string;
}

export const UiBanner: React.FC<UiBannerProps> = ({img,title, date, children}) => {
  return (
    <div className="ui-banner">
      <div className="ui-banner__img">
        <img src={img}/>
      </div>
      <div className="ui-banner__info">
        <UiDate date={date}/>
        <UiHeading type={HEADING_TYPE.title}>{title}</UiHeading>
        {children}
      </div>
    </div>
  );
}
