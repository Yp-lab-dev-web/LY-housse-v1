
import './Inscription.css'
import {useState} from "react"
function Inscription(){
const [formData, setFormData] = useState({
  nomComplet: '',
  email: '',
  motDePasse: ''
});
const handleChange = (e) => {
const {name,value} = e.target;
setFormData({...formData,[name]:value
});
};

const hundleSubmite = async (e) =>{
  e.preventDefault();
  try{
  const response = await fetch('http://localhost:5000/api/donnees', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      const data = await response.json();
      console.log('Réponse du serveur :', data);
      alert('Inscription réussie ! 🚀');
    } catch (error) {
      console.error('Erreur lors de l\'envoi :', error);
    }
}
    return (
          <>
      <main className="inscription-page">
      <div className="inscription-container">
        
       
        
        <form  className="inscription-form"  onSubmit={ hundleSubmite}>
          <div className="input-group">
            <label htmlFor="nom">Nom complet</label>
            <input 
              type="text" 
              id="nom" 
              name="nom" 
              value={formData.nom}
              onChange={handleChange} 
              required
              
            />
          </div>

          <div className="input-group">
  <label htmlFor="email">Adresse Email</label>
  <input 
    type="email" 
    id="email" 
    name="email"  
    value={formData.email}
    onChange={handleChange} 
    required  
  />
</div>

          <div className="input-group">
            <label htmlFor="password">Mot de passe</label>
            <input 
              type="password" 
              id="password" 
              name="password" 
               value={formData.password}
              onChange={handleChange} 
              required
            />
          </div>
          
          <button type="submit" className="btn-gold">S'inscrire</button>
        </form>

       
  </div>
</main>
    </>
    )}

export  default Inscription