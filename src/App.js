import {
  Add,
  Garage,
  Login,
  Logout,
  Spinner,
  Welcome,
  Message,
  Header,
} from './components';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Spinner />
      <Header />
      <Message />
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/welcome' element={<Welcome />} />
        <Route path='/garage' element={<Garage />} />
        <Route path='/add' element={<Add />} />
        <Route path='/logout' element={<Logout />} />
      </Routes>
      
    </div>
  );
}

export default App;