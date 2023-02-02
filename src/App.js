import { useEffect, useState } from 'react';
import './App.css';
import Header from './components/Header/Header';
import LoginForm from './components/LoginPage/LoginForm';
import Taimer from './components/Timer/Taimer';
import User from './components/User/User';

function App() {
const [isloggedIn,setisloggedIn] = useState(true)
const [page,setPage] = useState(true)

const loginHandler = () => {
  setisloggedIn((prevstate)=>!prevstate)
}

  useEffect(()=>{
    const result = localStorage.getItem('AUTH')
    setisloggedIn(!result);
  },[])
  return (
    <>
      <Header isloggedIn = {isloggedIn} setisloggedIn={setisloggedIn} setPage={setPage}/>
  {isloggedIn ? <LoginForm loginHandler = {loginHandler}/>: (page ? <User/> : <Taimer/>) }
    </>
  );
}

export default App;
