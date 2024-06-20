import { useState } from "react";
import { useDispatch } from "react-redux";
import { signInAuthUserwithEmailAndPassword, createUserDocumentFromAuth, signInWithGooglePopup } from "../../utils/firebase/firebase.utils.js";
import FormInput from "../form-input/form-imput";
import Button, {BUTTON_TYPE_CLASSES} from "../button/button.component";
import {ButtonsContainer, SignInContainer} from './signIn-form.styles.jsx';
import { emailSignInStart, googleSignInStart } from "../../store/user/user.action.js";


const defaultFormFields = {
  email: '',
  password: ''
}

const SignInForm = () => {
  const [ formFields, setFormFields ] = useState(defaultFormFields);
  const { email, password } = formFields;

  const dispatch = useDispatch();

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  }

  // with saga
  const signInWithGoogle = async() => {
    dispatch(googleSignInStart());
  }

  // without saga
  // const signInWithGoogle = async() => {
  //   await signInWithGoolePopup();
  // }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormFields({...formFields, [name]: value})
  }

  const handleSubmit = async(e) => {
    e.preventDefault();
    
    // with saga

    try {
      dispatch(emailSignInStart(email, password));
      resetFormFields();
    }
    catch(error) {
      console.log('USER SIGN IN FAILED', error)
    }

    // without saga
    // try {
    //   const {user} = await signInAuthUserwithEmailAndPassword(email, password)
    //   resetFormFields();
    // }
    // catch (error) {
    //   switch (error.code) {
    //     case 'auth/wrong-password':
    //       alert('Incorrect email and password combination')
    //       break;
    //     case 'auth/user-not-found':
    //       alert('No user associated with this email');
    //       break;
    //     default:
    //       console.log(error);
    //   }
    // }
  }

  return (
    <SignInContainer>
      <h2>Already have an account?</h2>
      <span>Sign in with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput label="Email" type="email" required onChange={handleChange} name="email" value={email}/>
        <FormInput label="Password" type="password" required onChange={handleChange} name="password" value={password}/>
        <ButtonsContainer>
          <Button type="submit">Sign In</Button>
          <Button type="button" buttonType={BUTTON_TYPE_CLASSES.google} onClick={signInWithGoogle}>Google Sign In</Button>
        </ButtonsContainer>
      </form>
    </SignInContainer>
  )
}


export default SignInForm;