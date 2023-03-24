import {
  Add,
  Garage,
  Login,
  Logout,
  Spinner,
  Welcome,
  Header,
  Update,
  Delete,
} from './components';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { connect } from "react-redux";


function App(props) {
  // navigation helpers:
  const navigate = useNavigate();

  return (
    <div className="App">
      <Spinner />
      <Header />
      <div
        className='wrapper'
        style={{ opacity: props.spinnerOn ? '0.25' : '1' }}
      >
        <Routes>
          <Route path='/' element={<Login navigate={navigate}/>} />
          <Route path='/welcome' element={<Welcome navigate={navigate}/>} />
          <Route path='/garage' element={<Garage navigate={navigate}/>} />
          <Route path='/add' element={<Add navigate={navigate}/>} />
          <Route path='/update' element={<Update navigate={navigate}/>} />
          <Route path='/delete' element={<Delete navigate={navigate}/>} />
          <Route path='/logout' element={<Logout navigate={navigate}/>} />
        </Routes>
      </div>
    </div>
  );
}

const mapStateToProps = state => {
  return {
  }
}

export default connect(mapStateToProps, {  })(App);