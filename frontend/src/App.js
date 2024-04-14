import ChatBot from "./pages/chatbot/ChatBot";
import Homepage from "./pages/homepage/Homepage";
import Form1 from "./pages/form/Form1";
import {Routes, BrowserRouter,Route } from 'react-router-dom'


function App() {
 return(
  <>
    <BrowserRouter>
      <Routes >
        <Route path="/" element={<Homepage />} />
        <Route path="/form" element={<Form1 />} />
        <Route path="/chatbot" element={<ChatBot />} />
      </Routes>
    </BrowserRouter>
  </>
 )
}
export default App