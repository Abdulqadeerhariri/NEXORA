import { useState } from 'react'
import Icon from '../../components/home/Icon.jsx'
import './Settings.css'

const settingsSections = [
  { id: 'account', label: 'Account', description: 'Edit your profile information', icon: 'user' },
  { id: 'security', label: 'Security', description: 'Password and security settings', icon: 'shield' },
  { id: 'privacy', label: 'Privacy', description: 'Control your privacy', icon: 'lock' },
  { id: 'notifications', label: 'Notifications', description: 'Manage notifications', icon: 'bell' },
  { id: 'appearance', label: 'Appearance', description: 'Light or dark mode', icon: 'palette' },
  { id: 'help', label: 'Help & Support', description: 'Get help and support', icon: 'help' },
]

function AccountSettings() {
  return (
    <section className="settings-panel" aria-labelledby="account-settings-heading">
      <div className="settings-panel-heading">
        <div>
          <h2 id="account-settings-heading">Account Information</h2>
          <p>Update your personal information and profile details.</p>
        </div>
      </div>
      <div className="settings-avatar-row">
        <img src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=160&h=160&q=85" alt="Ahmad Khan" />
        <div>
          <strong>Profile Photo</strong>
          <span>Choose a photo that represents you.</span>
        </div>
        <button type="button" className="change-photo-button">Change Photo</button>
      </div>
      <form className="account-form">
        <label>
          <span>Full Name</span>
          <input type="text" defaultValue="Ahmad Khan" />
        </label>
        <label>
          <span>Username</span>
          <input type="text" defaultValue="ahmadkhan" />
        </label>
        <label className="account-form-wide">
          <span>Bio</span>
          <textarea rows="3" defaultValue="Web Developer | Nature Lover | Dream Big" />
        </label>
        <button type="button" className="save-settings-button">Save Changes</button>
      </form>
    </section>
  )
}

function PreferenceSettings({ section }) {
  return (
    <section className="settings-panel" aria-labelledby="settings-section-heading">
      <div className="settings-panel-heading">
        <div>
          <h2 id="settings-section-heading">{section.label}</h2>
          <p>{section.description}.</p>
        </div>
      </div>
      <div className="settings-preference-list">
        {section.id === 'security' && (
          <>
            <div className="settings-preference"><div><strong>Password</strong><span>Keep your account secure with a strong password.</span></div><button type="button" className="settings-secondary-button">Change Password</button></div>
            <div className="settings-preference"><div><strong>Two-factor authentication</strong><span>Add an extra layer of security to your account.</span></div><button type="button" className="settings-toggle" aria-label="Enable two-factor authentication" /></div>
          </>
        )}
        {section.id === 'privacy' && (
          <>
            <div className="settings-preference"><div><strong>Private account</strong><span>Only approved followers can see your posts.</span></div><button type="button" className="settings-toggle" aria-label="Make account private" /></div>
            <div className="settings-preference"><div><strong>Activity status</strong><span>Let people see when you are active.</span></div><button type="button" className="settings-toggle is-on" aria-label="Show activity status" /></div>
          </>
        )}
        {section.id === 'notifications' && (
          <>
            <div className="settings-preference"><div><strong>Likes and comments</strong><span>Get notified about activity on your posts.</span></div><button type="button" className="settings-toggle is-on" aria-label="Enable likes and comments notifications" /></div>
            <div className="settings-preference"><div><strong>New followers</strong><span>Get notified when someone follows you.</span></div><button type="button" className="settings-toggle is-on" aria-label="Enable new follower notifications" /></div>
          </>
        )}
        {section.id === 'appearance' && (
          <div className="settings-preference"><div><strong>Color theme</strong><span>Choose the look that works best for you.</span></div><select aria-label="Color theme" defaultValue="light"><option value="light">Light</option><option value="dark">Dark</option></select></div>
        )}
        {section.id === 'help' && (
          <>
            <div className="settings-preference"><div><strong>Help Center</strong><span>Find answers to common questions.</span></div><button type="button" className="settings-secondary-button">Visit Help Center</button></div>
            <div className="settings-preference"><div><strong>Contact Support</strong><span>Reach out to our support team.</span></div><button type="button" className="settings-secondary-button">Contact Us</button></div>
          </>
        )}
      </div>
    </section>
  )
}

function Settings() {
  const [activeSection, setActiveSection] = useState('account')
  const section = settingsSections.find((item) => item.id === activeSection)

  return (
    <section className="settings-page" aria-label="Settings">
      <h1>Settings</h1>
      <div className="settings-layout">
        <nav className="settings-nav card" aria-label="Settings sections">
          {settingsSections.map((item) => (
            <button
              type="button"
              key={item.id}
              className={`settings-nav-item${activeSection === item.id ? ' active' : ''}`}
              onClick={() => setActiveSection(item.id)}
              aria-current={activeSection === item.id ? 'page' : undefined}
            >
              <Icon name={item.icon} size={17} />
              <span><strong>{item.label}</strong><small>{item.description}</small></span>
            </button>
          ))}
          <div className="settings-nav-divider" />
          <button type="button" className="settings-nav-item settings-logout">
            <Icon name="logout" size={17} />
            <span><strong>Logout</strong><small>Sign out from your account</small></span>
          </button>
        </nav>
        <div className="settings-content">
          {section?.id === 'account' ? <AccountSettings /> : <PreferenceSettings section={section} />}
        </div>
      </div>
    </section>
  )
}

export default Settings
