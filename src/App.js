import React from 'react';
import './App.css';
import Video from './Video';

function App() {
  return (
    <div className="App">
      <div className="app__videos">
        <Video 
          src="https://www.youtube.com/watch?v=07d2dXHYb94" 
          channel="ajayvaghela"
          description="Epic MERN Stack TikTok Clone" 
          song="The Dogs are on the way"
          likes={125} 
          shares={26} 
          messages={95}
        />
        <Video 
          src="https://www.youtube.com/watch?v=07d2dXHYb94" 
          channel="ajayvaghela"
          description="Epic MERN Stack TikTok Clone" 
          song="The Dogs are on the way"
          likes={125} 
          shares={26} 
          messages={95}  
        />
      </div>
    </div>
  );
}

export default App;
