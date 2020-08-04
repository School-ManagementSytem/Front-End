import React, { useEffect } from 'react';
import Courses from '../courses/Courses';
import MainUserPage from '../mainUserPage/MainUserPage';


function Display({ navigation }) {

  useEffect(() => {
    console.log('Display navigation: ', navigation)
  })
  if (navigation === 'main') {
    return (
      <div>
        <MainUserPage />
      </div>
    )
  } else if (navigation === 'courses') {
    return (
      <div>
        <Courses />
      </div>
    )
  } 

}

export default Display;