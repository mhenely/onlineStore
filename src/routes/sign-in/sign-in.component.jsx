import { signInWithGoolePopup, createUserDocumentFromAuth } from '../../utils/firebase/firebase.utils';

const SignIn = () => {

  const logGoogleUser = async() => {
    // getting user from firebase auth response 
    const { user } = await signInWithGoolePopup();
    console.log(user);
    createUserDocumentFromAuth(user)
  }
  return (
    <div>
      <h1>Sign In Here</h1>
      <button onClick={logGoogleUser}>Click to Sign in With Google</button>
    </div>

  )
}

export default SignIn;