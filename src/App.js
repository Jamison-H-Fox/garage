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
        <Route path='/add' element={<Add navigate={navigate}/>} />
        <Route path='/update' element={<Update navigate={navigate}/>} />
        <Route path='/logout' element={<Logout navigate={navigate}/>} />
      </Routes>
    </div>
  );
}

export default App;

// Create updateIndex action & reducer
// Call that action in garage onClick
// Make activeIndex available to Update through store