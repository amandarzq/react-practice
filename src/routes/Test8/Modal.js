import { cssModal } from "./style"

const Modal = ({ input, onReset }) => {
  const { name, age, address } = input || {}
  return (
    <div className={cssModal}>
      Name: {name ? name : '_____'}
      <br/>
      Age: {age ? age : '_____'}
      <br/>
      Address: {address ? address : '_____'}
      <br/>
      <button onClick={onReset}>Reset</button>
    </div>
  );
};

export default Modal;
