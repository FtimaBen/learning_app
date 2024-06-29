class VerifyFormat {
    constructor() {
        this.emailReg = /\S+@\S+\.\S+/
        this.passwordReg = /^[a-zA-Z0-9]{8,}/ 
    }
    
    isEmailFormatValid(event) {
        return this.emailReg.test(event.target.value)
    }
    
    isPasswordFormatValid(event) {
        return this.passwordReg.test(event.target.value)
    }
}

export { VerifyFormat };