//import logo from './logo.svg'
import './App.css';
import './styles.css';
import Header from './components/Header';
import MoviesGrid from './components/MoviesGrid';
import Footer from './components/Footer';
function App() {
  return (
    <div>
      <div className='container'>
        <Header></Header>  
        <MoviesGrid></MoviesGrid>  
        <Footer></Footer>             
    </div>    
     
    </div>
  );
}

export default App;
