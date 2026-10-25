function GoogleMark() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24">
      <path fill="#4285F4" d="M21.35 12.23c0-.71-.06-1.39-.18-2.05H12v3.88h5.23a4.47 4.47 0 0 1-1.94 2.93v2.43h3.14c1.84-1.69 2.92-4.18 2.92-7.19Z" />
      <path fill="#34A853" d="M12 21.75c2.63 0 4.83-.87 6.44-2.33l-3.14-2.43c-.87.58-1.98.93-3.3.93-2.54 0-4.7-1.71-5.47-4.02H3.29v2.5A9.73 9.73 0 0 0 12 21.75Z" />
      <path fill="#FBBC05" d="M6.53 13.9a5.85 5.85 0 0 1 0-3.8V7.6H3.29a9.74 9.74 0 0 0 0 8.8l3.24-2.5Z" />
      <path fill="#EA4335" d="M12 6.08c1.43 0 2.71.49 3.72 1.46l2.79-2.79C16.82 3.17 14.62 2.25 12 2.25A9.73 9.73 0 0 0 3.29 7.6l3.24 2.5C7.3 7.79 9.46 6.08 12 6.08Z" />
    </svg>
  )
}

function Login() {
  return (
    <div className="auth-form-screen">
      <div className="auth-heading">
        <span className="auth-heading-kicker">WELCOME BACK</span>
        <h2>Sign in to NEXORA</h2>
        <p>Pick up right where you left off.</p>
      </div>

      <button className="auth-google-button" type="button">
        <GoogleMark />
        Continue with Google
      </button>

      <div className="auth-divider"><span>or continue with email</span></div>

      <form className="auth-form">
        <label className="auth-field">
          <span>Email address</span>
          <input type="email" name="email" placeholder="you@example.com" autoComplete="email" />
        </label>
        <label className="auth-field">
          <span>Password</span>
          <input type="password" name="password" placeholder="Enter your password" autoComplete="current-password" />
        </label>
        <div className="auth-form-options">
          <label className="auth-checkbox"><input type="checkbox" name="remember" /><span>Remember me</span></label>
          <a href="/forgot-password">Forgot password?</a>
        </div>
        <button className="auth-submit" type="button">Sign in</button>
      </form>

      <p className="auth-switch">New to NEXORA? <a href="/signup">Create an account</a></p>
      <p className="auth-legal">By continuing, you agree to our <a href="#terms">Terms of Service</a> and <a href="#privacy">Privacy Policy</a>.</p>
    </div>
  )
}

export default Login
