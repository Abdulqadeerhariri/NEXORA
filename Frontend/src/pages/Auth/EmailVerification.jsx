function EmailIllustration() {
  return (
    <div className="auth-step-icon auth-verify-icon" aria-hidden="true">
      <svg viewBox="0 0 48 48" fill="none">
        <rect x="7" y="11" width="34" height="26" rx="6" />
        <path d="m9 15 15 11 15-11" />
        <circle cx="36" cy="34" r="8" />
        <path d="m32.5 34 2.3 2.3 4.3-4.6" />
      </svg>
    </div>
  )
}

function EmailVerification() {
  return (
    <div className="auth-form-screen auth-flow-screen">
      <EmailIllustration />
      <div className="auth-heading">
        <span className="auth-heading-kicker">ONE LAST STEP</span>
        <h2>Check your email</h2>
        <p>We’ve sent a verification link to your email address. Open it to finish setting up your account.</p>
      </div>

      <div className="auth-verification-tip">
        <span className="auth-tip-check" aria-hidden="true">✓</span>
        <p>Can’t find the email? Check your spam folder or make sure you entered the right address.</p>
      </div>
      <button className="auth-submit" type="button">Resend verification email</button>
      <a className="auth-back-link" href="/signup"><span aria-hidden="true">←</span> Back to sign up</a>
    </div>
  )
}

export default EmailVerification
