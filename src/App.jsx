import { Outlet } from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'

const App = () => {
  return (
    <>
      <Header></Header>
      <Outlet></Outlet> 
      {/* <Footer></Footer> */}
    </>
  )
}

export default App



