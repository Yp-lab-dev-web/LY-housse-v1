import  './Accueil.css'
import baner from '../assets/baniere.png'
import {Link} from 'react-router-dom'


function Accueil(){
    return(
    <>
    <header className="hero">
        <img src={baner} alt="LR-Housse : housses sur mesure" className="hero__img" />
        <div className="hero__overlay" aria-hidden="true" />
 
        <nav className="hero__nav" aria-label="Navigation principale">
          <Link to="/inscription" className="btn btn--ghost">Register</Link>

        </nav>
 
        <div className="hero__cta">
          <Link to="/produits" className="btn btn--primary">Voir nos produits</Link>
        </div>
      </header>
</>
 )
}
export default Accueil; 