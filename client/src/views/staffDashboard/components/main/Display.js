import React from 'react';
import Students from '../students/Students';
import Courses from '../courses/Courses';


function Display({ navigation }) {

if (navigation === 'students') {
    return (
      <div>
        <Students />
      </div>
    )
  }
  else if (navigation === 'courses') {
    return (
      <div>
        <Courses />
      </div>
    )
  } 
  }

export default Display;