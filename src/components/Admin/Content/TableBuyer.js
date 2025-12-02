


const TableBuyer = (props) => {

    const {listBuyer} = props;

return (
    <>
    <table className="table table-hover table-bordered">
  <thead>
    <tr>
      <th scope="colS">Id</th>
      <th scope="colS">Username</th>
      <th scope="colS">Email</th>
      <th scope="colS">Action</th>
    </tr>
  </thead>
  <tbody>
    {listBuyer && listBuyer.length > 0 && listBuyer.map ((item,index)=>{
        console.log ('>>> check item:', item);
        return(
    <tr key={`table-user-${index}`}>
      <td scope="row">{item.id}</td>
      <td>{item.username}</td>
      <td>{item.email}</td>
     
      <td>
        <button className="btn btn-secondary"
        onClick={() => props.handleClickBtnView(item)}
        >View</button>
        <button 
        className="btn btn-warning mx-3"
        onClick={() => props.handleClickBtnUpdate(item)}
        >Update</button>
        <button className="btn btn-danger"
        onClick={() => props.handleClickBtnDelete(item)}
        >Delete</button>
      </td>
    </tr>
        )
    })}
     {listBuyer && listBuyer.length ===0 && <tr>
        <td colSpan={4} >
            Not found data
        </td>
        </tr>}
    
  </tbody>
</table>
    </>
)
}
export default TableBuyer;