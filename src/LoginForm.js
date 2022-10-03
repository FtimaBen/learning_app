import { useRef, useState } from "react";
import { faLock } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const LoginForm = (props) => {
    const [emailFormatIsValid, setEmailFormatValid] = useState()
    const [passwordFormatIsValid, setPasswordFormatValid] = useState()
    
    const emailReg = /\S+@\S+\.\S+/
    const passwordReg = /^[a-zA-Z0-9]{8,}/ 

    const loginButton = useRef()

    const [passwordVisibility, setPasswordVisibility] = useState('Show')

    function chnagePasswordVisibility() {
        if(passwordVisibility == 'Hide') setPasswordVisibility('Show')
        else setPasswordVisibility('Hide')
    }

    function loginButtonState() {
        if(emailFormatIsValid == true && passwordFormatIsValid == true) loginButton.current.disabled = 'false'
        else loginButton.current.disabled = 'true'
    }

    function isEmailFormatValid(event) {
        return emailReg.test(event.target.value)
    }

    function isPasswordFormatValid(event) {
        return passwordReg.test(event.target.value)
    }
    
    return (
        <div className={'modal ' + ((props.visibility.isLoginFormVisible)? 'is-active': '')}>
            <div className="modal-background" />
            <div className="modal-card is-clipped" style={{boxShadow: '-20px -20px rgba(229, 229, 229, 0.2), 20px 20px rgba(229, 229, 229, 0.5)', 
                                                            boxSizing: 'border-box'}}> 
                <div className="modal-card-head has-text-centered" style={{boxShadow: '-2px -2px rgba(229, 229, 229, 0.2)'}}>
                    <h1 className="modal-card-title">School name</h1>
                    <button className="delete" onClick={()=>props.visibility.setVisibility(false)}></button>
                </div>
                <section className="modal-card-body">
                    <form className="is-flex-grow-0" onChange={loginButtonState}>
                        <div className="field">
                            <label className="label">Email</label>
                            <div className="control has-icons-right">
                                <input className={(emailFormatIsValid == false && emailFormatIsValid != undefined)?"input is-danger":"input"}  
                                        type="email" name='email' onChange={(event)=>setEmailFormatValid(isEmailFormatValid(event))}/> 
                                <span className={(emailFormatIsValid == false && emailFormatIsValid != undefined)?"icon is-small is-right":"is-hidden"}>
                                    <i className="fas fa-exclamation-triangle"></i>
                                </span>
                                <span className={(emailFormatIsValid == false || emailFormatIsValid == undefined)?'is-hidden':'icon is-small is-right'}>
                                    <i className="fas fa-check"></i>
                                </span>
                            </div>
                            <p className={(emailFormatIsValid == false && emailFormatIsValid != undefined)?"help is-danger": "help is-danger is-hidden"}>
                                Please enter a valid email
                            </p>
                        </div>

                        {/* password label is outside the field div because the div has addons */}
                        <label className="label">Password</label>
                        <div className="field has-addons">
                            <div className="control has-icons-right">
                                <input className={(passwordFormatIsValid == false && passwordFormatIsValid != undefined)?"input is-danger":"input"} 
                                    type={(passwordVisibility == 'Show')?'password':'text'}
                                    name='password' 
                                    onChange={(event)=>setPasswordFormatValid(isPasswordFormatValid(event))}/>

                                <span className={(passwordFormatIsValid == true || passwordFormatIsValid == undefined)?"icon is-small is-right is-hidden":"icon is-small is-right"}>
                                    <i className="fas fa-exclamation-triangle"></i>
                                </span>
                                <span className={(passwordFormatIsValid == true && passwordFormatIsValid != undefined)?'icon is-small is-right':'icon is-small is-right is-hidden'}>
                                    <i className="fas fa-check"></i>
                                </span>
                                <p className={(passwordFormatIsValid == false && passwordFormatIsValid != undefined)?"help is-danger": "help is-danger is-hidden"}>
                                    Please enter a valid password
                                </p>
                                <p className="is-size-7 my-4 is-lowercase">
                                    The password must be at least 8 charachters long and contain at least one digit (0-9) and at least one capitalized charachter 
                                    <span className="is-capitalized">(A-Z)</span> .
                                </p>
                            </div>
                            <div className="control">
                                <button className="button is-info has-addons-left" type="button" onClick={chnagePasswordVisibility}>{passwordVisibility}</button>
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
                        <button type='submit' className="button mt-5 is-fullwidth" 
                                style={{backgroundColor: '#14213D', color: 'white'}} 
                                ref={loginButton}
                                >
                            Log in
                        </button>
                    </div>
                </section>
                <div className="modal-card-foot" style={{boxShadow: '2px 2px rgba(229, 229, 229, 0.5)'}}>
                    <a style={{margin: 'auto'}}>forgot password ?</a>
                </div>
            </div>
        </div>
    )
}

export default LoginForm;