import Icon from '../home/Icon.jsx'

const friends = [
  {
    name: 'Sara Rahimi',
    mutual: '12 mutual friends',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=96&h=96&q=80',
  },
  {
    name: 'Omid Farahi',
    mutual: '8 mutual friends',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=96&h=96&q=80',
  },
  {
    name: 'Fatima Noori',
    mutual: '5 mutual friends',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=96&h=96&q=80',
  },
]

function FriendsCard() {
  return (
    <section className="card profile-info-card friends-card">
      <div className="profile-info-heading">
        <h2>Friends</h2>
        <button className="text-link">See All</button>
      </div>
      <div className="profile-friends-list">
        {friends.map((friend) => (
          <div className="profile-friend" key={friend.name}>
            <img className="avatar" src={friend.avatar} alt="" />
            <div><strong>{friend.name}</strong><span>{friend.mutual}</span></div>
            <Icon name="chevron" size={14} />
          </div>
        ))}
      </div>
    </section>
  )
}

export default FriendsCard
