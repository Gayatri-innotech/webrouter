import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom"
import About from './About';
import Contact from './Contact';
import Messages from './Messages';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<About/>}/>
        <Route path="contact" element={<Contact/>}/>
        <Route path="messages" element={<Messages/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
