import './App.css';
import Login from './components/Login';
import Navbar from './components/Pages/NavPages/Navbar';
import { Routes, Route } from 'react-router-dom'
import Register from './components/Register';
import Dashboard from './components/Pages/userHome/Dashboard';
import UserProfile from './components/Pages/userHome/UserProfile';

import About from './components/Pages/NavPages/About'
import Service from './components/Pages/NavPages/Service'
import Contact from './components/Pages/NavPages/Contact'
import Addmoney from './components/Pages/userHome/Addmoney';
import Transfer from './components/Pages/userHome/Transfer';
import Accounts from './components/Pages/userHome/Accounts';
import EditProfile from './components/Pages/userHome/EditProfile';
import Footer from './components/Pages/NavPages/Footer';
function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={ <Dashboard /> } />
        <Route path='/about' element={ <About /> } />
        <Route path='/contact' element={ <Contact /> } />
        <Route path='/service' element={ <Service /> } />
        <Route path='/login' element={ <Login /> } />
        <Route path='/register' element={ <Register /> } />
        <Route path='/userprofile' element={ <UserProfile /> } />

        <Route path='/addmoney/:id' element={ <Addmoney /> } />
        <Route path='/transfer' element={ <Transfer /> } />
        <Route path='/allaccounts' element={ <Accounts /> } />
        <Route path='/editprofile' element={ <EditProfile /> } />
      </Routes>
      <Footer />
    </>
  );
}

export default App;