import React from 'react';
import Header from './components/Header'
import UpdateSubs from './components/updateSubs';
import FeaturedVideos from './components/featuredVideos'
import NewVideos from './components/newVideos'
import PopularPlay from './components/popularPlayList'
import PopularChannel from './components/popularChannel';
import Footer from './components/footer'

function App() {
  return (
    <div >
      <Header/>
      <UpdateSubs/>
      <FeaturedVideos/>
      <NewVideos/>
      <PopularPlay/>
      <PopularChannel/>
      <Footer/>
      </div>
  );
}

export default App;

// I have used stateless components we are not pulling any data from backend or from any API
// website is mobile friendly 
// the font used in mock-up are paid except for hind guntur font
// i used one image for all video thumbnail
// this is not my best that i can but its something better than i sent you earlier