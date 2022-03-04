import React from 'react';
import DateTools from '../../core/dateTools';
import './ui-date.scss'

export interface UiDateProps {
  date: string;
  full?: boolean;
}

export const UiDate: React.FC<UiDateProps> = ({date, full = false}) => {
  return (
    <div className="ui-date">{full ? DateTools.fullDateTime(date) : DateTools.shortDate(date)}</div>
  );
}
