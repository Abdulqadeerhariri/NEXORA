function SignUp() {
  return (
    <div className="auth-form-screen">
      <div className="auth-heading">
        <span className="auth-heading-kicker">YOUR STORY STARTS HERE</span>
        <h2>Create your account</h2>
        <p>Join NEXORA and connect with your people.</p>
      </div>

      <form className="auth-form auth-signup-form">
        <label className="auth-field">
          <span>Full name</span>
          <input type="text" name="name" placeholder="Your name" autoComplete="name" />
        </label>
        <label className="auth-field">
          <span>Email address</span>
          <input type="email" name="email" placeholder="you@example.com" autoComplete="email" />
        </label>
        <label className="auth-field">
          <span>Password</span>
          <input type="password" name="password" placeholder="Create a password" autoComplete="new-password" />
        </label>
        <label className="auth-checkbox auth-terms-check">
          <input type="checkbox" name="terms" />
          <span>I agree to the <a href="#terms">Terms of Service</a> and <a href="#privacy">Privacy Policy</a>.</span>
        </label>
        <button className="auth-submit" type="button">Create account</button>
      </form>

      <p className="auth-switch">Already have an account? <a href="/login">Sign in</a></p>
      <p className="auth-legal">Your community is waiting. It only takes a moment to get started.</p>
    </div>
  )
}

export default SignUp
