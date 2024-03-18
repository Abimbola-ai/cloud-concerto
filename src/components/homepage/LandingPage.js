import NavSection from './NavSection'
import BannerSection from './BannerSection'

const LandingPage = () => {
  return (
    <div className="container-fluid p-0 landing-page">
      <NavSection />
      <div className="banner-container">
        <BannerSection />
      </div>
    </div>
  )
}

export default LandingPage
