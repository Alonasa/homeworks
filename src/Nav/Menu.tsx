import React from 'react';
import {Link} from 'react-router-dom';
import s from './Menu.module.css'

export const Menu = () => {
  return (
	<div>
	  <nav className={s.menu}>
		<div className={s.menu__items}>
		  <Link to="/homework1">Homework1</Link>
		  <Link to="/homework2">Homework2</Link>
		  <Link to="/homework3">Homework3</Link>
		  <Link to="/homework4">Homework4</Link>
		  <Link to="/homework5">Homework5</Link>
		</div>
	  </nav>
	</div>
  );
};

