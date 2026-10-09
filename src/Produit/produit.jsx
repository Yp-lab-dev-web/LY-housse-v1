import './produit.css'
import productbanner from '../assets/product-banner.png'
import sacoche from  '../assets/sacoche.png'
import chaussure from  '../assets/chaussure.png'
import chemise from '../assets/chemise.png'
import {Link} from  'react-router-dom'
const categories = [
  { to: "/chaussure", img: chaussure, label: "Chaussures" },
  { to: "/sacoche", img: sacoche, label: "Sacoches" },
  { to: "/chemise", img: chemise, label: "Chemises" },
];
function produit(){
    return(
    <>
    <section className="page-banner">
        <img src={productbanner} alt="Collection LR-Housse" className="product-banner" />
      </section>
 
      <main className="produits-page">
        <section className="intro">
          <h1>Explorez une sélection de créations de la Maison</h1>
        </section>
 
        <section className="produit-container" aria-label="Catégories de produits">
          {categories.map(({ to, img, label }) => (
            <Link key={to} to={to} className="produit-card">
              <img src={img} alt={label} className="produit-card__img" />
              <span className="produit-card__label">{label}</span>
            </Link>
          ))}
        </section>
      </main>
 
   


  </>
)
}
export  default produit ;