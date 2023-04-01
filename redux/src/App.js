import { BrowserRouter, Routes,Route } from 'react-router-dom';
import './App.css';
import Home from './components/home/home';
import Stories from './components/home/stories';
import Navbar from './components/layout/navbar';

function App() {
  return (
    <div className="App">
        <Navbar/>
        <Stories/>
        <Home/>
      
        
        
        {/* <BrowserRouter>
          <Routes>
            <Route path="/" ></Route>
          </Routes>
        </BrowserRouter> */}
    </div>
  );
}

export default App;
