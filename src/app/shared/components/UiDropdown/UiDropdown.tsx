import React, {useState} from 'react';

import './ui-dropdown.scss'
import {FaAngleDown} from 'react-icons/fa';
import {UiDropdownMenu} from '../UiDropdownMenu/UiDropdownMenu';
import {DropdownListItem} from '../../core/interfaces';
import {useAppDispatch} from "../../../hooks";
import {updateTopicType} from "../../../data-flow/search/actions";

export interface UiDropdownProps {
  list: DropdownListItem[];
}

export const UiDropdown: React.FC<UiDropdownProps> = ({list}) => {
  const [menuList, setMenuList] = useState(list);
  const [selectedMenuItem, setSelectedMenuItem] = useState(menuList[0]);
  const [menuState, setMenuState] = useState(false);

  const dispatch = useAppDispatch();

  const toggleMenu = () => {
    setMenuState(!menuState)
  }

  const handleMenuItemClick = (item: DropdownListItem) => {
    const updatedMenuList = menuList.map((v) => {
      if (v.id === item.id) {
        return {...v, selected: true};
      } else {
        return {...v, selected: false};
      }
    });
    dispatch(updateTopicType(item.key))
    setMenuList(updatedMenuList);
    setSelectedMenuItem(item);
    setMenuState(!menuState);
  }

  return (
    <div className="ui-dropdown">
      <div className="ui-dropdown__button"
           onClick={toggleMenu}>
        <span>{selectedMenuItem.title}</span>
        <FaAngleDown className="ui-dropdown__ico"/>
      </div>
      {menuState && <UiDropdownMenu list={menuList}
                                    onClickCb={handleMenuItemClick}/>}
    </div>
  );
}
