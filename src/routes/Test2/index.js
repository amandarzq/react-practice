import Input from "./Input";
import Label from "./Label";
import React, { useState } from 'react'

const Test2 = () => {
  const [input, setInput] = useState('')
  const [showCloseBtn, setShowCloseBtn] = useState(false)
  return(
    <div>
      <ul>
        <li>Render user input value inside the label below</li>
        <li>show "close button" only when hovered, and clear the input value when clicked.</li>
      </ul>
      <p>
        <Label value={input} onClear={() => setInput('')} />
      </p>
      <Input onChange={(e) => setInput(e.target.value)} value={input} />
    </div>
  )
}

export default Test2;