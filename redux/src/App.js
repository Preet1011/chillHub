import { BrowserRouter, Routes,Route } from 'react-router-dom';
import './App.css';
import Home from './components/home/home';
import Stories from './components/home/stories';
import Navbar from './components/layout/navbar';
import Notices from './components/home/Notice/Notices'
function App() {
  return (
    <div className="App">
        <Navbar/>
        <Stories/>
        <Home/>
      
        <Notices/>
        
        {/* <BrowserRouter>
          <Routes>
            <Route path="/" ></Route>
          </Routes>
        </BrowserRouter> */}
    </div>
  );
}

export default App;
