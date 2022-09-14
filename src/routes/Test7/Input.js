import { useContext } from "react";
import { Test7Context } from "../../context/test7";

const Input = () => {
  const { onFilterData, setKeyword } = useContext(Test7Context);
  return (
    <form onSubmit={onFilterData}>
      <input type="text" placeholder="search" onChange={(e) => setKeyword(e.target.value)} />
      <button type="submit">🔍</button>
    </form>
  )
}

export default Input;
