
import React from 'react';
import { Switch, Route } from 'react-router-dom';
import * as ROUTES from './Routes';
import Home from '../pages/Home/Home';
import SignIn from '../pages/SignIn/SignIn';
import About from '../pages/About/About';
import SignUp from '../pages/SignUp/SignUp';
import Hats from '../pages/Hats/Hats';
import SHOES from '../pages/shoes/Shoes';
import Cart from '../pages/Cart/Cart';



const Navigation = () => {
    return(
        
        <Switch>
            <Route exact path={ROUTES.HOME} component={Home}/>
            <Route path={ROUTES.ABOUT} component={About}/>
            <Route path={ROUTES.SIGN_IN} component={SignIn}/>
            <Route path={ROUTES.SIGN_UP} component={SignUp}/>
            <Route path={ROUTES.HATS} component={Hats}/>
            <Route path={ROUTES.SHOES} component={SHOES}/>
            <Route path={ROUTES.CART} component={Cart}/>
        </Switch>
    )
}



export default Navigation;