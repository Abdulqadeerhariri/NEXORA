import Icon from '../home/Icon.jsx'
import './VideoCard.css'

function VideoCard({ video }) {
  return (
    <article className="video-card">
      <div className="video-thumbnail">
        <img src={video.image} alt="" />
        <div className="video-play" aria-hidden="true">
          <Icon name="playCircle" size={34} />
        </div>
        <span className="video-duration">{video.duration}</span>
      </div>
      <div className="video-card-content">
        <div className="video-creator">
          <img src={video.avatar} alt="" className="avatar video-avatar" />
          <div className="video-creator-info">
            <strong>{video.creator}</strong>
            <span>{video.time}</span>
          </div>
          <button className="video-more" aria-label={`More options for ${video.title}`}>
            <Icon name="more" size={17} />
          </button>
        </div>
        <h2 className="video-title">{video.title}</h2>
        <div className="video-stats">
          <span><Icon name="eye" size={13} />{video.views}</span>
          <span><Icon name="heart" size={13} />{video.likes}</span>
          <button className="video-save" aria-label={`Save ${video.title}`}><Icon name="bookmark" size={14} /></button>
        </div>
      </div>
    </article>
  )
}

export default VideoCard
