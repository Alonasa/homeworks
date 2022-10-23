import React from 'react'
import {Route, Routes} from 'react-router-dom'
import HW1 from '../h1/HW1'
import HW2 from '../h2/HW2'
import HW3 from '../h3/HW3'
import HW4 from '../h4/HW4'
import HW5 from '../h5/HW5'
import {Junior} from '../h5/pages/Junior'
import HW6 from '../h6/HW6'
import HW7 from '../h7/HW7'
import HW8 from '../h8/HW8'
import Error404 from './pages/Error404'
import PreJunior from './pages/PreJunior'

export const PATH = {
  PRE_JUNIOR: '/pre-junior',
  JUNIOR: '/junior',
  HW1: '/hw1',
  HW2: '/hw2',
  HW3: '/hw3',
  HW4: '/hw4',
  HW5: '/hw5',
  HW6: '/hw6',
  HW7: '/hw7',
  HW8: '/hw8',
  ERROR_404: '/404'
}

function Pages() {
  return (
	<div>
	  {/*Routes выбирает первый подходящий роут*/}
	  <Routes>
		
		{/*в начале мы попадаем на страницу '/' и переходим сразу на страницу PRE_JUNIOR*/}
		<Route path={'/'} element={<PreJunior/>}/>
		
		<Route path={PATH.PRE_JUNIOR} element={<PreJunior/>}/>
		// add routes
		<Route path={PATH.HW1} element={<HW1/>}/>
		<Route path={PATH.HW2} element={<HW2/>}/>
		<Route path={PATH.HW3} element={<HW3/>}/>
		<Route path={PATH.HW4} element={<HW4/>}/>
		<Route path={PATH.HW5} element={<HW5/>}/>
		<Route path={PATH.HW6} element={<HW6/>}/>
		<Route path={PATH.HW7} element={<HW7/>}/>
		<Route path={PATH.HW8} element={<HW8/>}/>
		<Route path={PATH.JUNIOR} element={<Junior/>}/>
		
		
		{/*он отрисуется если пользователь захочет попасть на несуществующую страницу*/}
		<Route path={'/*'} element={<Error404/>}/>
	  
	  </Routes>
	</div>
  )
}

export default Pages
