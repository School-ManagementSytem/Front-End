import { combineReducers } from 'redux';
import { authenticationReducer } from './authenticationReducer';
import { studentTableReducer } from './adminDashboardReducers/studentTableReducer';
import { studentByIdReducer } from './adminDashboardReducers/studentByIdReducer';
import { parentReducer } from './adminDashboardReducers/parentReducer';
import { staffTableReducer } from './adminDashboardReducers/staffTableReducer';
import { staffByIdReducer } from './adminDashboardReducers/staffByIdReducer';
import { studentProgressReducer } from './adminDashboardReducers/studentProgressReducer';
import { coursesTableReducer } from './adminDashboardReducers/coursesReducer';
import { studentCourseReducer } from './adminDashboardReducers/studentCourseReducer';
import { placementTestReducer } from './adminDashboardReducers/placementTestReducer';
import { staffCourseReducer } from './adminDashboardReducers/staffCourseReducer';
import { studentsByCourseIDReducer } from './adminDashboardReducers/studentByCourseId';
import { attendanceReducer } from './adminDashboardReducers/attendanceReducer';
import { addStaffReducer } from './adminDashboardReducers/addStaffReducer';

export const reducer = combineReducers({
  authenticationReducer,
  studentTableReducer,
  studentByIdReducer,
  parentReducer,
  staffTableReducer,
  staffByIdReducer,
  studentProgressReducer,
  coursesTableReducer,
  studentCourseReducer,
  placementTestReducer,
  staffCourseReducer,
  studentsByCourseIDReducer,
  attendanceReducer,
  addStaffReducer
});

