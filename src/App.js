import './App.css';
import RegistrationForm from './components/RegistrationForm';
import ProfilePage from './components/ProfilePage';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Routes>
      <Route path='/' element={<RegistrationForm/>}/>
      <Route path='/profile' element={<ProfilePage/>}/>
    </Routes>
  );
};

export default App;