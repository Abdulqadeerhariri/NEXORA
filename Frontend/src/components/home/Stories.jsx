import './Stories.css'

const stories = [
  {
    name: 'Create Story',
    image: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=300&h=400&q=80',
    create: true,
  },
  {
    name: 'Ali Raza',
    image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=300&h=400&q=80',
  },
  {
    name: 'Sara Rahimi',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&h=400&q=80',
  },
  {
    name: 'Omid Farahi',
    image: 'https://images.unsplash.com/photo-1472396961693-142e6e269027?auto=format&fit=crop&w=300&h=400&q=80',
  },
]

function Stories() {
  return (
    <section className="card section-card">
      <div className="section-heading">
        <h2>Stories</h2>
        <button className="text-link">See All</button>
      </div>
      <div className="stories-list">
        {stories.map((story) => (
          <div className={`story${story.create ? ' story-create' : ''}`} key={story.name}>
            <div className="story-image-wrap">
              <img className="story-image" src={story.image} alt="" />
              {story.create && <span className="story-plus" aria-hidden="true">+</span>}
            </div>
            <span className="story-name">{story.name}</span>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Stories
