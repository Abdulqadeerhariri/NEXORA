import Icon from './Icon.jsx'
import './Trending.css'

const trends = [
  { tag: '#Nature', posts: '12.5K posts' },
  { tag: '#Travel', posts: '8.3K posts' },
  { tag: '#Photography', posts: '6.7K posts' },
  { tag: '#LifeStyle', posts: '5.2K posts' },
]

function Trending() {
  return (
    <section className="card section-card trending-card">
      <div className="section-heading">
        <Icon name="trend" size={17} />
        <h2>Trending</h2>
      </div>
      <div className="trend-list">
        {trends.map((trend) => (
          <div className="trend-row" key={trend.tag}>
            <div><strong>{trend.tag}</strong><span>{trend.posts}</span></div>
            <Icon name="chevron" size={16} />
          </div>
        ))}
      </div>
    </section>
  )
}

export default Trending
