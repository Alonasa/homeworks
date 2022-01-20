import React from 'react';
import {Link} from 'react-router-dom';
import s from './Menu.module.css'
import {PATH} from '../p2-homeworks/h5/Routes';

export const Menu = () => {
  return (
	<div>
	  <nav className={s.menu}>
		<div className={s.menu__items}>
		  <Link to={PATH.HW1}>Homework 1</Link>
		  <Link to={PATH.HW2}>Homework 2</Link>
		  <Link to={PATH.HW3}>Homework 3</Link>
		  <Link to={PATH.HW4}>Homework 4</Link>
		  <Link to={PATH.PRE_JUNIOR}>Pre Junior HW5</Link>
		</div>
	  </nav>
	</div>
  );
};

