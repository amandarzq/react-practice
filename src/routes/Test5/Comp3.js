import { cssWrapper } from "./style";

import { useContext } from "react";
import Comp4 from "./Comp4";
import { Test5Context } from "../../context/test5";

const Comp3 = (/* NO PROPS ALLOWED */) => {
  const { mynumber, showModal, toggleModal } = useContext(Test5Context)

  return(
    <>
      <div className={cssWrapper}>The Inputted Value is: {mynumber ? mynumber : '______'}*</div>
      <button type="button" onClick={toggleModal}>Show Modal</button>
      {showModal && <Comp4/>}
    </>
  )
}

export default Comp3;