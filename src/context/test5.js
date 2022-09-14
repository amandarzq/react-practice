import { createContext, useState } from "react";

export const Test5Context = createContext()

export function Test5Provider({ children }) {
  const [mynumber, setMynumber] = useState(0)
  const [overWriteValue, setOverWriteValue] = useState(0)
  const [showModal, setShowModal] = useState(false)

  const toggleModal = () => {
    setShowModal(prev => !prev)
  }

  const handleChangeAllInput = (e) => {
    let { value } = e.target
    setOverWriteValue(value)
    setMynumber(value)
  }

  return (
    <Test5Context.Provider value={{
      mynumber, 
      setMynumber,
      showModal, 
      setShowModal,
      toggleModal,
      overWriteValue,
      setOverWriteValue,
      handleChangeAllInput, 
    }}>
      {children}
    </Test5Context.Provider>
  )
}