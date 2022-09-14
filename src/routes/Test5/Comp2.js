import { cssWrapper } from './style';

const Comp2 = ({ value }) => {
  return(
    <>
      <div className={cssWrapper}>Latest inputted value is: {value ? value : '______'}*</div>
    </>
  )
}

export default Comp2;