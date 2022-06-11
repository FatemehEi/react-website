import './App.css';
import Navbar from "./components/navbar";
import Banner from './components/banner';
import Cards from './components/Cards';
import Search from './components/Search';
import Logos from './components/Logos';
import Footer from './components/Footer'

function App() {
  return (
    <div>
      <Navbar />
      <Banner />
      <Cards />
      <Search />
      <Logos />
      <Footer />
    </div>
  );
}

export default App;
