import {
  Add,
  Garage,
  Login,
  Logout,
  Spinner,
  Welcome,
  Header,
} from './components';
import { Routes, Route, useNavigate } from 'react-router-dom';


function App() {
  // navigation helpers:
  const navigate = useNavigate();
  

  return (
    <div className="App">
      <Spinner />
      <Header />
      <Routes>
        <Route path='/' element={<Login navigate={navigate}/>} />
        <Route path='/welcome' element={<Welcome />} />
        <Route path='/garage' element={<Garage />} />
        <Route path='/add' element={<Add />} />
        <Route path='/logout' element={<Logout />} />
      </Routes>
      
    </div>
  );
}

export default App;