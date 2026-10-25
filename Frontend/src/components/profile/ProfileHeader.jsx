import Icon from '../home/Icon.jsx'

const profileAvatar = 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=220&h=220&q=85'

function ProfileHeader() {
  return (
    <section className="card profile-overview">
      <div className="profile-cover">
        <img
          src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1600&h=420&q=85"
          alt="Mountain landscape"
        />
      </div>
      <div className="profile-identity">
        <img className="profile-avatar" src={profileAvatar} alt="Ahmad Khan" />
        <div className="profile-name-block">
          <h1>Ahmad Khan <span className="verified-badge" aria-label="Verified account"><Icon name="check" size={11} /></span></h1>
          <p>Web Developer <span>·</span> Kabul, Afghanistan <span>·</span> Joined March 2024</p>
        </div>
        <div className="profile-controls">
          <button className="edit-profile-button"><Icon name="settings" size={14} />Edit Profile</button>
          <button className="profile-more-button" aria-label="More profile options"><Icon name="more" size={18} /></button>
        </div>
      </div>
      <div className="profile-statistics" aria-label="Profile statistics">
        <div><strong>245</strong><span>Posts</span></div>
        <div><strong>1.2K</strong><span>Followers</span></div>
        <div><strong>360</strong><span>Following</span></div>
      </div>
    </section>
  )
}

export { profileAvatar }
export default ProfileHeader
