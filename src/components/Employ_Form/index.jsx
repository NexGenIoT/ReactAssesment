 import React,{ useState } from 'react'

const EmployeeForm = ({ setEmployeeData,employeeData }) => {
 
  const [formData,setFormData] = useState({
    name:'',
    salary:'',
    age:'',
    profileImg:''
  })

  const {name,salary,age,profileImg } = formData

  const handleInput = (e)=>{
    setFormData({
      ...formData,
      [e.target.name]:e.target.value
    })
  }
  const handleSubmit = async(e)=>{
    e.preventDefault()
    if(!localStorage.getItem('employeeData')){
      localStorage.setItem('employeeData',JSON.stringify([formData]))
    }else{
      let prevData = JSON.parse(localStorage.getItem('employeeData'))
      localStorage.setItem('employeeData',JSON.stringify([...prevData, formData]))
    }
    setEmployeeData(JSON.parse(localStorage.getItem('employeeData')))
  }

  return (
    <div className='--form' >
      <h1>Enter Employee Details </h1>
      <form>
      <label htmlFor='name' >Employee Name:
      <input type={'text'} placeholder='Enter Name' name='name' value={ name } onChange={ handleInput }  />
      </label>
      <label htmlFor='salary' >Employee Salary:
      <input type={'number'} placeholder='Enter Salary' name='salary' value={ salary } onChange={ handleInput }  />
      </label>
      <label htmlFor='age' >Employee Age:
      <input type={'number'} placeholder='Enter Age' name='age' value={ age } onChange={ handleInput }  />
      </label>
      <label htmlFor='profileImg' >Employee Profile:
      <input type={'file'} placeholder='Upload Profile Picture' name='profileImg' value={ profileImg } onChange={ handleInput }  />
      </label>
      <button type='submit' onClick={ handleSubmit }  >Submit</button>
      </form>
    </div>
  )
}

export default EmployeeForm