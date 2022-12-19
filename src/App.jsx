import { useEffect, useState } from 'react'
import EmployeeForm from './components/Employ_Form';
import Search from './components/Employ_Search';
import EmployeeTable from './components/Employ_table';
import './style.css'

const App = () => {

  const [ employeeData,setEmployeeData ] = useState([])

  useEffect(()=>{
    if(!localStorage.getItem('employeeData')) return
    setEmployeeData(JSON.parse(localStorage.getItem('employeeData')))
  },[ ])

  return (
    <div className="App">
      <Search employeeData={employeeData} setEmployeeData={setEmployeeData} />
      <EmployeeForm employeeData={employeeData} setEmployeeData={setEmployeeData} />
      <EmployeeTable tableData={ employeeData } />
    </div>
  );
}

export default App;
