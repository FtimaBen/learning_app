import { useState } from "react";

const LoginForm = (props) => {
    return (
        <div className={'modal ' + ((props.visibility.isLoginFormVisible)? 'is-active': '')}>
            <div className="modal-background" />
            <div className="modal-card is-clipped"> 
                <div className="modal-card-head has-text-centered">
                    <h1 className="modal-card-title">School name</h1>
                    <button className="delete" onClick={()=>props.visibility.setVisibility(false)}></button>
                </div>
                <section className="modal-card-body">
                    <form className="is-flex-grow-0">
                        <div className="field">
                            <label className="label">Email</label>
                            <div className="control has-icon-right">
                                <input className="input" type="email"/>
                            </div>
                            <p className="help is-danger">Email is invalid</p>
                        </div>
                        <div className="field">
                            <label className="label">Password</label>
                            <div className="control">
                                <input className="input" type="password"/>
                            </div>
                        </div>
                        <div className="field">
                            <div className="control">
                                <label className="checkbox">
                                    <input type="checkbox"/> Remember me
                                </label>
                            </div>
                        </div>
                    </form>
                    <div className="is-centered">
                        <button className="button is-success mt-5">Log in</button>
                    </div>
                </section>
                <div className="modal-card-foot">
                    <a style={{margin: 'auto'}}>forgot password ?</a>
                </div>
            </div>
        </div>
    )
}

export default LoginForm;