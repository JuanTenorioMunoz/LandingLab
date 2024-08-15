import './App.css'
import CardContainer from './components/CardContainer/CardContainer'
import { cardInfo } from "c:/Users/Camilo/Desktop/web programming/vite-project/public/data/db"
import Navbar from './components/Navbar/Navbar'

function App() {

  return (
    <>
    <Navbar text='OUR GAMES'></Navbar>
    <CardContainer cards={cardInfo}></CardContainer>
    </>
  )
}

export default App


