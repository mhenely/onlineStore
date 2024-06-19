import { useState } from "react";
import { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth } from "../../utils/firebase/firebase.utils.js";
import FormInput from "../form-input/form-imput";
import Button from "../button/button.component";


import {SignUpContainer} from './signUp-form.styles.jsx';

const defaultFormFields = {
  displayName: '',
  email: '',
  password: '',
  confirmPassword: ''
}

const SignUpForm = () => {
  const [ formFields, setFormFields ] = useState(defaultFormFields);
  const { displayName, email, password, confirmPassword } = formFields;


  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  }
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormFields({...formFields, [name]: value})
  }

  const handleSubmit = async(e) => {
    e.preventDefault();
    // check matching password
    if (password !== confirmPassword) {
      alert('Passwords do not match');
      return;
    }
    
    try {
      const {user} = await createAuthUserWithEmailAndPassword(email, password);
      await createUserDocumentFromAuth(user, { displayName })
      resetFormFields();

    }
    catch (error) {
      console.log('error while creating user with email and password', error.message);
      if (error.code === 'auth/email-already-in-use') {
        alert('Cannot create new user; email already in use ')
      }
    }
  }

  return (
    <SignUpContainer>
      <h2>Don't have an account?</h2>
      <span>Sign up with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput label="Display Name" type="text" required onChange={handleChange} name="displayName" value={displayName}/>
        <FormInput label="Email" type="email" required onChange={handleChange} name="email" value={email}/>
        <FormInput label="Password" type="password" required onChange={handleChange} name="password" value={password}/>
        <FormInput label="Confirm Password" type="password" required onChange={handleChange} name="confirmPassword" value={confirmPassword}/>
        <Button type="submit">Sign Up</Button>
      </form>
    </SignUpContainer>
  )
}


export default SignUpForm;