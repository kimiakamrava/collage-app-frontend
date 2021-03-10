import React, { Component } from 'react';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import LoginImg from "./LoginImg.svg";
import { Link } from "react-router-dom";
import api from '../api';


export class LoginForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            error: false,
            fields: {
                username: '',
                password: '',
            },
        };
    }

    handleChange = (e) => {
        const newFields = { ...this.state.fields, [e.target.name]: e.target.value };
        this.setState({ fields: newFields });
      };
      handleSubmit = (e) => {
        e.preventDefault();
    
        api.auth.login(this.state.fields.username, this.state.fields.password).then((res) => {
          if (res.error) {
            this.setState({ error: true });
          } else {
            this.props.handleLogin(res);
            this.props.history.push('/palettes');
          }
        })
      };
    render() {
        const { fields } = this.state;
        return (
            <div className="base-container" ref={this.props.containerRef}>
                <div className="header"></div>
                <div className="content">
                <div className="image">
                   <img src={LoginImg}/>
                </div>
                 <div>
                        {this.state.error ? <h1>Try Again</h1> : null}
                        <div className="form">
                        <form onSubmit={this.handleSubmit}>
                            <div className="form-group">
                            <div className="ui field">
                            <div>
                            <label>Username</label>
                            </div>  
                            <input
                                name="username"
                                placeholder="username"
                                value={fields.username}
                                onChange={this.handleChange}
                            />
                            </div>
                            </div>
                            <div className="form-group">
                            <div className="ui field">
                            <div>
                            <label>Password</label>
                            </div>
                            <input
                                name="password"
                                type="password"
                                placeholder="password"
                                value={fields.password}
                                onChange={this.handleChange}
                            />
                            </div>
                            </div>
                            <div className="footer">
                                <button type="submit" className="btn">Login</button>
                                <Link to="/Signup"><ExitToAppIcon/>Signup</Link>
                            </div>
                           
                        </form>
                        </div>
                    </div>       
                </div>  
            </div>
        );
    }
}

