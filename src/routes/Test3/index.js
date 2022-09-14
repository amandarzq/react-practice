import React, { useRef } from 'react';

const Test3 = () => {
  const focusRef = useRef()
  console.log(focusRef, '>> focus')

  return(
    <div>
      <ul>
        <li>Please focus to the text field when user click the focus button</li>
      </ul>
      <p>
        <button type="button" onClick={() => focusRef.current.focus()}>Focus Text Field</button>
      </p>
      <input ref={focusRef} type="text" placeholder="focus me"/>
    </div>
  )
}

export default Test3;