import { cssWrapper, cssModalRight } from './style';
import { useContext } from 'react';
import { Test5Context } from '../../context/test5';

const Comp4 = (/* NO PROPS ALLOWED */) => {
  const { handleChangeAllInput, toggleModal } = useContext(Test5Context)
  return(
    <>
      <div className={cssWrapper}>
        <div className={cssModalRight}>
          Input Modal
          <button type="button" onClick={toggleModal}>⊗</button>
        </div>
        <input id="mynumber2" type="number" placeholder="input mynumber2" onChange={handleChangeAllInput}></input>
      </div>
    </>
  )
}

export default Comp4;