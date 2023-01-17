import './App.css';
import Hero from './Components/Hero';
import Nav from './Components/Nav';
import Footer from './Components/Footer';
import Bestsellers from './Components/Bestsellers';
import Shirts from './Components/Shirts';
import Shoes from './Components/Shoes';
import Collections from './Components/Collections';
import Template from './Components/Template';
import {BrowserRouter as Router, Route, Routes,Link} from 'react-router-dom';
// hi
function App() {
  return (
    <>
    <Router>
        <Routes>
          <Route path ="/" element = {<Template />}>
            <Route path ="Landing" element = {<><Bestsellers /><Collections/><Shirts /><Shoes /></>}/>
            <Route path ="women" element = {<Shirts />}/>
            <Route path ="kids" element = {<Shoes />}/>
            <Route path ="accessories" element = {<Bestsellers />}/>
            <Route path ="*" element = {<h1>Error</h1>}/>
          </Route>
        </Routes>
      

    </Router>
    </>
  );
  
}

export default App;
