// CSS imports
import './main.css'
import 'bootstrap/dist/css/bootstrap.min.css';

// Component imports
import Header from './containers/Header'
import CarouselLatestWorks from './components/CarouselLatestWorks';
import Hero from './components/Hero'

function App() {

  return (
    <>
      <Header />
      <h1 className='latestWorksSection'>Latest Works</h1>
      <CarouselLatestWorks />
      <Hero />
    </>
  )
}

export default App
