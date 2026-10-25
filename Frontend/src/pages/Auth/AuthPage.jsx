import AuthLayout from './AuthLayout.jsx'
import EmailVerification from './EmailVerification.jsx'
import ForgotPassword from './ForgotPassword.jsx'
import Login from './Login.jsx'
import SignUp from './SignUp.jsx'

function AuthPage({ page }) {
  const screens = {
    Login: <Login />,
    'Sign Up': <SignUp />,
    'Forgot Password': <ForgotPassword />,
    'Email Verification': <EmailVerification />,
  }

  return <AuthLayout>{screens[page]}</AuthLayout>
}

export default AuthPage
