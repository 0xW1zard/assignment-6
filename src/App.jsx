import './App.css'
import Hero from './components/head/hero/Hero'
import Nav from './components/head/Nav'
import StatusBar from './components/head/StatusBar'

function App() {


  return (
    <>
      <Nav></Nav>
      <div className="divider -mt-1"></div>
      <Hero></Hero>
      <StatusBar/>

    </>
  )
}

export default App
