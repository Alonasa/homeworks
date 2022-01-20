import React from 'react'
import s from './App.module.css'
import HW1 from '../../../p2-homeworks/h1/HW1'
import HW2 from '../../../p2-homeworks/h2/HW2';
import HW3 from '../../../p2-homeworks/h3/HW3';
import {HashRouter, Route, Routes} from 'react-router-dom';
import HW4 from '../../../p2-homeworks/h4/HW4';
import HW5 from '../../../p2-homeworks/h5/HW5';
import {Menu} from '../../../Nav/Menu';
import {PATH} from '../../../p2-homeworks/h5/Routes';
import PreJunior from '../../../p2-homeworks/h5/pages/PreJunior';
import Error404 from '../../../p2-homeworks/h5/pages/Error404';

// export const PATH = {
//   PRE_JUNIOR: '/pre-junior',
//   // add paths
// }
function App() {
  return (
    <div className={s.App}>
      <HashRouter>
        <Menu/>
        <Routes>
          <Route path="/" element={<PreJunior/>}/>
          <Route path={PATH.HW1} element={<HW1/>}/>
          <Route path={PATH.HW2} element={<HW2/>}/>
          <Route path={PATH.HW3} element={<HW3/>}/>
          <Route path={PATH.HW4} element={<HW4/>}/>
          <Route path={PATH.PRE_JUNIOR} element={<PreJunior/>}/>
          <Route path={PATH.ERROR_404} element={<Error404/>}/>
          <Route path="*" element={<Error404/>}/>
        </Routes>
        </HashRouter>
      </div>
    )
}

export default App
