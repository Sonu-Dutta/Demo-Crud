import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import SideNavBar from './pages/SideNavBar';
import Add from './pages/user/Add';
import Edit from './pages/user/Edit';
import Users from './pages/user/Users';

function App() {
  return (
    <div className="App">
      <SideNavBar/>
      <Routes>
        <Route  path="/" exact element={<Home/>} />
        <Route  path="/home" exact element={<Home/>} />
        <Route  path="/users/:id" exact element={<Users/>} />
        <Route  path="/add-user" exact element={<Add/>} />
        <Route  path="/edit-user/:id" exact element={<Edit/>} />
      </Routes>
    </div>
  );
}

export default App;
