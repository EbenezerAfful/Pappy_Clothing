
import { useState,useContext } from "react";
import { auth,createUserDocumentFromAuth,signInWithGooglePopup,
    } from "../../Utils/firebase/firebase.utils";
import FormInput from "../Form-Input/Form-Input.component";
import './Sign-In-Form.styles.scss'
import Button from "../button/button.component";
import { UserContext } from "../../context/user.context";
import { GoogleAuthProvider } from "firebase/auth";
import { signInAuthUserWithEmailAndPassword } from "../../Utils/firebase/firebase.utils";

const defaultFormFields={
    email:'',
    password:''}

const SignInForm = ()=>{
    const [formFields, setFormFields]= useState(defaultFormFields);
    const{email,password} = formFields;

    const resetFormfields=()=>{setFormFields(defaultFormFields);};

    const signInWithGoogle = async()=>{
    const {user}= await signInWithGooglePopup();
    
    await createUserDocumentFromAuth(user);};
    

   

   const handleSubmit=async(event)=>{
    event.preventDefault();

    try { 
    const {user} = await signInAuthUserWithEmailAndPassword(email,password);
    alert('Sign In Succesful')

    resetFormfields();
    } catch (error) { if (error.code === 'auth/invalid-login-credentials'){alert('incorrect Email or Password')}
        console.log(error)}
};
 

    const handleChange=(event)=>{const {name ,value}=event.target;
    setFormFields({...formFields,[name]:value});}
   
        
        



    return(
        <div className="sign-up-container">
            <h2>Already have an account??</h2>
            <span>Sign In your email and password</span>
            <form onSubmit={handleSubmit}>
            <FormInput 
            label='Email' 
            type="email" 
            required onChange={handleChange} 
            name="email" 
            value={email}/>

            <FormInput 
            label='Password' 
            type="password" 
            required 
            onChange={handleChange} 
            name="password" 
            value={password}/>
            <div className="buttons-container">
             <Button type="submit">Sign In</Button>
             <Button buttonType="google" onClick={signInWithGoogle} >Google Sign In </Button>
            </div>
           
            </form>
            
        </div>
    )

}

export default SignInForm;