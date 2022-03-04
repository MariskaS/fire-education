import React from 'react';
import {Link} from "react-router-dom";
import {LinkListItem} from "../../core/interfaces";

import './ui-breadcrumbs.scss'

export interface UiBreadcrumbsProps {
  breadcrumbs: LinkListItem[];
}

export const UiBreadcrumbs: React.FC<UiBreadcrumbsProps> = ({breadcrumbs}) => {
  const breadcrumbListTmp = breadcrumbs.map((item, index) => {
    return (
      <div className="ui-breadcrumbs__item"
           key={index}>
        <Link to={item.link}><span>{item.text}</span></Link>
      </div>
    )
  })

  return (
    <div className="ui-breadcrumbs">
      {breadcrumbListTmp}
    </div>
  );
}
