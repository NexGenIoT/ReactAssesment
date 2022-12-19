import React,{ useState } from 'react'
import './style.css'
const Search = ({ employeeData,setEmployeeData }) => {
  const [search,setSearch] = useState('')

  const handleSearch = (e)=>{
    console.log(e.target.value,'sss')
     setSearch(e.target.value)
     if(JSON.parse(localStorage.getItem('employeeData')).filter(item=>item.name.includes(e.target.value))){
      setEmployeeData( JSON.parse(localStorage.getItem('employeeData')).filter(item=>item.name.toLowerCase().includes(e.target.value)) )
     }else{
      setEmployeeData(JSON.parse(localStorage.getItem('employeeData')))
     }
     
  }

  return (
    <div className='search' >
      <input type={'text'} value={search} placeholder='Search...' onChange={ handleSearch }  />
    </div>
  )
}

export default Search