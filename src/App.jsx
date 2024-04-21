import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import Login from './components/Auth/Login'
import Register from './components/Auth/Register'
import Navbar from './components/Layout/Navbar'
import Footer from './components/Layout/Footer'
import Jobs from './components/Job/Jobs'
import Home from './components/Home/Home'
import JobDetails from './components/Job/JobDetails'
import PostJob from './components/Job/PostJob'
import MyJobs from './components/Job/MyJobs'
import Application from './components/Application/Application'
import MyApplication from './components/Application/MyApplication'
import NotFound from './components/NotFound/NotFound'
import axios from 'axios'
import { Toaster } from 'react-hot-toast'


import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {
  

  return (
    <>
      <BrowserRouter>
        <Navbar />
      <Router>
        <Routes>
        <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/" element={<Home />} />
          <Route path="/job/getall" element={<Jobs />} />
          <Route path="/job/:id" element={<JobDetails />} />
          <Route path="/application/:id" element={<Application />} />
          <Route path="/applications/me" element={<MyApplication />} />
          <Route path="/job/post" element={<PostJob />} />
          <Route path="/job/me" element={<MyJobs />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
      <Footer />
        <Toaster />
      </BrowserRouter>
    </>
  )
}

export default App
