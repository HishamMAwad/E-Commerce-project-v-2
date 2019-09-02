import React from 'react';
import {auth} from '../../components/FireBase';
import CustomButton from '../../components/CustomButton/CustomButton';


class SignUp extends React.Component {

    constructor(props) {
        super(props );

        this.state = {
            email: '',
            password: '',
            confirmPassword: '',
            errorMessage: ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
 
    handleChange = event => {
        this.setState({
            [event.target.name] : event.target.value
        })
      };

    handleSubmit = event => {
        event.preventDefault(); 
        const {email, password, confirmPassword} = this.state;

        if (password !== confirmPassword) {
            alert("passwords don't match");
        return;
        }else{
            auth.createUserWithEmailAndPassword(email, password).then((user) => {
                this.props.history.push('/');
            })
            .catch(error => this.setState({ errorMessage: error }));
          };
        }

        




    render() {

        const {email,password,confirmPassword} = this.state;

        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                        <div className="form-group">
                            <label for="exampleInputEmail1">Email address</label>
                            <input required value={email} onChange={this.handleChange} name='email' required type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                            <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                        </div>
                        <div className="form-group">
                            <label for="exampleInputPassword1">Password</label>
                            <input value={password} onChange={this.handleChange} name='password' type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
                        </div>
                        <div className="form-group">
                            <label for="exampleInputPassword1">Confirm Password</label>
                            <input value={confirmPassword} onChange={this.handleChange} name='confirmPassword' type="password" className="form-control" id="exampleInputPassword1" placeholder="Confirm Password"/>
                        </div>
                        <CustomButton>SIGN UP</CustomButton>
                </form>
            </div>
        )
    }
}



export default SignUp;