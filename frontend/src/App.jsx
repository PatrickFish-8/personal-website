import Navbar from './components/navbar/navbar'
import Profile from './components/profile/profile'
import Project from './components/projects/projects.jsx';
import Experiences from './components/experiences/experiences.jsx';
import About from './components/about/about.jsx';
import Chat from './components/chat/chat.jsx';
import './App.css'


function App() {
  return (
    <>
      <Navbar/>
      <Profile/>
      <Chat/>
      <About/>
      <div id="projects">
        <h2>Projects</h2>
        <Project name="Project 1" description="Project 1 Description" github="https://github.com"/>
        <Project name="Project 2" description="Project 2 Description" github="https://github.com"/>
      </div>
      <div id='exp'>
        <h2>Experience</h2>
        <Experiences title="experience 1" info="info" date="date" bullets={['Bullet 1', 'Bullet 2']}/>
        <Experiences title="experience 2" info="info" date="date" bullets={['Bullet 1', 'Bullet 2']}/>
      </div>
    </>
    
  )
}

export default App
