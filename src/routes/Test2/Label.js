import { css } from 'react-emotion';
import React, { useState } from 'react';

const cssLabel = css({
  display: 'inline-block',
  margin: '4px 0px',
  padding: '2px 8px',
  backgroundColor: '#e0e0e0',
  borderRadius: 8,
  minHeight: 22,
  button: {
    backgroundColor: 'transparent',
    color: 'red',
    marginLeft: 4,
    fontSize: 22,
    padding: 0,
    border: 'none',
    outline: 'none',
  }
})

const Label = ({ value = '', onClear }) => {
  const [showBtn, setShowBtn] = useState(false)
  if (!value) {
    return null
  }

  return (
    <span className={cssLabel} onMouseEnter={() => setShowBtn(true)} onMouseLeave={() => setShowBtn(false)}>
      {value}
      { showBtn && <button type="button" onClick={onClear}>⊗</button>}
    </span>
  )
}

export default Label;
