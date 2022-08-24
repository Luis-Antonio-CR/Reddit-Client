import './style/App.css';

import NavBar from "./components/NavBar";
import SubredditsBar from "./components/SubredditsBar";
import Home from './components/Home';

const App = () => {
    return(
      <div className='body'>
        <NavBar />
        <div className='main'>
          <Home />
          <div className='lateralBar'>
            <SubredditsBar />
          </div>
        </div>
      </div>
    )
}

 export default App;