const SignUpForm = (props) => {
    return (
        <div className={'modal ' + ((props.visibility.isSignUpFormVisible)? 'is-active': '')}>
            <div className="modal-background" />
            <div className="modal-card is-clipped" style={{boxShadow: '-20px -20px rgba(229, 229, 229, 0.2), 20px 20px rgba(229, 229, 229, 0.5)', 
                                                            boxSizing: 'border-box'}}> 
                <div className="modal-card-head has-text-centered" style={{boxShadow: '-2px -2px rgba(229, 229, 229, 0.2)'}}>
                    <button className="delete" onClick={()=>props.visibility.setVisibility(false)}></button>
                </div>
                <section className="modal-card-body">
                    <form>
                        <div className="field">
                            <label>Email</label>
                            <input type="email" className="input" />
                        </div>
                        <div className="field">
                            <label>password</label>
                            <input type="password" className="input" />
                        </div>
                        <div className="field">
                            <label>Confirm password</label>
                            <input type="password" className="input" />
                        </div>
                    </form>
                </section>
                <div className="modal-card-foot" style={{boxShadow: '2px 2px rgba(229, 229, 229, 0.5)'}}>
                    <button className="button "> Previous </button>
                    <button className="button is-success"> Next </button>
                </div>
            </div>
        </div>
    )
}

export default SignUpForm