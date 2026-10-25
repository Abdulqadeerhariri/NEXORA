import Icon from '../../components/home/Icon.jsx'
import VideoCard from '../../components/videos/VideoCard.jsx'
import './Videos.css'

const videos = [
  {
    title: 'Mountain Adventures',
    creator: 'Omid Farahi',
    time: '1 hour ago',
    views: '4.2K',
    likes: '342',
    duration: '2:56',
    image: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=900&h=540&q=85',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=96&h=96&q=80',
  },
  {
    title: 'Beautiful City View',
    creator: 'Sara Rahimi',
    time: '3 hours ago',
    views: '3.1K',
    likes: '210',
    duration: '1:20',
    image: 'https://images.unsplash.com/photo-1519501025264-65ba15a82390?auto=format&fit=crop&w=900&h=540&q=85',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=96&h=96&q=80',
  },
  {
    title: 'Life is better at the beach',
    creator: 'Ahmad Khan',
    time: '5 hours ago',
    views: '5.6K',
    likes: '412',
    duration: '3:20',
    image: 'https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=900&h=540&q=85',
    avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=96&h=96&q=80',
  },
  {
    title: 'Nature Vibes',
    creator: 'Fatima Noori',
    time: '7 hours ago',
    views: '2.8K',
    likes: '187',
    duration: '2:17',
    image: 'https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=900&h=540&q=85',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=96&h=96&q=80',
  },
  {
    title: 'Photography in Peace',
    creator: 'Samiullah Khan',
    time: '9 hours ago',
    views: '5.3K',
    likes: '356',
    duration: '4:06',
    image: 'https://images.unsplash.com/photo-1452587925148-ce544e77e70d?auto=format&fit=crop&w=900&h=540&q=85',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=96&h=96&q=80',
  },
  {
    title: 'Beautiful Places',
    creator: 'Laila Safi',
    time: '10 hours ago',
    views: '6.7K',
    likes: '493',
    duration: '3:12',
    image: 'https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=900&h=540&q=85',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=96&h=96&q=80',
  },
]

function VideosPage() {
  return (
    <section className="videos-page" aria-label="Videos">
      <div className="videos-heading-row">
        <h1>Videos</h1>
        <button className="videos-filter" aria-label="Video filters"><Icon name="filter" size={17} /></button>
      </div>
      <nav className="video-tabs" aria-label="Video categories">
        <button className="video-tab selected" aria-current="page">All Videos</button>
        <button className="video-tab">Following</button>
        <button className="video-tab">Trending</button>
      </nav>
      <div className="video-grid">
        {videos.map((video) => <VideoCard key={video.title} video={video} />)}
      </div>
    </section>
  )
}

export default VideosPage
