import Icon from '../Icon.jsx'
import './Header.css'

function BrandMark() {
  return (
    <svg className="brand-mark" viewBox="0 0 30 30" fill="none" aria-hidden="true">
      <path d="M3 4.5C3 2.8 5.1 2 6.3 3.2L24.8 22c1.3 1.3.4 3.5-1.4 3.5h-4.2L3 9.3V4.5Z" fill="currentColor" />
      <path d="M3 13.2 13.6 24c1 1 2.8.3 2.8-1.1V18L3 4.8v8.4Z" fill="currentColor" opacity=".72" />
      <path d="M19 3.8h5.6c1 0 1.8.8 1.8 1.8v6.8c0 1.6-1.9 2.4-3 1.2L19 9V3.8Z" fill="currentColor" opacity=".9" />
    </svg>
  )
}

function Header({ activePage }) {
  return (
    <header className="topbar">
      <a className="brand" href="#" aria-label="NEXORA home">
        <BrandMark />
        <span>NEXORA</span>
      </a>
      <label className="search-field">
        <Icon name="search" size={16} />
        <input aria-label="Search" placeholder="Search people, posts, or photos..." />
      </label>
      <div className="header-actions" aria-label="Quick navigation">
        <a className={`icon-button${activePage === 'Home' ? ' is-current' : ''}`} href="/" aria-label="Home">
          <Icon name="home" size={19} className={activePage === 'Home' ? 'filled' : ''} fill={activePage === 'Home' ? 'currentColor' : 'none'} />
        </a>
        <a className={`icon-button${activePage === 'Videos' ? ' is-current' : ''}`} href="/videos" aria-label="Videos">
          <Icon name="video" size={18} />
        </a>
        <a className={`icon-button${activePage === 'Notifications' ? ' is-current' : ''}`} href="/notifications" aria-label="Notifications">
          <Icon name="bell" size={18} />
          <span className="notification-dot">3</span>
        </a>
        <a className={`profile-menu${activePage === 'Profile' ? ' is-profile-current' : ''}`} href="/profile" aria-label="Your profile">
          <img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=96&h=96&q=80" alt="" />
          <span aria-hidden="true">⌄</span>
        </a>
      </div>
    </header>
  )
}

export default Header
