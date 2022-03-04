import React from 'react';
import {useNavigate} from 'react-router-dom';
import './fr-home-page.scss';
import {BUTTON_TEXT, BUTTON_TYPE, HOME, SOCIAL} from "../../shared/core/constant";
import {UiLink} from "../../shared/components/UiLink/UiLink";
import {UiButton} from "../../shared/components/UiButton/UiButton";
import {FaFacebookF, FaGlobe} from 'react-icons/fa';
import {FrFooter} from "../components/FrFooter/FrFooter";

export function FrHomePage() {
  const navigate = useNavigate();
  const redirectTopics = () => {
    navigate('topics');
  }

  const socialList = HOME.social.links.map((social, index) =>
    <a key={index}
       href={social.link}
       rel="noreferrer"
       target="_blank">
      {social.icon === SOCIAL.facebook ? <FaFacebookF/> : <FaGlobe/>}
    </a>
  );

  return (
    <div className="fr-home-page">
      <div className="fr-home-page__body">
        <h1 className="fr-home-page__title">{HOME.title}</h1>
        <p>{HOME.subtitle}</p>
        <p>
          <UiLink text={HOME.poweredBy.text}
                  link={HOME.poweredBy.link}/>
        </p>
        <div className="fr-home-page__actions">
          <UiButton onClickCb={redirectTopics}
                    color={BUTTON_TYPE.promoAccent}
                    text={BUTTON_TEXT.letsGo}/>
        </div>
        <div className="fr-home-page__social">
          <h4 className='fr-home-page__social__title'>{HOME.social.title}</h4>
          <div className="fr-home-page__social-links">
            {socialList}
          </div>
        </div>
        <FrFooter main={true}/>
      </div>
    </div>
  );
}
