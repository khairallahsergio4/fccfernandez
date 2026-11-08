
import SliderWelcome from './SliderWelcome.jsx'
import Testimonial from '../Home/Testimonial.jsx'
import InfoHoney from '../Home/InfoHoney.jsx'
import FacebookPost from '../Home/FacebookPost.jsx'
import Founder from '../Home/Founder.jsx'


const Home = () => {
  return (
    <div className="home-page">
    <SliderWelcome/>
    <Founder/>
    <Testimonial/>
    <InfoHoney/>
    <FacebookPost/>
    </div>
  )
}

export default Home