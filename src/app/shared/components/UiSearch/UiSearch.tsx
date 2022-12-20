import React from 'react';

import './ui-search.scss'
import {FiSearch} from "react-icons/fi";

export interface UiSearchProps {

}

export const UiSearch: React.FC<UiSearchProps> = (props) => {
  return (
    <div className="ui-search">
      <input className="ui-search__input"
             type="text"/>
      <button className="ui-search__btn">
        <FiSearch/>
      </button>
    </div>
  );
}
