import React from 'react';

import './ui-summary.scss';
import {TITLE} from "../../core/constant";

export interface UiSummaryProps {

}

export const UiSummary: React.FC<UiSummaryProps> = ({children}) => {
  return (
    <div className="ui-summary">
      <div className="ui-summary__body">
        <h4 className="ui-summary__title">{TITLE.summary}</h4>
        {children}
      </div>
    </div>
  );
}
