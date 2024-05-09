import { useState , useContext , useEffect} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Context } from "./main";
import Login from './components/Auth/Login'
import Register from './components/Auth/Register'
import Navbar from './components/Layout/Navbar'
import Footer from './components/Layout/Footer'
import Jobs from './components/Job/Jobs'
import Home from './components/Home/Home'
import JobDetails from './components/Job/JobDetails'
import PostJob from './components/Job/PostJob'
import MyJobs from './components/Job/MyJobs'
// import Application from './components/Application/Application'
// import MyApplication from './components/Application/MyApplication'
import NotFound from './components/NotFound/NotFound'
import axios from 'axios'
import { Toaster } from 'react-hot-toast'


import { BrowserRouter, Route, Routes  } from 'react-router-dom'

function App() {
  const { isAuthorized, setIsAuthorized, setUser } = useContext(Context);
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.get(
          "http://localhost:4000/api/v1/user/getuser",
          {
            withCredentials: true,
          }
        );
        setUser(response.data.user);
        setIsAuthorized(true);
      } catch (error) {
        setIsAuthorized(false);
      }
    };
    fetchUser();
  }, [isAuthorized]);

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/" element={<Home />} />
          <Route path="/job/getall" element={<Jobs />} />
          <Route path="/job/:id" element={<JobDetails />} />
          <Route path="/job/post" element={<PostJob />} />
          {/* <Route path="/application/:id" element={<Application />} />
          <Route path="/applications/me" element={<MyApplications />} />
          */}
          <Route path="/job/me" element={<MyJobs />} /> 
          <Route path="/notfound" element={<NotFound />} />
        </Routes>
        <Footer />
        <Toaster />
      </BrowserRouter>
    </>
  )
}

export default App ;
