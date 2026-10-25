import { useState } from 'react'
import Icon from '../../components/home/Icon.jsx'
import './Saved.css'

const savedPosts = [
  {
    id: 'mountain-lake',
    type: 'photo',
    author: 'Zahra Mohammadi',
    time: '2 days ago',
    caption: 'Nature is the best therapy. 💚💙',
    likes: '245',
    comments: '32',
    image: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=720&h=440&q=85',
    alt: 'Clear mountain lake with peaks in the background',
  },
  {
    id: 'city-evening',
    type: 'photo',
    author: 'Ahmad Khan',
    time: '3 days ago',
    caption: 'Somewhere in the city. 🌆',
    likes: '412',
    comments: '56',
    image: 'https://images.unsplash.com/photo-1519501025264-65ba15a82390?auto=format&fit=crop&w=720&h=440&q=85',
    alt: 'City skyline glowing at sunset',
  },
  {
    id: 'forest-path',
    type: 'video',
    author: 'Sara Rahimi',
    time: '5 days ago',
    caption: 'Peaceful morning walk. 🌿',
    likes: '320',
    comments: '44',
    image: 'https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=720&h=440&q=85',
    alt: 'Sunlight shining along a green forest path',
    duration: '0:28',
  },
  {
    id: 'morning-coffee',
    type: 'photo',
    author: 'Omid Farahi',
    time: '6 days ago',
    caption: 'Good coffee, better mood. ☕',
    likes: '198',
    comments: '21',
    image: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=720&h=440&q=85',
    alt: 'Coffee with a mountain view',
  },
  {
    id: 'alpine-view',
    type: 'video',
    author: 'Laila Safi',
    time: '1 week ago',
    caption: 'A view worth remembering. 🏔️',
    likes: '286',
    comments: '39',
    image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=720&h=440&q=85',
    alt: 'Snow-covered mountain peaks',
    duration: '1:12',
  },
  {
    id: 'mountain-reflection',
    type: 'photo',
    author: 'Fatima Noori',
    time: '1 week ago',
    caption: 'A little quiet makes a big difference. ✨',
    likes: '174',
    comments: '18',
    image: 'https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=720&h=440&q=85',
    alt: 'Mountain landscape reflected in a lake',
  },
  {
    id: 'city-architecture',
    type: 'photo',
    author: 'Bilal Ahmad',
    time: '2 weeks ago',
    caption: 'Beautiful details around every corner.',
    likes: '209',
    comments: '27',
    image: 'https://images.unsplash.com/photo-1511818966892-d7d671e672a2?auto=format&fit=crop&w=720&h=440&q=85',
    alt: 'Historic city architecture beneath a bright sky',
  },
  {
    id: 'sunset-beach',
    type: 'photo',
    author: 'Ayesha Khan',
    time: '2 weeks ago',
    caption: 'Chasing the last light of the day. 🌅',
    likes: '367',
    comments: '41',
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=720&h=440&q=85',
    alt: 'Warm sunset over a beach',
  },
]

const authors = {
  'Zahra Mohammadi': 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=96&h=96&q=80',
  'Ahmad Khan': 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=96&h=96&q=80',
  'Sara Rahimi': 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=96&h=96&q=80',
  'Omid Farahi': 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=96&h=96&q=80',
  'Laila Safi': 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=96&h=96&q=80',
  'Fatima Noori': 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=96&h=96&q=80',
  'Bilal Ahmad': 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=96&h=96&q=80',
  'Ayesha Khan': 'https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?auto=format&fit=crop&w=96&h=96&q=80',
}

function SavedPostCard({ post }) {
  return (
    <article className="saved-post-card">
      <div className="saved-post-image-wrap">
        <img src={post.image} alt={post.alt} />
        {post.type === 'video' && (
          <>
            <span className="saved-video-play"><Icon name="playCircle" size={34} /></span>
            <span className="saved-video-duration">{post.duration}</span>
          </>
        )}
        <button type="button" className="saved-post-unsave" aria-label={`Remove ${post.author}'s post from saved posts`}>
          <Icon name="bookmark" size={14} fill="currentColor" />
        </button>
      </div>
      <div className="saved-post-info">
        <div className="saved-post-author">
          <img src={authors[post.author]} alt="" />
          <div><strong>{post.author}</strong><span>{post.time}</span></div>
          <button type="button" aria-label={`More options for ${post.author}'s post`}><Icon name="more" size={14} /></button>
        </div>
        <p>{post.caption}</p>
        <div className="saved-post-stats">
          <span><Icon name="heart" size={12} />{post.likes}</span>
          <span><Icon name="comment" size={12} />{post.comments}</span>
          <span className="saved-post-kind">{post.type === 'video' ? 'Video' : 'Photo'}</span>
        </div>
      </div>
    </article>
  )
}

function Saved() {
  const [activeType, setActiveType] = useState('photo')
  const visiblePosts = savedPosts.filter((post) => post.type === activeType)

  return (
    <section className="saved-page" aria-label="Saved Posts">
      <header className="saved-page-heading">
        <div>
          <h1>Saved Posts</h1>
          <p>Your saved photos and videos, all in one place.</p>
        </div>
      </header>
      <nav className="saved-type-tabs" aria-label="Saved post type">
        {['photo', 'video'].map((type) => (
          <button
            type="button"
            className={`saved-type-tab${activeType === type ? ' active' : ''}`}
            key={type}
            onClick={() => setActiveType(type)}
            aria-pressed={activeType === type}
          >
            <Icon name={type === 'photo' ? 'photo' : 'play'} size={13} />
            {type === 'photo' ? 'Photos' : 'Videos'}
          </button>
        ))}
      </nav>
      <div className="saved-post-grid" aria-live="polite">
        {visiblePosts.length ? (
          visiblePosts.map((post) => <SavedPostCard key={post.id} post={post} />)
        ) : (
          <p className="saved-empty-state">No saved {activeType}s to show.</p>
        )}
      </div>
    </section>
  )
}

export default Saved
