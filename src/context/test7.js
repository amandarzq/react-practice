import { createContext, useState } from "react";
import DATA from '../routes/Test7/_data';

export const Test7Context = createContext()

export function Test7Provider({ children }) {
  const [keyword, setKeyword] = useState('')
  const [filteredData, setFilteredData] = useState(DATA)

  const findFilter = (value) => {
    if (!value) return DATA
    const keyword = value.trim().toLowerCase()
    let filtered = DATA.filter(item => item.name?.toLowerCase().includes(keyword))
    return filtered
  }

  const onFilterData = (e) => {
    e.preventDefault()
    const newArray = findFilter(keyword)
    setFilteredData(newArray)
  }

  return (
    <Test7Context.Provider value={{
      keyword, 
      setKeyword,
      filteredData, 
      setFilteredData,
      onFilterData,
    }}>
      {children}
    </Test7Context.Provider>
  )
}