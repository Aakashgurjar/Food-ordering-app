// import logo from './logo.svg';     //  it is not included  delete this is file
import './App.css';
import { BrowserRouter , Route , Routes } from "react-router-dom"
import Home from './pages/Home';
import Sucess from './pages/Sucess';
import Error from './pages/Error'

function App() {
  return (
    // <div className="App">
    //  app
    // </div>

    <BrowserRouter>
      <Routes>

        <Route path='/' element={<Home/>}/>  
        <Route path='/sucess' element={<Sucess/>}/>  
        <Route path='/*' element={ <Error/>} />

      </Routes>
      </BrowserRouter>
  );
}

export default App;
