import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav_bar from './components/NavBar/navbar';
import searchBar from './components/SearchBar/search';
import Footer from './components/Footer/footer';
import Inspiration from './components/Inspiration/inspiration';
import Discover from './components/Discover/discover';
import Hosting from './components/Hosting/hosting';
import Flexible from './components/Flexible/flexible';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <a>Get the latest on our COVID-19 response</a>
        <div className='first'>
           <Nav_bar/>
        {/* <searchBar/> */}
        <Flexible/>
        </div>
       <div className='second'>
         <Inspiration/>
        <Discover/>
        <Hosting/>
        <Footer/>
       </div>
        
      </header>
      
    </div>
  );
}

export default App;
