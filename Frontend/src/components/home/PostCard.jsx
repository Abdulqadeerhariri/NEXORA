import Icon from './Icon.jsx'
import './PostCard.css'

function Comment({ avatar, name, message, time }) {
  return (
    <div className="comment-row">
      <img className="avatar avatar-xs" src={avatar} alt="" />
      <div className="comment-body">
        <div className="comment-bubble"><strong>{name}</strong>{message}</div>
        <div className="comment-meta"><span>{time}</span><span>Like</span><span>Reply</span></div>
      </div>
    </div>
  )
}

function PostCard({ post }) {
  return (
    <article className="card post-card">
      <header className="post-header">
        <img className="avatar avatar-sm" src={post.avatar} alt="" />
        <div className="post-author">
          <strong>{post.author}</strong>
          <div className="post-meta">{post.time}<span>·</span><Icon name="globe" size={11} /></div>
        </div>
        <button className="more-button" aria-label="More post options"><Icon name="more" size={18} /></button>
      </header>
      <p className="post-copy">{post.copy}</p>
      <div className={`post-media${post.imageClass ? ` ${post.imageClass}` : ''}`}>
        <img className="post-image" src={post.image} alt={post.imageAlt} />
        {post.isVideo && (
          <span className="post-video-indicator" aria-label="Video post">
            <Icon name="playCircle" size={42} />
            <span>{post.duration}</span>
          </span>
        )}
      </div>
      <div className="post-stats">
        <span className="reaction-count">
          <span className="reaction-icons">
            <Icon name="like" size={17} fill="#2563eb" className="reaction-like" />
            <Icon name="heart" size={17} fill="#ef4444" className="reaction-heart" />
          </span>
          {post.likes}
        </span>
        <span className="post-stat">{post.commentCount} Comments</span>
        <span className="post-stat"><Icon name="bookmark" size={14} />Save</span>
      </div>
      <div className="post-actions">
        <button className="post-action"><Icon name="like" size={16} />Like</button>
        <button className="post-action"><Icon name="comment" size={16} />Comment</button>
        <button className="post-action saved"><Icon name="bookmark" size={16} />Save</button>
        <button className="post-action"><Icon name="share" size={16} />Share</button>
      </div>
      {post.comments && (
        <div className="comments">
          {post.comments.map((comment) => <Comment key={comment.name} {...comment} />)}
          <button className="view-comments">View more comments...</button>
          <div className="comment-input-row">
            <img className="avatar avatar-xs" src={post.currentUserAvatar} alt="" />
            <div className="comment-input"><span>Write a comment...</span><Icon name="smile" size={15} /></div>
            <button className="send-button" aria-label="Send comment"><Icon name="send" size={14} /></button>
          </div>
        </div>
      )}
    </article>
  )
}

export default PostCard
