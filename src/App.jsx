import { Route, Routes } from 'react-router-dom'
import './App.css'
import Event from './Event'
import EventList from './EventList'
import Footer from './HeaderFooter/Footer'
import Header from './HeaderFooter/Header'


function Heading() {
  return (
    <div className="heading">
      Ongoing Events
    </div>
  )
}

function App() {
  return (
    <div className="screen">
      <Header name={"Hridyanshu"} />
      
      <div className="main">
        <Heading />
        <Routes>
          <Route path='/' element={<EventList />}/>
          <Route path=':id' element={<Event />}/>
        </Routes>
      </div>
        
      <Footer />
    </div> 
  )
}

export default App
