import Input from "./Input";
import Table from "./Table";
import React, { useState } from 'react';
import DATA from './_data'

const Test4 = () => {
  const [search, setSearch] = useState('')
  const [filteredData, setFilteredData] = useState(DATA)

  const findFilter = (value) => {
    if (!value) return DATA
    const keyword = value.trim().toLowerCase()
    let filtered = DATA.filter(item => item.name?.toLowerCase().includes(keyword))
    return filtered
  }
  
  const onSubmit = (e) => {
    e.preventDefault()
    const newArray = findFilter(search)
    setFilteredData(newArray)
  }

  return(
    <div>
      <ul>
        <li>Please render data into the table</li>
        <li>Please filter the table by name search (after press enter or click search button)</li>
      </ul>
      <Input onChange={(e) => setSearch(e.target.value)} onSubmit={onSubmit} />
      <div>
        <Table data={filteredData} />
      </div>
    </div>
  )
}

export default Test4;