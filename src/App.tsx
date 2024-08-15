import './App.css'
import CardContainer from './components/CardContainer/CardContainer'
import { cardInfo } from "c:/Users/Camilo/Desktop/web programming/vite-project/public/data/db"
import Navbar from './components/Navbar/Navbar'

function App() {

  return (
    <>
    <Navbar text='OUR GAMES'></Navbar>
    <div id='infoDiv'>   
       <h1 id='featured'>Featured Games</h1>
      <CardContainer cards={cardInfo}></CardContainer>
    </div>

    </>
  )
}

export default App


