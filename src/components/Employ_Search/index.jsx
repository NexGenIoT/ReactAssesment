import React,{ useState } from 'react'
import './style.css'
const Search = ({ employeeData,setEmployeeData }) => {
  const [search,setSearch] = useState('')

  const handleSearch = (e)=>{
    const localData = JSON.parse(localStorage.getItem('employeeData'))
     setSearch(e.target.value)
     if(localData.filter(item=>item.name.includes(e.target.value))){
      setEmployeeData( localData.filter(item=>item.name.toLowerCase().includes(e.target.value.toLowerCase())) )
     }else{
      setEmployeeData(localData)
     }
     
  }

  return (
    <div className='search' >
      <input type={'text'} value={search} placeholder='Search...' onChange={ handleSearch }  />
    </div>
  )
}

export default Search