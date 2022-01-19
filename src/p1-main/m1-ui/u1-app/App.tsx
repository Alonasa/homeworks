import React from 'react'
import s from './App.module.css'
import HW1 from '../../../p2-homeworks/h1/HW1'
import HW2 from '../../../p2-homeworks/h2/HW2';
import HW3 from '../../../p2-homeworks/h3/HW3';
import {HashRouter, Route, Routes} from 'react-router-dom';
import HW4 from '../../../p2-homeworks/h4/HW4';
import HW5 from '../../../p2-homeworks/h5/HW5';
import {Menu} from '../../../p2-homeworks/h1/Menu';

function App() {
    return (
      <div className={s.App}>
        <div>react homeworks:</div>
        <HashRouter>
          <Menu/>
          <Routes>
            <Route path="/" element={<HW1/>}>
              
            </Route>
            <Route path="/homework1" element={<HW1/>}>hi</Route>
            <Route path="/homework2" element={<HW2/>}/>
            <Route path="/homework3" element={<HW3/>}/>
            <Route path="/homework4" element={<HW4/>}/>
            <Route path="/homework5" element={<HW5/>}/>
          </Routes>
        </HashRouter>
      </div>
    )
}

export default App
