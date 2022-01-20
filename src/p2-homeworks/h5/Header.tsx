import React from 'react'
import s from './Header.module.css';
import {Link} from 'react-router-dom';
import {PATH} from './Routs';

function Header() {
    return (
      <div>
          <nav className={s.header}>
              <div className={s.header__items}>
                  <Link to={PATH.HW1}>Homework 1</Link>
                  <Link to={PATH.HW2}>Homework 2</Link>
                  <Link to={PATH.HW3}>Homework 3</Link>
                  <Link to={PATH.HW4}>Homework 4</Link>
                  <Link to={PATH.PRE_JUNIOR}>Pre Junior HW5</Link>
              </div>
          </nav>
      </div>
    )
}

export default Header
