function MailIllustration() {
  return (
    <div className="auth-step-icon" aria-hidden="true">
      <svg viewBox="0 0 48 48" fill="none">
        <rect x="7" y="11" width="34" height="26" rx="6" />
        <path d="m9 15 15 11 15-11" />
        <path d="m16 22-7 8m23-8 7 8" />
      </svg>
    </div>
  )
}

function ForgotPassword() {
  return (
    <div className="auth-form-screen auth-flow-screen">
      <MailIllustration />
      <div className="auth-heading">
        <span className="auth-heading-kicker">ACCOUNT RECOVERY</span>
        <h2>Forgot your password?</h2>
        <p>No worries. Enter the email linked to your account and we’ll help you reset it.</p>
      </div>

      <form className="auth-form">
        <label className="auth-field">
          <span>Email address</span>
          <input type="email" name="email" placeholder="you@example.com" autoComplete="email" />
        </label>
        <button className="auth-submit" type="button">Send reset link</button>
      </form>

      <a className="auth-back-link" href="/login"><span aria-hidden="true">←</span> Back to sign in</a>
    </div>
  )
}

export default ForgotPassword
