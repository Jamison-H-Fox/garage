import {
  Add,
  Garage,
  Login,
  Logout,
  Spinner,
  Welcome,
  Header,
  Update,
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
        <Route path='/welcome' element={<Welcome navigate={navigate}/>} />
        <Route path='/garage' element={<Garage navigate={navigate}/>} />
        <Route path='/add' element={<Add />} />
        <Route path='/update' element={<Update />} />
        <Route path='/logout' element={<Logout navigate={navigate}/>} />
      </Routes>
    </div>
  );
}

export default App;