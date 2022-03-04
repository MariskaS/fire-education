import React from 'react';

import logo from '../../../styles/img/WCFC_logo.png';

import './fr-header.scss'
import {useNavigate} from 'react-router-dom';
import {BUTTON_LINK, BUTTON_TEXT, BUTTON_TYPE, TITLE} from '../../../shared/core/constant';
import {UiButton} from '../../../shared/components/UiButton/UiButton';

export const FrHeader: React.FC = () => {
  const navigate = useNavigate();
  const redirectHome = () => {
    navigate('/');
  }

  return (
    <header className="fr-header">
      <div className="fr-header__logo"
           onClick={() => redirectHome()}>
        <img src={logo}
             alt="logo"/>
        <span>{TITLE.WCFD}</span>
      </div>
      <div className="fr-header__actions">
        <UiButton color={BUTTON_TYPE.promoPrimary}
                  link={true}
                  href={BUTTON_LINK.volunteer}
                  text={BUTTON_TEXT.volunteer}/>
      </div>
    </header>
  );
}


