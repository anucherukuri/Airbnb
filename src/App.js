import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav_bar from './components/NavBar/navbar';
import searchBar from './components/SearchBar/search';
import Footer from './components/Footer/footer';
import Inspiration from './components/Inspiration/inspiration';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Nav_bar/>
        <searchBar/>
        <Inspiration/>
        {/* <Footer/> */}
      </header>
    </div>
  );
}

export default App;
