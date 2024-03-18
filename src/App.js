import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import LandingPage from './components/homepage/LandingPage'
//import Auth0ProviderWithHistory from './Auth0ProviderWithHistory'
// import WelcomePage from './components/welcome/WelcomePage'
//import { createBrowserHistory } from 'history'

//const history = createBrowserHistory()

const App = () => {
  return (
    <Router>
      <div className="container-fluid">
        <Routes>
          <Route exact path="/" element={<LandingPage />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
