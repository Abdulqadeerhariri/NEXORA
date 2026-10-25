import Icon from '../Icon.jsx'
import './Sidebar.css'

const navigation = [
  { label: 'Home', icon: 'home', href: '/' },
  { label: 'Videos', icon: 'video', href: '/videos' },
  { label: 'Explore', icon: 'search', href: '/explore' },
  { label: 'Notifications', icon: 'bell', count: '3', href: '/notifications' },
  { label: 'Saved Posts', icon: 'bookmark', href: '/saved' },
  { label: 'Profile', icon: 'user', href: '/profile' },
  { label: 'Settings', icon: 'settings', href: '/settings' },
]

function Sidebar({ activePage }) {
  return (
    <aside className="sidebar">
      <nav className="side-nav" aria-label="Main navigation">
        {navigation.map((item) => (
          item.href ? (
            <a
              key={item.label}
              className={`nav-item${activePage === item.label ? ' active' : ''}`}
              href={item.href}
              aria-current={activePage === item.label ? 'page' : undefined}
            >
              <Icon name={item.icon} size={19} className={activePage === item.label && item.label === 'Home' ? 'filled' : ''} fill={activePage === item.label && item.label === 'Home' ? 'currentColor' : 'none'} />
              <span>{item.label}</span>
              {item.count && <span className="nav-count">{item.count}</span>}
            </a>
          ) : (
            <button key={item.label} className="nav-item">
              <Icon name={item.icon} size={19} />
              <span>{item.label}</span>
              {item.count && <span className="nav-count">{item.count}</span>}
            </button>
          )
        ))}
      </nav>
    </aside>
  )
}

export default Sidebar
