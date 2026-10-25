import { useEffect } from 'react'
import Header from './components/home/header/Header.jsx'
import Sidebar from './components/home/sidebar/Sidebar.jsx'
import Home from './pages/Home/Home.jsx'
import Videos from './pages/Videos/Videos.jsx'
import Profile from './pages/Profile/Profile.jsx'
import Settings from './pages/Settings/Settings.jsx'
import Explore from './pages/Explore/Explore.jsx'
import Notifications from './pages/Notifications/Notifications.jsx'
import Saved from './pages/Saved/Saved.jsx'

function App() {
  const activePage = {
    '/videos': 'Videos',
    '/profile': 'Profile',
    '/settings': 'Settings',
    '/explore': 'Explore',
    '/notifications': 'Notifications',
    '/saved': 'Saved Posts',
  }[window.location.pathname] ?? 'Home'

  useEffect(() => {
    document.title = `NEXORA | ${activePage}`
  }, [activePage])

  return (
    <div className="app-shell">
      <Header activePage={activePage} />
      <div className="page-layout">
        <Sidebar activePage={activePage} />
        <main className={`main-content${activePage === 'Videos' ? ' video-main' : ''}${activePage === 'Profile' ? ' profile-main' : ''}${activePage === 'Settings' ? ' settings-main' : ''}${activePage === 'Explore' ? ' explore-main' : ''}${activePage === 'Notifications' ? ' notifications-main' : ''}${activePage === 'Saved Posts' ? ' saved-main' : ''}`}>
          {activePage === 'Videos' ? (
            <Videos />
          ) : activePage === 'Profile' ? (
            <Profile />
          ) : activePage === 'Settings' ? (
            <Settings />
          ) : activePage === 'Explore' ? (
            <Explore />
          ) : activePage === 'Notifications' ? (
            <Notifications />
          ) : activePage === 'Saved Posts' ? (
            <Saved />
          ) : (
            <Home />
          )}
        </main>
      </div>
    </div>
  )
}

export default App
