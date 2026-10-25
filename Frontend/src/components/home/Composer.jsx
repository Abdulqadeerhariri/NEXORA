import Icon from './Icon.jsx'
import './Composer.css'

function Composer() {
  return (
    <section className="card composer" aria-label="Create a post">
      <div className="composer-top">
        <img
          className="avatar avatar-md"
          src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=96&h=96&q=80"
          alt=""
        />
        <div className="composer-prompt">What&apos;s on your mind?</div>
      </div>
      <div className="composer-bottom">
        <button className="composer-option"><Icon name="photo" size={16} />Photo</button>
        <button className="composer-option"><Icon name="play" size={16} />Video</button>
        <button className="post-button">Post</button>
      </div>
    </section>
  )
}

export default Composer
