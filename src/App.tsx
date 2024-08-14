import './App.css'
import CardContainer from './components/CardContainer/CardContainer'
import cardInfo from '../public/data/db'
import Navbar from './components/Navbar/Navbar'

function App() {


  return (
    <>
    <Navbar text='OUR GAMES'></Navbar>
    <CardContainer></CardContainer>
    </>
  )
}

export default App
