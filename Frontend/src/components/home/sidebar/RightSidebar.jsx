import Stories from '../Stories.jsx'
import Suggestions from '../Suggestions.jsx'
import Trending from '../Trending.jsx'
import Footer from '../footer/Footer.jsx'

function RightSidebar() {
  return (
    <aside className="right-column" aria-label="Discover">
      <Stories />
      <Suggestions />
      <Trending />
      <Footer />
    </aside>
  )
}

export default RightSidebar
