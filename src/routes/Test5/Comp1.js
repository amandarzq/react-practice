import { cssWrapper } from './style';

import Comp2 from "./Comp2";

const Comp1 = ({ value, setValue, checked, setChecked, mynumber, latestValue }) => {
  return(
    <div className={cssWrapper}>
      Latest Inputted from <code>[Test5/Comp1]*</code>
      <br/>
      <br/>
      <label htmlFor="overwrite">
        Local overwrite: <input id="overwrite" type="checkbox" checked={checked} onChange={() => setChecked(prev => !prev)} />
        {/* only show when overwrite is checked */}
        {
          checked &&
          <input id="mynumber1" type="number" placeholder="input mynumber1" onChange={setValue} value={value} />
        }
      </label>
      <Comp2 value={latestValue === 'mynumber' ? mynumber : value}/>
    </div>
  )
}

export default Comp1;