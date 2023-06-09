import React from 'react';
import './App.css';
import Profile from './components/Profile';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Course from './components/Course';



function App() {  
  const profileData = {
    rating: 4.5,
    subscribers: 1000,
    views: 50000,
    yearsOfExperience: 5,
    expertIn: ['Web Design', 'UI/UX', 'Frontend Development'],
  };
  


  return (
    <div className="App">
      <Profile data={profileData} />
     
      <Course/>
    
     
    </div>
  );
}



export default App;
