import React from 'react';

import './fr-footer.scss'
import {UiLink} from "../../../shared/components/UiLink/UiLink";
import {COMPANY_INFO} from "../../../shared/core/constant";

export interface UiFooterProps {
  main?: boolean;
}

export const FrFooter: React.FC<UiFooterProps> = ({main = false}) => {

  const currentYear = new Date().getFullYear();

  return (
    <footer className={`fr-footer${main ? '--main' : ''}`}>
      <p>©&nbsp;{COMPANY_INFO.fromYear}–{currentYear}&nbsp;<UiLink text={COMPANY_INFO.name}
                                                                   link={COMPANY_INFO.link}/>
      </p>
      <p>{COMPANY_INFO.address}</p>
      <p><UiLink text={COMPANY_INFO.email} link={`mailto:${COMPANY_INFO.email}`}/></p>
    </footer>
  );
}
