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
  const navDataStyleHandler = (navData: boolean)=> {
	return navData ? s.active : ''
  }
  
  return (
	<div className={s.header}>
	  <div className={s.header__container}>
		<nav className={s.header__content}>
		  <div
			className={styleHandler()}
			onClick={menuButtonHandler}>Меню
		  </div>
		  <div className={s.header__items}>
			<NavLink to={PATH.HW1}
					 className={(navData) => navDataStyleHandler(navData.isActive)}>Homework
			  1</NavLink>
			<NavLink to={PATH.HW2}
					 className={(navData) => navDataStyleHandler(navData.isActive)}>Homework
			  2</NavLink>
			<NavLink to={PATH.HW3}
					 className={(navData) => navDataStyleHandler(navData.isActive)}>Homework
			  3</NavLink>
			<NavLink to={PATH.HW4}
					 className={(navData) => navDataStyleHandler(navData.isActive)}>Homework
			  4</NavLink>
			<NavLink to={PATH.PRE_JUNIOR}
					 className={(navData) => navDataStyleHandler(navData.isActive)}>Pre
			  Junior</NavLink>
			<NavLink to={PATH.HW6}
					 className={(navData) => navDataStyleHandler(navData.isActive)}>Homework 6</NavLink>
		  </div>
		</nav>
	  </div>
	</div>
  )
}

export default Header
