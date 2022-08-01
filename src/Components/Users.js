import UsersList from '../Data/users.json'

function Users() {
  return (
    <div >
        {UsersList.map((users, index)=>{
            return <p>{users.name.firstname} {users.name.lastname}</p>
        })}
    </div>
  );
}

export default Users;