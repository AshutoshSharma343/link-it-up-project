import './App.css'
import { BrowserRouter as Router, Route, Link,Routes } from 'react-router-dom';

import Sidenav from './components/Sidenav'
import Search from './components/Search'
import SearchResults from './components/SearchResults'
import InfluencerProfile from './components/InfluencerProfile'
import InfluencerRegistrationForm from './components/InfluencerRegistrationForm'
import InfluencerLogin from './components/InfluencerLogin'
import CompanyLogin from './components/CompanyLogin'
import CompanyRegistrationForm from './components/CompanyRegistration'
import Chat from './components/Chat'
import Homepage from './components/Homepage'
import SearchPage from './components/pages/SearchPage';
import Chatpage from './components/pages/Chatpage';

function App() {

  return (
    <Router>
    <div>
      <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet"></link>
      <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/influencer-login" element={<InfluencerLogin />} />
      <Route path="/influencer-registration" element={<InfluencerRegistrationForm />} />
      <Route path="/company-login" element={<CompanyLogin />} />
      <Route path="/company-registration" element={<CompanyRegistrationForm />} />
      <Route path="/search" element={<SearchPage />} />
      <Route path="/chat" element={<Chatpage />} />
      </Routes>

      {/* <Homepage /> */}
      {/* <InfluencerLogin /> */}
      {/* <InfluencerRegistrationForm /> */}
      {/* <CompanyLogin /> */}
      {/* <CompanyRegistrationForm /> */}

      {/* <Sidenav />
      <Chat /> */}
      {/* <div className="grid grid-cols-3 ml-16 z-10">
        <Search />
        <div className="col-span-2" > */}
          {/* <SearchResults /> */}
          {/* <InfluencerProfile /> */}
        {/* </div>
      </div> */}
    </div>
    </Router>
  )
}

export default App
