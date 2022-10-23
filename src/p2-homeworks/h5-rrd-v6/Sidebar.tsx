import React, {useState} from 'react';
import s from './Sidebar.module.css';
import {NavLink} from 'react-router-dom';
import {PATH} from './Pages';

export const Sidebar = () => {
  let [active, setActive] = useState(false);
  const menuButtonHandler = () => {
	setActive(!active)
  }
  
  const styleHandler = () => {
	return active ? s.menu__button__pressed : s.menu__button
  }
  const navDataStyleHandler = (navData: boolean) => {
	return navData ? s.active : ''
  }
  
  
  return (
	<div className={s.sidebar}>
	  <div className={s.sidebar__container}>
		<nav className={s.sidebar__content}>
		  <div
			className={styleHandler()}
			onClick={menuButtonHandler}>Меню
		  </div>
		  <div className={s.sidebar__items}>
			<NavLink to={PATH.PRE_JUNIOR}
					 className={(navData) => navDataStyleHandler(navData.isActive)}>Pre
			  Junior</NavLink>
			<NavLink to={PATH.JUNIOR}
					 className={(navData) => navDataStyleHandler(navData.isActive)}>Junior</NavLink>
		  </div>
		</nav>
	  </div>
	</div>
  )
};