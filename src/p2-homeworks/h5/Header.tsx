import React, {useState} from 'react'
import s from './Header.module.css';
import {NavLink} from 'react-router-dom';
import {PATH} from './Routs';

function Header() {
  let [active, setActive] = useState(false);
  const menuButtonHandler = () => {
    setActive(!active)
  }
  
  
  
  const styleHandler = () => {
    return active ? s.menu__button__pressed : s.menu__button
  }
  
  
  return (
    <div>
      <nav className={s.header}>
        <div
          className={styleHandler()}
          onClick={menuButtonHandler}>Меню уроков
        </div>
        <div className={s.header__items}>
          <NavLink to={PATH.HW1}
                   className={(navData) => navData.isActive ? s.active : ''}>Homework
            1</NavLink>
          <NavLink to={PATH.HW2}
                   className={(navData) => navData.isActive ? s.active : ''}>Homework
            2</NavLink>
          <NavLink to={PATH.HW3}
                   className={(navData) => navData.isActive ? s.active : ''}>Homework
            3</NavLink>
          <NavLink to={PATH.HW4}
                   className={(navData) => navData.isActive ? s.active : ''}>Homework
            4</NavLink>
          <NavLink to={PATH.PRE_JUNIOR}
                   className={(navData) => navData.isActive ? s.active : ''}>Pre
            Junior
                HW5</NavLink>
            </div>
          </nav>
      </div>
    )
}

export default Header
