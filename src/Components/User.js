import UsersList from '../Data/users.json'

function Users() {
  return (
    <div >
        <table>
            <tr>
                <th>Serial No.</th>
                <th>Name</th>
                <th>Email ID</th>
                <th>Address</th>
            </tr>
            {UsersList.map((users, index)=>{
                return <tr>
                    <td>{users.id}</td>
                    <td>{users.name.firstname} {users.name.lastname}</td>
                    <td>{users.email}</td>
                    <td>{users.address.number}, {users.address.street} </td>
                </tr>
            })}
        </table>
    </div>
  );
}

export default Users;