import './style/App.css';

import NavBar from "./components/NavBar";
//import PostComp from "./components/PostComponent";
import CategoryBar from "./components/CategoriesBar";
import SubredditsBar from "./components/SubredditsBar";

const App = () => {
    return(
      <div className='body'>
        <NavBar />
        <div className='main'>
          <div className='posts'></div>
          <div className='lateralBar'>
            <CategoryBar />
            <SubredditsBar />
          </div>
        </div>
      </div>
    )
}

 export default App;