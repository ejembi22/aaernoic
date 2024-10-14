import React from 'react'

const EmployeeDetails = (props) => {
    const {descriptivehead, decriptivedata} = props;
  return (
    <div>
      <dl>{descriptivehead}</dl>
      <dd>{decriptivedata}</dd>
    </div>
  )
}

export default EmployeeDetails
