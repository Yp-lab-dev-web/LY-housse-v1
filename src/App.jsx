import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Accueil from  './Accueil/Accueil'
import Product from './Produit/produit'
import Chaussure from './chaussure/chaussure'
import Sacoche from  './sacoche/sacoche'
import Chemise from './chemise/chemise'
import Inscription  from './Inscription/Inscription'


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Accueil />} />
   <Route path="/produits" element={<Product />} />
        <Route path="/chaussure" element={<Chaussure/>}/>
        <Route path="/Sacoche" element={<Sacoche/>}/>
        <Route path="/chemise" element={<Chemise/>}/>
        <Route path="/Inscription" element={<Inscription/>}/>
     
      </Routes>
    </BrowserRouter>
  );
}

export default App;
