import { useState } from 'react'
import Icon from '../../components/home/Icon.jsx'
import './Explore.css'

const categories = ['All', 'People', 'Photos', 'Videos', 'Pages']

const people = [
  { name: 'Sara Rahimi', mutual: '12 mutual friends', avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&h=120&q=80' },
  { name: 'Omid Farahi', mutual: '8 mutual friends', avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=120&h=120&q=80' },
  { name: 'Fatima Noori', mutual: '5 mutual friends', avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=120&h=120&q=80' },
  { name: 'Bilal Ahmad', mutual: '10 mutual friends', avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=120&h=120&q=80' },
  { name: 'Laila Safi', mutual: '7 mutual friends', avatar: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=120&h=120&q=80' },
]

const popularPosts = [
  {
    author: 'Zahra Mohammadi',
    time: '2 hours ago',
    caption: 'Nature always heals the soul. 💚',
    likes: '245',
    comments: '32',
    image: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=600&h=420&q=85',
    alt: 'Mountain lake beneath a blue sky',
    category: 'Photos',
  },
  {
    author: 'Ahmad Khan',
    time: '5 hours ago',
    caption: 'Beautiful city view from the top. 🌆',
    likes: '412',
    comments: '56',
    image: 'https://images.unsplash.com/photo-1519501025264-65ba15a82390?auto=format&fit=crop&w=600&h=420&q=85',
    alt: 'City skyline at sunset',
    category: 'Videos',
  },
  {
    author: 'Sara Rahimi',
    time: '7 hours ago',
    caption: 'Good coffee, better mood. ☕',
    likes: '320',
    comments: '44',
    image: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=600&h=420&q=85',
    alt: 'Cup of coffee on a table',
    category: 'Photos',
  },
  {
    author: 'Omid Farahi',
    time: '9 hours ago',
    caption: 'A little escape into the mountains. 🏔️',
    likes: '186',
    comments: '28',
    image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=600&h=420&q=85',
    alt: 'Mountain peaks under a clear sky',
    category: 'Photos',
  },
]

const trendingTopics = [
  { tag: '#Nature', posts: '12.5K posts' },
  { tag: '#Travel', posts: '8.3K posts' },
  { tag: '#Photography', posts: '6.7K posts' },
  { tag: '#Lifestyle', posts: '5.2K posts' },
  { tag: '#Food', posts: '4.1K posts' },
]

const recentlyViewed = [
  { name: 'Sara Rahimi', avatar: people[0].avatar },
  { name: 'Omid Farahi', avatar: people[1].avatar },
  { name: 'Fatima Noori', avatar: people[2].avatar },
  { name: 'Bilal Ahmad', avatar: people[3].avatar },
]

function PeopleSuggestions() {
  return (
    <section className="explore-section" aria-labelledby="people-heading">
      <div className="explore-section-heading">
        <h2 id="people-heading">People You May Know</h2>
        <button type="button" className="explore-text-link">See All</button>
      </div>
      <div className="explore-people-grid">
        {people.map((person) => (
          <article className="explore-person-card" key={person.name}>
            <button type="button" className="explore-person-more" aria-label={`More about ${person.name}`}><Icon name="more" size={15} /></button>
            <img src={person.avatar} alt="" />
            <strong>{person.name}</strong>
            <span>{person.mutual}</span>
            <button type="button" className="explore-follow-button">Follow</button>
          </article>
        ))}
      </div>
    </section>
  )
}

function PopularPosts({ filter }) {
  const posts = popularPosts.filter((post) => filter === 'All' || filter === 'People' || filter === 'Pages' || post.category === filter)

  return (
    <section className="explore-section popular-section" aria-labelledby="popular-heading">
      <div className="explore-section-heading">
        <h2 id="popular-heading">Popular Posts</h2>
        <button type="button" className="explore-text-link">See All</button>
      </div>
      {filter === 'Pages' ? (
        <p className="explore-empty-state">No popular pages to show right now.</p>
      ) : (
        <div className="explore-popular-grid">
          {posts.map((post) => (
            <article className="explore-post-card" key={post.author + post.caption}>
              <div className="explore-post-image-wrap">
                <img src={post.image} alt={post.alt} />
                {post.category === 'Videos' && <span className="explore-video-badge"><Icon name="play" size={12} /></span>}
                <button type="button" className="explore-post-more" aria-label={`More options for ${post.caption}`}><Icon name="more" size={15} /></button>
              </div>
              <div className="explore-post-author">
                <img src={people.find((person) => person.name === post.author)?.avatar ?? people[0].avatar} alt="" />
                <div><strong>{post.author}</strong><span>{post.time}</span></div>
                <button type="button" aria-label={`More about ${post.author}`}><Icon name="more" size={14} /></button>
              </div>
              <p>{post.caption}</p>
              <div className="explore-post-stats">
                <span><Icon name="heart" size={12} />{post.likes}</span>
                <span><Icon name="comment" size={12} />{post.comments}</span>
                <button type="button" aria-label="Save post"><Icon name="bookmark" size={13} /></button>
              </div>
            </article>
          ))}
        </div>
      )}
    </section>
  )
}

function ExploreSidebar({ hasRecentlyViewed, onClear }) {
  return (
    <aside className="explore-right-column" aria-label="Explore sidebar">
      <section className="card explore-trending-card">
        <div className="explore-section-heading">
          <h2>Trending Topics</h2>
          <Icon name="trend" size={15} />
        </div>
        <div className="explore-trending-list">
          {trendingTopics.map((topic) => (
            <button className="explore-trending-topic" type="button" key={topic.tag}>
              <span><strong>{topic.tag}</strong><small>{topic.posts}</small></span>
              <Icon name="chevron" size={13} />
            </button>
          ))}
        </div>
      </section>
      <section className="card explore-recent-card">
        <div className="explore-section-heading">
          <h2>Recently Viewed</h2>
          <button type="button" className="explore-text-link" onClick={onClear}>Clear</button>
        </div>
        {hasRecentlyViewed ? (
          <div className="explore-recent-list">
            {recentlyViewed.map((person) => (
              <div className="explore-recent-person" key={person.name}>
                <img src={person.avatar} alt="" />
                <strong>{person.name}</strong>
              </div>
            ))}
          </div>
        ) : (
          <p className="explore-recent-empty">No recently viewed profiles.</p>
        )}
      </section>
    </aside>
  )
}

function Explore() {
  const [activeCategory, setActiveCategory] = useState('All')
  const [showTrending, setShowTrending] = useState(false)
  const [hasRecentlyViewed, setHasRecentlyViewed] = useState(true)

  return (
    <section className="explore-page" aria-label="Explore">
      <div className="explore-content-column">
        <header className="explore-page-heading">
          <h1>Explore</h1>
          <button type="button" className="explore-trending-filter" onClick={() => setShowTrending((visible) => !visible)} aria-expanded={showTrending}>
            <Icon name="trend" size={13} /> Trending <Icon name="chevron" size={12} />
          </button>
        </header>
        {showTrending && <p className="explore-filter-note">Showing popular people and posts from the community.</p>}
        <nav className="explore-category-tabs" aria-label="Explore categories">
          {categories.map((category) => (
            <button
              type="button"
              className={`explore-category-tab${activeCategory === category ? ' active' : ''}`}
              key={category}
              onClick={() => setActiveCategory(category)}
              aria-pressed={activeCategory === category}
            >
              {category}
            </button>
          ))}
        </nav>
        {(activeCategory === 'All' || activeCategory === 'People') && <PeopleSuggestions />}
        {activeCategory !== 'People' && <PopularPosts filter={activeCategory} />}
      </div>
      <ExploreSidebar hasRecentlyViewed={hasRecentlyViewed} onClear={() => setHasRecentlyViewed(false)} />
      {!hasRecentlyViewed && <span className="sr-only" aria-live="polite">Recently viewed list cleared.</span>}
    </section>
  )
}

export default Explore
