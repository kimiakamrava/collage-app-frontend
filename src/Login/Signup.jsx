import React, { Component } from 'react';
import LoginImg from "./LoginImg.svg";
import api from '../api'


export class Signup extends Component {
    constructor(props) {
        super(props);
        this.state = {
            error: false,
            fields: {
                username: '',
                email: '',
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
    
        api.auth.Signup(this.state.fields.username, this.state.fields.email, this.state.fields.password).then((res) => {
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
            <div className="base-contaoner"  ref={this.props.containerRef}>
                <div className="header">Signup</div>
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
                            <label>email</label>
                            </div>
                            <input
                                name="email"
                                placeholder="email"
                                value={fields.email}
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
                                <button type="submit" className="btn">Signup</button>
                            </div>
                           
                        </form>
                        </div>
                    </div>       
                </div>  
            </div>
        );
    }
}

