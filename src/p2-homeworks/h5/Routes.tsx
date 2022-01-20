import React from 'react'
import PreJunior from './pages/PreJunior';
import {HashRouter, Route} from 'react-router-dom';
import {Main} from '../../Main/Main';

export const PATH = {
    PRE_JUNIOR: '/pre-junior',
    HW1: '/hw1',
    HW2: '/hw2',
    HW3: '/hw3',
    HW4: '/hw4',
    ERROR_404: '/404'
}

function Routes() {
    return (
        <div>
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

export default Routes
