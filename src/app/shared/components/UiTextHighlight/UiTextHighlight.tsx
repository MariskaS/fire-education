import React from 'react';

import './ui-text-highlight.scss'

export interface UiTextHighlightProps {

}

export const UiTextHighlight: React.FC<UiTextHighlightProps> = ({children}) => {
  return (
    <div className="ui-text-highlight">{children}</div>
  );
}
