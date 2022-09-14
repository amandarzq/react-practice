
const Input = ({ onChange, onSubmit }) => {
  return (
    <form onSubmit={onSubmit}>
      <input type="text" placeholder="search" onChange={onChange} />
      <button type="submit">🔍</button>
    </form>
  )
}

export default Input;
