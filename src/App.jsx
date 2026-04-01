import './App.css'
import Hero from './components/head/hero/Hero'
import Nav from './components/head/Nav'
import StatusBar from './components/head/StatusBar'
import Steps from './components/steps/Steps'

function App() {


  return (
    <>
      <Nav></Nav>
      <div className="divider -mt-1"></div>
      <Hero></Hero>
      <StatusBar/>
      <Steps></Steps>

    </>
  )
}

export default App
