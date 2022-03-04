import React from 'react';

import './ui-link.scss'

export interface UiLinkProps {
  text: string;
  link: string;
  target?: string;
}

export const UiLink: React.FC<UiLinkProps> = ({text, link, target = '_blank'}) => {
  return (
    <a className="ui-link"
       href={link}
       target={target}>
      <span>{text}</span>
    </a>
  );
}
