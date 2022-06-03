import './style/App.css';
import NavBar from "./components/NavBar";
//import PostComp from "./components/PostComponent";
import CategoryBar from "./components/CategoriesBar";
import SubredditsBar from "./components/SubredditsBar";

const App = () => {
    return(
      <div className='body'>
        <h1>Hello</h1>
        <NavBar />
        <div className='main'>
          <section className='posts'>

          </section>
          <section className='lateralBar'>
            <CategoryBar />
            <SubredditsBar />
          </section>
        </div>
      </div>
    )
}

 export default App;