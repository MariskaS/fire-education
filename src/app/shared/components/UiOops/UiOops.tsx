import React from 'react';
import {ERROR, HEADING_TYPE} from "../../core/constant";
import {UiHeading} from "../UiHeading/UiHeading";

import './ui-oops.scss'
import {Link} from "react-router-dom";
import {LinkListItem} from "../../core/interfaces";

export interface UiOopsProps {
  to?: LinkListItem;
  globalError?: boolean;
}

export const UiOops: React.FC<UiOopsProps> = ({to = undefined, globalError = false}) => {
  return (
    <div className="ui-oops">
      <div className="ui-oops__body">
        <UiHeading type={HEADING_TYPE.title}>{ERROR.oops}</UiHeading>
        <p>
          {ERROR.somethingWentWrong}.&nbsp;
          {to && <Link className="ui-oops__link" to={to.link}><span>{to.text}</span></Link>}
          {globalError && <p>{ERROR.technicalWork}</p>}
        </p>
      </div>
    </div>
  );
}
