import React from 'react'

const EmployeeTable = ({ tableData=[] }) => {

  return (
    <table>
      <thead>
        <tr>
          <th>S.No.</th>
          <th>Name</th>
          <th>Salary</th>
          <th>Age</th>
          <th>Profile</th>
        </tr>
      </thead>
      <tbody>
        { tableData.length>0 ? 
      tableData.map((item,i)=>  <tr key={i} >
        <td>{i+1}</td>
        <td>{item.name}</td>
        <td>{item.salary}</td>
        <td>{item.age}</td>
        <td>{item.profileImg}</td>
      </tr>):null }
      </tbody>
    </table>
  )
}

export default EmployeeTable