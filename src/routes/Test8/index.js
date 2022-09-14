import Modal from './Modal';
import { cssForm } from './style';
import { useState } from 'react';

const Test8 = () => {
  const INITIAL_VALUE = {
    name: '',
    age: '',
    address: ''
  }
  const [showModal, setShowModal] = useState(false)
  const [input, setInput] = useState(INITIAL_VALUE)

  // ONLY ONE HANDLE METHOD ALLOWED
  const handleInput = (e) => {
    let { name, value } = e.target
    setInput({...input, [name]: value})
  };
  
  const onSubmit = (e) => {
    e.preventDefault()
    setShowModal(true)
  }

  const onReset = () => {
    setShowModal(false)
    setInput(INITIAL_VALUE)
  }

  return(
    <div>
      <ul>
        <li>User can input the form - only 1 handle method is allowed</li>
        <li>When submit display the modal</li>
        <li>Show the form value inside the modal</li>
        <li>Reset the form and close the modal when user click the reset button</li>
      </ul>
      <form className={cssForm} onSubmit={onSubmit}>
        <input type="text" placeholder="name" name="name" onChange={handleInput} value={input.name}/>
        <input type="text" placeholder="age" name="age" onChange={handleInput} value={input.age}/>
        <textarea type="text" placeholder="address" name="address" onChange={handleInput} value={input.address}/>
        <button>Submit</button>
      </form>
      {/* Only Show the modal when user clicked submit */}
      {showModal && <Modal input={input} onReset={onReset} />}
    </div>
  )
}

export default Test8;