import AppDownload from "../components/AppDownload.jsx"
import Footer from "../components/Footer.jsx"
import Hero from "../components/Hero.jsx"
import JobListing from "../components/JobListing.jsx"
import Navbar from "../components/Navbar.jsx"

const Home = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <JobListing/>
      <AppDownload/>
      <Footer/>
    </div>
  )
}

export default Home