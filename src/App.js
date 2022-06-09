import { Routes, Route } from 'react-router-dom';
import HomePage from './components/home/HomePage';
import BuySellPage from './components/buy_sell/BuySellPage';
import PropertyDetailsPage from './components/Property_Details/PropertyDetailsPage';
import Header from './components/header';
import Footer from './components/footer';

function App() {
  return (
   <>
      <Header></Header>
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route path="/buy" element={<BuySellPage />} />
        <Route exact path="/property-details" element={<PropertyDetailsPage />} />
      </Routes> 
      <Footer></Footer>
   </>
  );
}

export default App;
