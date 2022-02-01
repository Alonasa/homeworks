import React from 'react'
import PreJunior from './pages/PreJunior';
import {Route, Routes} from 'react-router-dom';
import HW1 from '../h1/HW1';
import HW2 from '../h2/HW2';
import HW3 from '../h3/HW3';
import HW4 from '../h4/HW4';
import Error404 from './pages/Error404';
import HW6 from '../h6/HW6';
import HW7 from '../h7/HW7';
import {Junior} from './pages/Junior';

export const PATH = {
    PRE_JUNIOR: '/pre-junior',
    JUNIOR: '/junior',
    HW1: '/hw1',
    HW2: '/hw2',
    HW3: '/hw3',
    HW4: '/hw4',
    HW6: '/hw6',
    HW7: '/hw7',
    ERROR_404: '/404'
}

function Routs() {
    return (
      <div>
          <Routes>
              <Route path="/" element={<PreJunior/>}/>
              <Route path={PATH.HW1} element={<HW1/>}/>
              <Route path={PATH.HW2} element={<HW2/>}/>
              <Route path={PATH.HW3} element={<HW3/>}/>
              <Route path={PATH.HW4} element={<HW4/>}/>
              <Route path={PATH.HW6} element={<HW6/>}/>
              <Route path={PATH.HW7} element={<HW7/>}/>
              <Route path={PATH.PRE_JUNIOR} element={<PreJunior/>}/>
              <Route path={PATH.JUNIOR} element={<Junior/>}/>
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
