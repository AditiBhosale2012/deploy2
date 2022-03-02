
import './App.css';
import Buttons from './components/Buttons';
import Navbar from './components/Navbar';
import Navbar2 from './components/Navbar2';
import Animate from './components/Animate';
function App() {
  return (
    <div classname="blank">Lovely
    <Navbar2/>
    <Navbar title="uppercase" title2="lowecase">
      <Buttons/>
      </Navbar>
      <Animate/>
      {/* delete from here */}
      
      <div className='hello'> 
        <div className="right">right</div>
        <div className="left">left
          
      </div>
      </div>
     
      
    </div>
    
  );
}

export default App;
