
import './App.css';
import Signup from './SIgnUp/Signup';
import { BrowserRouter as Rot, Route, Routes } from 'react-router-dom';
import Login from './Login/Login'
import Page from './Error/Error'
import Dashboard from './Dashboard';

function App() {
  return (
    <Rot>
      <Routes>
        <Route path="/" element={<Signup/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/dashboard" element={<Dashboard/>}></Route>
        <Route path="*" element={<Page/>}/>
      </Routes>
    </Rot>
  );
}

export default App;
