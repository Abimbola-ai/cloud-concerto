import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'

const BannerSection = () => {
  const { loginWithRedirect } = useAuth0()

  const handleGetStartedClick = () => {
    loginWithRedirect()
  }

  return (
    <section className="banner-section">
      <div className="d-flex align-items-center justify-content-center">
        {/* Inserting the video */}
        <iframe
          width="800"
          height="450"
          src="https://www.youtube.com/embed/S-XtS4v4714"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
      <div className="mt-5">
        <div className="row gx-5">
          <div className="col-md ">
            <h1>Experience Virtual Concerts Like Never Before</h1>
          </div>
          <div className="col-md">
            <p>
              Immerse yourself in the magic of live music from the comfort of
              your own home. Cloud Concerto brings the concert experience to
              your screen, delivering unforgettable performances and connecting
              you with your favorite artists.
            </p>
            <button
              type="button"
              className="btn btn-black me-2"
              onClick={handleGetStartedClick}
            >
              Get Started
            </button>
            <button type="button" className="btn btn-black">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default BannerSection
