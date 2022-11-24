import Page from '../src/Pages/Page';
import Categories from './Components/Categories';
import { BrowserRouter } from "react-router-dom"
import Search from './Components/Search';
import "./index.css"


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      
        <Search />
        <Categories />
        <Page />
      </BrowserRouter>
    </div>
  );
}

export default App;
