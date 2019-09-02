import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import *as ROUTES from '../../components/Routes';
import './SignInStyle.css';
import {auth} from '../../components/FireBase';

import CustomButton from '../../components/CustomButton/CustomButton';


class SignIn extends React.Component {

    constructor(props) {
        super(props );

        this.state = {
            email: '',
            password: '',
            errorMessage: null,
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
 
    handleChange = event => {
        const { name, value } = event.target;
    
        this.setState({ [name]: value });
      };

    handleSubmit = event => {
        event.preventDefault(); 
        const {email, password} = this.state;

        auth.signInWithEmailAndPassword(email, password).then((user) => {
            this.props.history.push('/');
        })
        .catch(error => this.setState({ errorMessage: error }));

      };

    
    render() {

        const {email,password,errorMessage} = this.state;

        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                        <div className="form-group">
                            <label for="exampleInputEmail1">Email address</label>
                            <input required type="email" name='email' value={email} onChange={this.handleChange} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
                            <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                        </div>
                        <div className="form-group">
                            <label for="exampleInputPassword1">Password</label>
                            <input type="password" name='password' value={password} onChange={this.handleChange} className="form-control" id="exampleInputPassword1" placeholder="Password"/>
                        </div>
                        <CustomButton>SIGN IN</CustomButton>
                        <Link className='signup-link' to={ROUTES.SIGN_UP}>Don't have an account?... Sign Up Now !</Link>
                </form>
            </div>
        )
    }
}



export default withRouter(SignIn);