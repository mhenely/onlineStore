import { useEffect } from 'react';
import { getRedirectResult } from 'firebase/auth';
import { auth, signInWithGoolePopup, 
  // signInWithGoogleRedirect, 
  createUserDocumentFromAuth } from '../../utils/firebase/firebase.utils';
import SignUpForm from '../../components/signUp-form/signUp-form';

const SignIn = () => {

  /*  how to work with google redirect rather than popup
     useEffect( () => {
       const getResponse = async () => {
        
         const response = await getRedirectResult(auth)
         if (response) {
           const userDocRef = await createUserDocumentFromAuth(response.user);
         }
       }
       getResponse();

     }, [])
  */
    
  const logGoogleUser = async() => {
    // getting user from firebase auth response 
    const { user } = await signInWithGoolePopup();
    console.log(user);
    createUserDocumentFromAuth(user)
  }

  return (
    <div>
      <h1>Sign In Here</h1>
      <button onClick={logGoogleUser}>Click to Sign in With Google Popup</button>
      <SignUpForm />
      {/* <button onClick={signInWithGoogleRedirect}>Click to Sign in With Google Redirect</button> */}
    </div>

  )
}

export default SignIn;