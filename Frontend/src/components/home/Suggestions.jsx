import './Suggestions.css'

const people = [
  {
    name: 'Bilal Ahmad',
    friends: '12 mutual friends',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=96&h=96&q=80',
  },
  {
    name: 'Fatima Noori',
    friends: '8 mutual friends',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=96&h=96&q=80',
  },
  {
    name: 'Samiullah Khan',
    friends: '10 mutual friends',
    avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=96&h=96&q=80',
  },
  {
    name: 'Laila Safi',
    friends: '6 mutual friends',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=96&h=96&q=80',
  },
]

function Suggestions() {
  return (
    <section className="card section-card">
      <div className="section-heading">
        <h2>Suggested for You</h2>
        <button className="text-link">See All</button>
      </div>
      <div className="people-list">
        {people.map((person) => (
          <div className="person-row" key={person.name}>
            <img className="avatar avatar-md" src={person.avatar} alt="" />
            <div className="person-details">
              <strong>{person.name}</strong>
              <span>{person.friends}</span>
            </div>
            <button className="follow-button">Follow</button>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Suggestions
