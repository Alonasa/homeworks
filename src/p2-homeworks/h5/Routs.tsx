import React from 'react'
import PreJunior from './pages/PreJunior';
import {Route, Routes} from 'react-router-dom';
import HW1 from '../h1/HW1';
import HW2 from '../h2/HW2';
import HW3 from '../h3/HW3';
import HW4 from '../h4/HW4';
import Error404 from './pages/Error404';
import {v1} from 'uuid';

export const PATH = {
    PRE_JUNIOR: '/pre-junior',
    HW1: '/hw1',
    HW2: '/hw2',
    HW3: '/hw3',
    HW4: '/hw4',
    ERROR_404: '/404'
}

function Routs() {
    return (
      <div>
          <Routes>
              <Route path="/" element={<PreJunior/>} key={v1()}/>
              <Route path={PATH.HW1} element={<HW1/>} key={v1()}/>
              <Route path={PATH.HW2} element={<HW2/>} key={v1()}/>
              <Route path={PATH.HW3} element={<HW3/>} key={v1()}/>
              <Route path={PATH.HW4} element={<HW4/>} key={v1()}/>
              <Route path={PATH.PRE_JUNIOR} element={<PreJunior/>} key={v1()}/>
              <Route path={PATH.ERROR_404} element={<Error404/>}/>
              <Route path="*" element={<Error404/>}/>
          </Routes>
          {/*<HashRouter>*/}
          {/*    <Routes>*/}
          {/*        <Route path="/" element={<Main/>}/>*/}
          {/*        <Route path={PATH.PRE_JUNIOR} element={ <PreJunior/>}/>*/}
          {/*    </Routes>*/}
          {/*    */}
          
          {/*</HashRouter>*/}
          {/*Switch выбирает первый подходящий роут*/}
          {/*<Switch>*/}
          
          {/*в начале мы попадаем на страницу '/' и переходим сразу на страницу PRE_JUNIOR*/}
          {/*exact нужен чтоб указать полное совподение (что после '/' ничего не будет)*/}
          {/*<Route path={'/'} exact render={() => <Redirect to={PATH.PRE_JUNIOR}/>}/>*/}
          
          
          {/*у этого роута нет пути, он отрисуется если пользователь захочет попасть на несуществующую страницу*/}
          {/*<Route render={() => <Error404/>}/>*/}
          
          {/*</Switch>*/}
        </div>
    )
}

export default Routs