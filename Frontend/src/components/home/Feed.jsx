import Composer from './Composer.jsx'
import PostCard from './PostCard.jsx'

const currentUserAvatar = 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=96&h=96&q=80'
const posts = [
  {
    author: 'Ahmad Khan',
    avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=96&h=96&q=80',
    time: '2 hours ago',
    copy: <>The beauty of nature never gets old. <span aria-label="mountains">🏔️</span> <span aria-label="love">❤️</span></>,
    image: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1200&h=800&q=85',
    imageAlt: 'Snow-capped mountains reflected in a turquoise alpine lake',
    likes: 24,
    commentCount: 3,
    currentUserAvatar,
    comments: [
      {
        name: 'Sara Rahimi',
        avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=96&h=96&q=80',
        message: <>Amazing view! <span aria-label="heart eyes">😍</span></>,
        time: '1h',
      },
      {
        name: 'Omid Farahi',
        avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=96&h=96&q=80',
        message: <>So peaceful! <span aria-label="sparkles">✨</span></>,
        time: '45m',
      },
    ],
  },
  {
    author: 'Zahra Mohammadi',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=96&h=96&q=80',
    time: '4 hours ago',
    copy: <>Good vibes only! <span aria-label="sun">☀️</span></>,
    image: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=1200&h=700&q=85',
    imageAlt: 'A cup of coffee on a sunny morning',
    imageClass: 'post-image-coffee',
    likes: 38,
    commentCount: 8,
  },
]

function Feed() {
  return (
    <section className="feed-column" aria-label="News feed">
      <Composer />
      {posts.map((post) => <PostCard key={post.author} post={post} />)}
    </section>
  )
}

export default Feed
