import React from 'react'
import Header from './Header'
import EmployeeListItem from './EmployeeListItem'

function EmployeePage() {
  return (
    <div className='EmployeePage'>
    <h1>Employee</h1>
    <Header />
    <EmployeeListItem />
    </div>
  )
}

export default EmployeePage