import SignUpForm from '../../components/signUp-form/signUp-form';
import SignInForm from '../../components/signIn-form/signIn-form';
import './authentication.styles.scss'


const Authentication = () => {

  return (
    <div className='authentication-container'>
      <SignInForm />
      <SignUpForm />
    </div>

  )
}

export default Authentication;