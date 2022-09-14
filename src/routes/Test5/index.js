
import { cssWrapper } from './style';
import { useState, useContext } from 'react';

import Comp1 from "./Comp1";
import Comp3 from "./Comp3";
import { Test5Context } from '../../context/test5';

const question = (
  <ul>
    <li>primarily, user can input the value from <code>#mynumber</code></li>
    <li>
      please add or reduce the value by 1 when user click{' '}
      <code>#numbermin</code> and <code>#numberplus</code> button
    </li>
    <li>Show <b>ODD</b> or <b>EVEN</b> in first render section</li>
    <li>
      only show <code>#mynumber1</code> input when <code>#overwrite</code> checkbox is checked in <code>Comp1</code>
    </li>
    <li>
      user can input in <code>#mynumber1</code> and render the latest source of input in <code>Comp1</code> and it's value in{' '}<code>Comp2</code>
    </li>
    <li><code>Comp2</code> will display latest inputted from <code>#mynumber</code> &amp; <code>#mynumber1</code></li>
    <li><code>Comp3</code> will display <code>#mynumber</code></li>
    <li>show <code>Comp4</code> modal when user click <b>Show Modal</b> button in <code>Comp3</code></li>
    <li>update whole <code>input</code> and value render when user input <code>#mynumber2</code></li>
  </ul>
);

const Test5 = () => {
  const [checked, setChecked] = useState(false)
  const [latestValue, setLatestValue] = useState('mynumber')
  const { mynumber, setMynumber, overWriteValue, setOverWriteValue } = useContext(Test5Context)

  const renderOddEven = (value) => {
    let currentNumber = 'EVEN'
    if (value % 2 !== 0 ) {
      currentNumber = 'ODD'
    }
    return currentNumber
  }

  return(
    <div>
      {question}
      <button id="numbermin" type="button" onClick={() => setMynumber(prev => prev - 1)}>-</button>
      <input id="mynumber" type="number" placeholder="input mynumber" value={mynumber} onChange={e => {
        setLatestValue('mynumber')
        setMynumber(e.target.value)
      }}/>
      <button id="numberplus" type="button" onClick={() => setMynumber(prev => prev + 1)}>+</button>
      <br/>
      <br/>
      <div className={cssWrapper}>
        The inputted value is {renderOddEven(mynumber)}*
      </div>
      <Comp1 
        value={overWriteValue} 
        setValue={(e) => {
          setOverWriteValue(e.target.value)
          setLatestValue('mynumber1')
        }} 
        mynumber={mynumber}
        latestValue={latestValue}
        checked={checked}
        setChecked={setChecked}/>
      <Comp3 />
    </div>
  )
}

export default Test5;