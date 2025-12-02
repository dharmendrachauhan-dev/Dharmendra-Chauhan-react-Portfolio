import React from 'react';
import './index.css'
import ReactDOM from 'react-dom/client';
import { Route, RouterProvider, createRoutesFromElements, createBrowserRouter } from 'react-router-dom';
import Layout from './Layout.jsx'
import Home from './components/Home/Home.jsx'
import Contact from './components/Contact/Contact.jsx'
import Education from './components/Education/Education.jsx'
import About from './components/About/About.jsx'
import Project from './components/Project/Project.jsx'
import Skill from './components/Skill/Skill.jsx';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="/" element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="contact" element={<Contact />}/>
      <Route path="education" element={<Education />}/>
      <Route path="project" element={<Project />}/>
      <Route path="skill" element={<Skill />}/>
    </ Route>
  )
)


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
