import Header from "./components/header"
import About from "./components/about"
import Resume from "./components/resume"
import Services from "./components/services"
import Skills from "./components/skills"
import Projects from "./components/projects"
import Contacts from "./components/contacts"
import { MantineProvider } from '@mantine/core';
import '@mantine/core/styles.css';
import { Notifications } from '@mantine/notifications';

function App() {

  return (
    <MantineProvider>
      <Notifications/>
      <Header/>
      <About/>
      <Resume/>
      <Services/>
      <Skills/>
      <Projects/>
      {/* <Contacts/> */}
      <div className="gototop js-top">
        <a href="#" className="js-gotop"><i className="icon-arrow-up22"></i></a>
      </div>
    </MantineProvider>
  )
}

export default App
