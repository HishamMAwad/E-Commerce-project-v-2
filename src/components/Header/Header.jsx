
import React from 'react';
import { Link } from 'react-router-dom';
import * as ROUTES from '../../components/Routes';
import './HeaderStyle.css';
import {auth} from '../FireBase';






class Header extends React.Component {

    state = {
        currentUser: false
    }

    componentDidMount() {
        auth.onAuthStateChanged( user => {
            if (user) {
                this.setState({
                    currentUser: true
                })
            }
            else{
                this.setState({
                    currentUser: false
                })
            }
        })
    }

    render() {
        return(

            <div className="navbar navbar-expand-lg navbar-light bg-light" id='container'>
                <Link className="navbar-brand" to={ROUTES.HOME}>Back Book</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav" style={{marginLeft: 'auto'}}>
                                <Link className="nav-item nav-link active" to={ROUTES.HOME}>Home</Link>
                                <Link className="nav-item nav-link active" to={ROUTES.ABOUT}>About</Link>
                                <Link className="nav-item nav-link active" to={ROUTES.CART}>Cart</Link>
                                {
                                    (this.state.currentUser) ? (
                                        <a className="nav-item nav-link active" style={{cursor:'pointer'}} onClick={() => auth.signOut()}>Sign out</a>
                                    ) : (
                                        <Link className="nav-item nav-link active" to={ROUTES.SIGN_IN}>Sign In</Link>
                                    )
                                }
                        </div>  
                    </div>
            </div>
        )
    }
};

export default Header;
