
import './App.css';
import Users from './Components/Users'
import User from './Components/User'
import Products from './Components/Products'
import Filter from './Components/Filter'

function App() {
  return (
    <div className="App">
      <h3>List of Users</h3>
      <Users />
      <User />
      <br/>
      <Products />
      <br/>
      <br/>
      <br/>
      <Filter />
    </div>
  );
}

export default App;
