import React, { useState, useEffect} from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { getStaffTable } from '../../../../actions';
import { Table, Spin } from 'antd';
import 'antd/dist/antd.css';
import '../mainStyle/mainTable.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import StaffRegistrationForm from './StaffRegistrationForm';
import SearchStaffTable from './SearchStaffTable';


const StaffTable = props => {
  const [form, setForm] = useState(false);
    useEffect(() => {
        props.getStaffTable();
    }, [props])

    const handleCancelButtonOnForm = () => {
      setForm(false);
    }

    const handleAddButton = () => {
      setForm(!form);
    }

    const staffColumns = [
          {
              title: 'Staff ID',
              dataIndex: 'id',
              key: 1,
          },
          {
              title: 'Name',
              dataIndex: 'name',
              key: 2,
          },
          {
              title: 'Short Name',
              dataIndex: 'short_name',
              key: 3,
          },
          {
              title: 'CPR',
              dataIndex: 'cpr',
              key: 4,
          },
          {
              title: 'Mobile Number',
              dataIndex: 'mobile_number',
              key: 5,
          },
          {
              title: 'Gender',
              dataIndex: 'gender',
              key: 6,
          },
          {
              title: 'Accent',
              dataIndex: 'accent',
              key: 7,
           },
          {
              title: 'BirthDate',
              dataIndex: 'birthdate',
              key: 8,
          },
          {
              title: 'Teaching Rate',
              dataIndex: 'teaching_rate',
              key: 9,
          },
          {
              title: 'Admin',
              ataIndex: 'admin ',
              key: 10,
        },
        {
            title: 'Active',
            dataIndex: 'active',
            key: 11,
         },
      ];
      
    const staffData = props.staffList
    .sort((a,b) => { return b.id - a.id })
    .map(item => { 
      let options = { year: 'numeric', month: 'numeric', day: 'numeric' }
       item.birthdate = new Date(item.birthdate).toLocaleDateString('en-GB', options)
      return item
    })

    return (
      <div>
          <div className="row-above">
            <div>
             <SearchStaffTable />
            </div>
            <div className="create-new-entry">
              <div style={{marginRight: '10px'}}>Create new entry</div>
              <div><FontAwesomeIcon onClick={handleAddButton} style={{width: '25px', height: '25px', cursor: 'pointer'}} icon={faPlusCircle} size='lg'/></div>
            </div>
          </div>

          {form ? (
            <StaffRegistrationForm handleCancelButtonOnForm={handleCancelButtonOnForm}/>
          ) : null}
          
          
          {props.isLoading ? (
            <Spin style={{marginTop: '150px'}}size="large" />
          ) : (
          <Table
            className="rowHover"
            dataSource={staffData} 
            columns={staffColumns}   
            pagination={{ pageSize: 15 }} 
            rowKey='id'
            onRow={(record) => {
              return {
                onClick: () => {
                  props.setStaffID(record.id);
                  props.setStaffView('staffCardView');  
                }
              };
            }}
          />
          )}
      </div>
  )
}
       


const mapStateToProps = state => {
  return {
    isLoading: state.staffTableReducer.isLoading,
    staffList: state.staffTableReducer.staffList,
    error: state.staffTableReducer.error,
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    { getStaffTable }
)(StaffTable)
)
