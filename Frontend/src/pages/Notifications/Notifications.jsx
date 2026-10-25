import { useState } from 'react'
import Icon from '../../components/home/Icon.jsx'
import './Notifications.css'

const filters = ['All', 'Likes', 'Comments', 'Follows', 'Mentions']

const notifications = [
  {
    id: 'sara-like',
    type: 'Likes',
    person: 'Sara Rahimi',
    action: 'liked your photo',
    detail: 'Beautiful view! ❤️',
    time: '2m ago',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=96&h=96&q=80',
    image: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=120&h=90&q=80',
    icon: 'heart',
    color: 'pink',
    unread: true,
  },
  {
    id: 'omid-comment',
    type: 'Comments',
    person: 'Omid Farahi',
    action: 'commented on your post',
    detail: 'Amazing picture!',
    time: '12m ago',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=96&h=96&q=80',
    image: 'https://images.unsplash.com/photo-1519501025264-65ba15a82390?auto=format&fit=crop&w=120&h=90&q=80',
    icon: 'comment',
    color: 'blue',
    unread: true,
  },
  {
    id: 'fatima-follow',
    type: 'Follows',
    person: 'Fatima Noori',
    action: 'started following you',
    time: '3h ago',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=96&h=96&q=80',
    icon: 'user',
    color: 'green',
  },
  {
    id: 'ahmad-video',
    type: 'Likes',
    person: 'Ahmad Khan',
    action: 'liked your video',
    detail: 'Great video! 👍',
    time: '5h ago',
    avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=96&h=96&q=80',
    image: 'https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=120&h=90&q=80',
    icon: 'heart',
    color: 'pink',
  },
  {
    id: 'laila-comment',
    type: 'Comments',
    person: 'Laila Safi',
    action: 'commented on your post',
    detail: 'So beautiful! ✨',
    time: '6h ago',
    avatar: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=96&h=96&q=80',
    image: 'https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=120&h=90&q=80',
    icon: 'comment',
    color: 'blue',
  },
  {
    id: 'bilal-like',
    type: 'Likes',
    person: 'Bilal Ahmad and 2 others',
    action: 'liked your photo',
    time: '7h ago',
    avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=96&h=96&q=80',
    image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=120&h=90&q=80',
    icon: 'heart',
    color: 'pink',
  },
  {
    id: 'zahra-mention',
    type: 'Mentions',
    person: 'Zahra Mohammadi',
    action: 'mentioned you in a comment',
    detail: '@ahmad That’s awesome!',
    time: '1d ago',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=96&h=96&q=80',
    image: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=120&h=90&q=80',
    icon: 'mention',
    color: 'purple',
  },
  {
    id: 'ayesha-follow',
    type: 'Follows',
    person: 'Ayesha Khan',
    action: 'started following you',
    time: '1d ago',
    avatar: 'https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?auto=format&fit=crop&w=96&h=96&q=80',
    icon: 'user',
    color: 'green',
  },
]

function NotificationIcon({ name, size = 15 }) {
  if (name === 'mention') {
    return <span className="notification-mention-icon" aria-hidden="true">@</span>
  }
  return <Icon name={name} size={size} />
}

function NotificationRow({ notification }) {
  return (
    <article className={`notification-row${notification.unread ? ' is-unread' : ''}`}>
      <div className={`notification-type-icon ${notification.color}`}>
        <NotificationIcon name={notification.icon} size={14} />
      </div>
      <img className="notification-avatar" src={notification.avatar} alt="" />
      <div className="notification-message">
        <p><strong>{notification.person}</strong> {notification.action}</p>
        {notification.detail && <span>{notification.detail}</span>}
      </div>
      <time className="notification-time">{notification.time}</time>
      {notification.image && <img className="notification-thumbnail" src={notification.image} alt="" />}
      <button className="notification-more" type="button" aria-label={`More options for ${notification.person} notification`}>
        <Icon name="more" size={16} />
      </button>
      {notification.unread && <span className="notification-unread-dot" aria-label="Unread" />}
    </article>
  )
}

function Notifications() {
  const [activeFilter, setActiveFilter] = useState('All')
  const visibleNotifications = notifications.filter((notification) => (
    activeFilter === 'All' || notification.type === activeFilter
  ))

  return (
    <section className="notifications-page" aria-label="Notifications">
      <h1>Notifications</h1>
      <section className="card notifications-card">
        <nav className="notification-filters" aria-label="Filter notifications">
          {filters.map((filter) => (
            <button
              type="button"
              key={filter}
              className={`notification-filter${activeFilter === filter ? ' active' : ''}`}
              onClick={() => setActiveFilter(filter)}
              aria-pressed={activeFilter === filter}
            >
              {filter}
            </button>
          ))}
        </nav>
        <div className="notification-list" aria-live="polite">
          {visibleNotifications.length ? (
            visibleNotifications.map((notification) => (
              <NotificationRow key={notification.id} notification={notification} />
            ))
          ) : (
            <p className="notification-empty">You’re all caught up. No notifications in this category.</p>
          )}
        </div>
      </section>
    </section>
  )
}

export default Notifications
