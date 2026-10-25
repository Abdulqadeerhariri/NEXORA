import { useState } from 'react'
import Icon from '../../components/home/Icon.jsx'
import PostCard from '../../components/home/PostCard.jsx'
import AboutCard from '../../components/profile/AboutCard.jsx'
import FriendsCard from '../../components/profile/FriendsCard.jsx'
import ProfileHeader, { profileAvatar } from '../../components/profile/ProfileHeader.jsx'
import './Profile.css'

const profilePosts = [
  {
    id: 'mountain-morning',
    uploadedAt: '2026-10-25T09:10:00+04:30',
    time: '1 hour ago',
    type: 'photo',
    copy: <>A little fresh air and a beautiful view. This is my kind of morning. <span aria-label="mountains">🏔️</span></>,
    image: 'https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=1200&h=800&q=85',
    imageAlt: 'A quiet alpine lake framed by mountains',
    likes: 42,
    commentCount: 8,
  },
  {
    id: 'weekend-road',
    uploadedAt: '2026-10-24T18:25:00+04:30',
    time: '17 hours ago',
    type: 'video',
    duration: '0:38',
    copy: <>A quiet road, good music, and nowhere else to be. <span aria-label="sun">☀️</span></>,
    image: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&h=800&q=85',
    imageAlt: 'A winding road through a green landscape',
    likes: 36,
    commentCount: 5,
  },
  {
    id: 'coffee-break',
    uploadedAt: '2026-10-22T12:00:00+04:30',
    time: '3 days ago',
    type: 'photo',
    copy: <>Taking a moment to slow down and enjoy the little things. <span aria-label="coffee">☕</span></>,
    image: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=1200&h=800&q=85',
    imageAlt: 'Coffee on a table in the morning light',
    likes: 28,
    commentCount: 4,
    imageClass: 'post-image-coffee',
  },
  {
    id: 'city-evening',
    uploadedAt: '2026-10-20T16:45:00+04:30',
    time: '5 days ago',
    type: 'photo',
    copy: <>Golden hour makes every city feel a little magical. <span aria-label="city">🌇</span></>,
    image: 'https://images.unsplash.com/photo-1519501025264-65ba15a82390?auto=format&fit=crop&w=1200&h=800&q=85',
    imageAlt: 'City skyline glowing at sunset',
    likes: 53,
    commentCount: 11,
  },
  {
    id: 'forest-walk',
    uploadedAt: '2026-10-18T08:30:00+04:30',
    time: '1 week ago',
    type: 'video',
    duration: '1:12',
    copy: <>A peaceful walk through the forest. Nature always helps me reset. <span aria-label="leaf">🌿</span></>,
    image: 'https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=1200&h=800&q=85',
    imageAlt: 'Sunlight filtering through a forest',
    likes: 61,
    commentCount: 9,
  },
]

const postFilters = [
  { id: 'all', label: 'All Posts', icon: 'grid' },
  { id: 'photo', label: 'Photo Posts', icon: 'photo' },
  { id: 'video', label: 'Video Posts', icon: 'play' },
]

function ProfilePage() {
  const [activeFilter, setActiveFilter] = useState('all')
  const sortedPosts = [...profilePosts]
    .filter((post) => activeFilter === 'all' || post.type === activeFilter)
    .sort((postA, postB) => Date.parse(postB.uploadedAt) - Date.parse(postA.uploadedAt))

  return (
    <section className="profile-page" aria-label="Profile">
      <div className="profile-left-column">
        <ProfileHeader />
        <section className="card profile-posts-section">
          <nav className="profile-post-tabs" aria-label="Filter profile posts">
            {postFilters.map((filter) => (
              <button
                className={`profile-post-tab${activeFilter === filter.id ? ' selected' : ''}`}
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                aria-pressed={activeFilter === filter.id}
              >
                <Icon name={filter.icon} size={16} />
                {filter.label}
              </button>
            ))}
          </nav>
          <div className="profile-post-feed" aria-live="polite">
            {sortedPosts.length ? (
              sortedPosts.map((post) => (
                <PostCard
                  key={post.id}
                  post={{
                    ...post,
                    author: 'Ahmad Khan',
                    avatar: profileAvatar,
                    isVideo: post.type === 'video',
                  }}
                />
              ))
            ) : (
              <p className="profile-empty-state">No posts to show yet.</p>
            )}
          </div>
        </section>
      </div>
      <aside className="profile-right-column" aria-label="Profile information">
        <AboutCard />
        <FriendsCard />
      </aside>
    </section>
  )
}

export default ProfilePage
