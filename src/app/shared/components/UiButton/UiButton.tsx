import React from 'react';

import './ui-button.scss'
import {ButtonType} from "../../core/types";

export interface UiButtonProps {
  text: string;
  onClickCb?: () => void;
  color: ButtonType;
  link?: boolean;
  href?: string;
}

export const UiButton: React.FC<UiButtonProps> = (
  {
    text,
    link = false,
    color,
    href,
    onClickCb
  }) => {


  return (
    <>
      {link ?
        <a href={href}
           className={`ui-button--${color}`}
           rel="noreferrer"
           target="_blank">{text}</a> :
        <button className={`ui-button--${color}`}
                onClick={onClickCb}>{text}</button>
      }
    </>
  );
}
