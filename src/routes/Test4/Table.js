const Table = ({ data = [] }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Age</th>
          <th>Address</th>
        </tr>
      </thead>
      <tbody>
        {
          data?.map((item, idx) => {
            const { name, age, address } = item || {};
            return (
              <tr key={idx}>
                <td>{name}</td>
                <td>{age}</td>
                <td>{address}</td>
              </tr>
            )
          })
        }
      </tbody>
    </table>
  )
}

export default Table;
