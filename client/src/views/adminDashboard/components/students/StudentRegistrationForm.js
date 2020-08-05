import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom';
import { createNewStudent, getDropDown, getStudentTable } from '../../../../actions';
import moment from 'moment';
import Dropdown from 'react-dropdown'
import 'react-dropdown/style.css'
import '../mainStyle/mainTable.scss';

import { FormWrap, Input, Button } from '../mainStyle/styledComponent.js';


const StudentRegistrationForm = (props) => {
  const [student, setStudent] = useState({
    cpr: '',
    registration_date: moment(new Date()).format("YYYY-MM-DD"),
    first_name: '',
    additional_names: '',
    gender: '',
    birthdate: '',
    school_grade_id: '',
    school_name: '',
    grade_updated: moment(new Date()).format("YYYY-MM-DD"),
    home_telephone: '',
    mobile_telephone: '',
    block_code: '',
    road: '',
    building: '',
    flat: '',
    email: '',
    notes: '',
    preferred_contact_type_id: '',
    no_call: false,
    delinquent: false,
    expelled: false,
    location_id: '',
    family_id: 1
  });


  useEffect(() => {
    props.getDropDown();
  }, [])





  // set arrays of foreign key values to use in the dropdown (except 'gender' array it's not a foreign key)
  const genderArr = ['F', 'M'];

  // handle required fields (make them all required for now)
  const [errorBorderCpr, setErrorBorderCpr] = useState('transparent'); //error #C73642
  const [errorBorderFirstName, setErrorBorderFirstName] = useState('transparent'); //error #C73642
  const [errorBorderAdditionalNames, setErrorBorderAdditionalNames] = useState('transparent'); //error #C73642
  const [errorBorderGender, setErrorBorderGender] = useState('transparent'); //error #C73642
  const [errorBorderBirthdate, setErrorBorderBirthdate] = useState('transparent'); //error #C73642
  const [errorBorderSchoolGrade, setErrorBorderSchoolGrade] = useState('transparent'); //error #C73642
  const [errorBorderSchoolName, setErrorBorderSchoolName] = useState('transparent'); //error #C73642
  const [errorBorderHomeTelephone, setErrorBorderHomeTelephone] = useState('transparent'); //error #C73642
  const [errorBorderMobileTelephone, setErrorBorderMobileTelephone] = useState('transparent'); //error #C73642
  const [errorBorderBlock, setErrorBorderBlock] = useState('transparent'); //error #C73642
  const [errorBorderRoad, setErrorBorderRoad] = useState('transparent'); //error #C73642
  const [errorBorderBuilding, setErrorBorderBuilding] = useState('transparent'); //error #C73642
  const [errorBorderFlat, setErrorBorderFlat] = useState('transparent'); //error #C73642
  const [errorBorderEmail, setErrorBorderEmail] = useState('transparent'); //error #C73642
  const [errorBorderNotes, setErrorBorderNotes] = useState('transparent'); //error #C73642
  const [errorBorderContactType, setErrorBorderContactType] = useState('transparent'); //error #C73642
  const [errorBorderLocation, setErrorBorderLocation] = useState('transparent'); //error #C73642




  function handleChange(event) {
    setStudent({
      ...student,
      [event.target.name]: event.target.value
    })
  }


  function handleSubmit(event) {
    event.preventDefault();

    // check for required fields
    if (student.cpr === '' || student.firstName === '' || 
        student.additionalNames === '' || student.gender === '' ||
        student.birthdate === '' || student.school_grade_id === '' || 
        student.schoolName === '' || student.homeTelephone === '' ||
        student.mobileTelephone === '' || student.block === '' || 
        student.road === '' || student.building === '' ||
        student.flat === '' || student.email === '' || 
        student.notes === '' || student.contactTypeId === '' ||
        student.locationId === '') 
      { 
        // highlight all that were missed
        if (student.cpr === '') {
          setErrorBorderCpr('#ef6570');
        } 
        if (student.firstName === '') {
          setErrorBorderFirstName('#ef6570');
        } 
        if (student.additionalNames === '') {
          setErrorBorderAdditionalNames('#ef6570');
        }
        if (student.gender === '') {
          setErrorBorderGender('#ef6570');
        }
        if (student.birthdate === '') {
          setErrorBorderBirthdate('#ef6570');
        }
        if (student.school_grade_id === '') {
          setErrorBorderSchoolGrade('#ef6570');
        }
        if (student.schoolName === '') {
          setErrorBorderSchoolName('#ef6570');
        }
        if (student.homeTelephone === '') {
          setErrorBorderHomeTelephone('#ef6570');
        }
        if (student.mobileTelephone === '') {
          setErrorBorderMobileTelephone('#ef6570');
        }
        if (student.block === '') {
          setErrorBorderBlock('#ef6570');
        }
        if (student.road === '') {
          setErrorBorderRoad('#ef6570');
        }
        if (student.building === '') {
          setErrorBorderBuilding('#ef6570');
        }
        if (student.flat === '') {
          setErrorBorderFlat('#ef6570');
        }
        if (student.email === '') {
          setErrorBorderEmail('#ef6570');
        }
        if (student.notes === '') {
          setErrorBorderNotes('#ef6570');
        }
        if (student.contactTypeId === '') {
          setErrorBorderContactType('#ef6570');
        }
        if (student.locationId === '') {
          setErrorBorderLocation('#ef6570');
        }

    } else {

    props.createNewStudent(student)
    if(props.createNewStudentSuccessMessage === 'Student has been successfuly added')
    setTimeout(()=>{
      props.getStudentTable()
    },1000)

    props.setForm(false)

  }
}

  const handleCancel = () => {

  }
  // {if (props.createNewStudentIsLoading) {
  //   return <Spin style={{marginTop: '90px'}}size="large" />
  // } else {

  return (
    <FormWrap onSubmit={handleSubmit} style={{ margin: '30px 10px 20px 10px' }}>
      <fieldset style={{ border: '1px solid transparent', margin: '10px 5px 0px 5px', background: '#E0EBF0' }}>
        <div style={{
          display: 'grid', textAlign: 'left', gridTemplateColumns: '1fr 1fr 1fr 1fr',
          gridGap: '15px', margin: '10px'
        }}>
          <div >
            <label>CPR</label>
            <div style={{ border: `1px solid ${errorBorderCpr}`, borderRadius: '3px' }}>
              <Input
                type="text"
                name="cpr"
                value={student.cpr}
                onChange={handleChange} />
            </div>
          </div>
          <div>
            <label>First Name</label>
            <div style={{ border: `1px solid ${errorBorderFirstName}`, borderRadius: '3px' }}>
              <Input
                type="text"
                name="first_name"
                value={student.first_name}
                onChange={handleChange} />
            </div>
          </div>
          <div style={{ gridColumn: 'span 2' }}>
            <label>Additional names</label>
            <div style={{ border: `1px solid ${errorBorderAdditionalNames}`, borderRadius: '3px' }}>
              <Input
                style={{ width: '100%' }}
                type="text"
                name="additional_names"
                value={student.additional_names}
                onChange={handleChange} />
            </div>
          </div>
          <div>
            <label>Gender</label>
            <div style={{ border: `1px solid ${errorBorderGender}`, borderRadius: '3px' }}>
              <Dropdown
                value={student.gender}
                onChange={(e) => setStudent({ ...student, gender: e.value })}
                controlClassName='myControlClassName'
                className='dropdownRoot'
                options={genderArr}

              />
            </div>
          </div>
          <div>
            <label>Email</label>
            <div style={{ border: `1px solid ${errorBorderEmail}`, borderRadius: '3px' }}>
              <Input
                type="email"
                name="email"
                value={student.email}
                onChange={handleChange} />
            </div>
          </div>
          <div>
            <label>School Name</label>
            <div style={{ border: `1px solid ${errorBorderSchoolName}`, borderRadius: '3px' }}>
              <Input
                type="text"
                name="school_name"
                value={student.school_name}
                onChange={handleChange} />
            </div>
          </div>
          <div >
            <label>Birth date</label>
            <div style={{ border: `1px solid ${errorBorderBirthdate}`, borderRadius: '3px' }}>
              <Input
                type="date"
                name="birthdate"
                value={student.birthdate}
                onChange={handleChange} />
            </div>
          </div>
          <div>
            <label>Location</label>
            <div style={{ border: `1px solid ${errorBorderLocation}`, borderRadius: '3px' }}>
              <Dropdown
                value={student.location_id}
                onChange={(e) => setStudent({ ...student, location_id: e })}
                controlClassName='myControlClassName'
                className='dropdownRoot'
                options={props.dropDownList1} />
            </div>
          </div>
          <div>
            <label>Home Telephone</label>
            <div style={{ border: `1px solid ${errorBorderHomeTelephone}`, borderRadius: '3px' }}>
              <Input
                type="text"
                name="home_telephone"
                value={student.home_telephone}
                onChange={handleChange} />
            </div>
          </div>
          <div>
            <label>Mobile Telephone</label>
            <div style={{ border: `1px solid ${errorBorderMobileTelephone}`, borderRadius: '3px' }}>
              <Input
                type="text"
                name="mobile_telephone"
                value={student.mobile_telephone}
                onChange={handleChange} />
            </div>
          </div>
          <div>
            <label>Preferred contact method</label>
            <div style={{ border: `1px solid ${errorBorderContactType}`, borderRadius: '3px' }}>
              <Dropdown
                onChange={(e) => setStudent({ ...student, preferred_contact_type_id: e })}
                value={student.preferred_contact_type_id}
                controlClassName='myControlClassName'
                className='dropdownRoot'
                options={props.dropDownList2} />
            </div>
          </div>
          <div>
            <label>Block</label>
            <div style={{ border: `1px solid ${errorBorderBlock}`, borderRadius: '3px' }}>
              <Dropdown
                onChange={(e) => { setStudent({ ...student, block_code: e }) }}
                controlClassName='myControlClassName'
                className='dropdownRoot'
                options={props.dropDownList4}
                value={student.block_code} />
            </div>
          </div>
          <div>
            <label>Road</label>
            <div style={{ border: `1px solid ${errorBorderRoad}`, borderRadius: '3px' }}>
              <Input
                type="text"
                name="road"
                value={student.road}
                onChange={handleChange} />
            </div>
          </div>
          <div>
            <label>Building</label>
            <div style={{ border: `1px solid ${errorBorderBuilding}`, borderRadius: '3px' }}>
              <Input
                type="text"
                name="building"
                value={student.building}
                onChange={handleChange} />
            </div>
          </div>
          <div>
            <label>Flat</label>
            <div style={{ border: `1px solid ${errorBorderFlat}`, borderRadius: '3px' }}>
              <Input
                type="text"
                name="flat"
                value={student.flat}
                onChange={handleChange} />
            </div>
          </div>
          <div>
            <label>School grade</label>
            <div style={{ border: `1px solid ${errorBorderSchoolGrade}`, borderRadius: '3px' }}>
              <Dropdown
                onChange={(e) => { setStudent({ ...student, school_grade_id: e }) }}
                value={student.school_grade_id}
                controlClassName='myControlClassName'
                className='dropdownRoot'
                options={props.dropDownList3} />
            </div>
          </div>
          <div style={{ gridColumn: 'span 4' }}>
            <label>Notes</label>
            <div style={{ border: `1px solid ${errorBorderNotes}`, borderRadius: '3px' }}>
              <textarea
                style={{
                  width: '100%', height: '80px', outline: 'none',
                  border: '1px solid transparent', borderRadius: '3px'
                }}
                type="text"
                name="notes"
                value={student.notes}
                onChange={handleChange} />
            </div>
          </div>
        </div>
      </fieldset>
      <div style={{ alignSelf: 'flex-end' }}>
        <Button onClick={handleCancel} style={{ background: '#C73642', width: '80px' }}>
          Cancel
            </Button>
        <Button type="submit">
          Add student
            </Button>
      </div>
    </FormWrap>
  )

  // }
  // }
}



const mapStateToProps = state => {
  return {
    createNewStudentIsLoading: state.studentTableReducer.createNewStudentIsLoading,
    dropDownList1: state.studentTableReducer.dropDownList1,
    dropDownList2: state.studentTableReducer.dropDownList2,
    dropDownList3: state.studentTableReducer.dropDownList3,
    dropDownList4: state.studentTableReducer.dropDownList4,
    createNewStudentSuccessMessage: state.studentTableReducer.createNewStudentSuccessMessage

  };
};

export default withRouter(
  connect(
    mapStateToProps,
    { createNewStudent, getDropDown, getStudentTable }
  )(StudentRegistrationForm)
);