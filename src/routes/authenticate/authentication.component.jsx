import SignUpForm from '../../components/signUp-form/signUp-form';
import SignInForm from '../../components/signIn-form/signIn-form';
import {AuthenticationContainer} from './authentication.styles.jsx'


const Authentication = () => {

  return (
    <AuthenticationContainer>
      <SignInForm />
      <SignUpForm />
    </AuthenticationContainer>

  )
}

export default Authentication;