import React from 'react'
import FormInput from '../form-input/form-input.component'
import CustomButton from '../button/button.component'
import { auth, signInWithGoogle } from '../../firebase/firebase.util'
import './sign-in.style.scss'

class SignIn extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            email:'',
            password:''
        }
    }

    handleSubmit = async e => {
        e.preventDefault()
        const { email,password } = this.state
        try {
            await auth.signInWithEmailAndPassword(email,password)
            this.setState(
                {
                    email:'',
                    password:''
                }
            )
        } catch (error) {
            console.log(error)
        }
       
    }

    handleChange = e =>{
        const { value, name } = e.target
        this.setState({
            [name]:value
        })
    }

    render(){
        const {email,password} = this.state
        return(
            <div className="sign-in">
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput 
                        name="email" 
                        value={email} 
                        handleChange={this.handleChange} 
                        type="text" 
                        label="Email" 
                        required/>
                    <FormInput 
                        name="password" 
                        value={password} 
                        handleChange={this.handleChange} 
                        type="password" 
                        label="Password" 
                        required/>
                    <div className='buttons'>
                        <CustomButton>Sign in</CustomButton>
                        <CustomButton onClick={signInWithGoogle} isGoogleSignIn>Sign in with Google</CustomButton>
                    </div>
                </form>
            </div>
        )
    }
}

export default SignIn