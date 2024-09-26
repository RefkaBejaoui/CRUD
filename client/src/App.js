import './App.css';
import AddUser from './Components/AddUser';
import EditUser from './Components/EditUser';
import ListUser from './Components/ListUser';
import {Route, Routes} from "react-router-dom"

function App() {
  
  return (
    <div className="App">
     <Routes>
      <Route path='/' element={<ListUser />} />
      <Route path='/addUser' element={<AddUser />} />
      <Route path='/updateUser/:id' element={<EditUser />} />
     </Routes>
      
    </div>
  );
}

export default App;
