import React from 'react';
import {DropdownListItem} from "../../core/interfaces";

import './ui-dropdown-menu.scss'

export interface UiDropdownMenuProps {
  list: DropdownListItem[];
  onClickCb: (item: DropdownListItem) => void;
}

export const UiDropdownMenu: React.FC<UiDropdownMenuProps> = ({list, onClickCb}) => {

  const menuList = list.map((item) => (
    <li onClick={() => onClickCb(item)}
        className={`ui-dropdown-menu__item ${item.selected ? 'is-active' : ''}`}
        key={item.id}>
      <span>{item.title}</span>
    </li>
  ))

  return (
    <ul className="ui-dropdown-menu">
      {menuList}
    </ul>
  );
}
