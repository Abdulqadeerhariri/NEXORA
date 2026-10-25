import Icon from '../home/Icon.jsx'

function AboutCard() {
  return (
    <section className="card profile-info-card">
      <h2>About Me</h2>
      <p>I enjoy exploring new places, capturing beautiful moments, and building cool web applications.</p>
      <ul className="profile-details">
        <li><Icon name="briefcase" size={14} /><span>Web Developer</span></li>
        <li><Icon name="mapPin" size={14} /><span>Kabul, Afghanistan</span></li>
        <li><Icon name="calendar" size={14} /><span>Joined March 2024</span></li>
      </ul>
    </section>
  )
}

export default AboutCard
