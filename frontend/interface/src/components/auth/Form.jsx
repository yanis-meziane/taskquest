// frontend/interface/src/components/auth/Form.jsx
import { useState } from "react";
import "../CSS/authCSS/form.css";
import { Link } from "react-router-dom";

export default function Form() {
  // État pour gérer les données du formulaire
  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    email: '', // CORRECTION: utiliser 'email' au lieu de 'mail'
    password: '',
    confPassword: ''
  });

  // État pour gérer les messages (succès/erreur)
  const [message, setMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  // Fonction pour mettre à jour les données du formulaire
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // Fonction de soumission du formulaire
  async function handleSubmit(event) {
    event.preventDefault();
    
    // Vérifier que les mots de passe correspondent
    if (formData.password !== formData.confPassword) {
      setMessage('Les mots de passe ne correspondent pas');
      return;
    }

    // Validation de base
    if (formData.password.length < 6) {
      setMessage('Le mot de passe doit contenir au moins 6 caractères');
      return;
    }

    setIsLoading(true);
    setMessage('');

    try {
      // Envoyer les données au backend
      const response = await fetch('http://localhost:3000/auth/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          firstname: formData.firstname,
          lastname: formData.lastname,
          email: formData.email, // CORRECTION: utiliser 'email'
          password: formData.password
        })
      });

      const result = await response.json();

      if (result.success) {
        setMessage('Inscription réussie ! Vous pouvez maintenant vous connecter.');
        // Réinitialiser le formulaire
        setFormData({
          firstname: '',
          lastname: '',
          email: '',
          password: '',
          confPassword: ''
        });
        
        // Redirection après succès
        setTimeout(() => {
          window.location.href = '/login';
        }, 2000);
        
      } else {
        setMessage(result.message || 'Erreur lors de l\'inscription');
      }

    } catch (error) {
      console.error('Erreur:', error);
      setMessage('Erreur de connexion au serveur');
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <section id="FormMain">
      <div id="formSection">
        <h1 id="signin">Sign up</h1>
        
        {/* Affichage des messages */}
        {message && (
          <div className={`message ${message.includes('réussie') ? 'success' : 'error'}`}>
            {message}
          </div>
        )}

        <form onSubmit={handleSubmit} className="formulaire">
          <article className="formElements">
            <label htmlFor="firstname">Quel est ton prénom ?</label>
            <input 
              type="text" 
              name="firstname" 
              id="firstname" 
              placeholder="Firstname..." 
              minLength={1}
              value={formData.firstname}
              onChange={handleChange}
              required
            /> 
          </article>

          <article className="formElements">
            <label htmlFor="lastname">Quel est ton nom de famille ?</label>
            <input 
              type="text" 
              name="lastname" 
              id="lastname" 
              placeholder="Lastname..." 
              minLength={1}
              value={formData.lastname}
              onChange={handleChange}
              required
            />
          </article>

          <article className="formElements">
            <label htmlFor="email">Quel est ton email ?</label>
            <input 
              type="email" 
              name="email" 
              id="email" 
              placeholder="Email..."
              value={formData.email}
              onChange={handleChange}
              required
            />
          </article>

          <article className="formElements">
            <label htmlFor="password">Quel est ton mot de passe ?</label>
            <input 
              type="password" 
              name="password" 
              id="password" 
              placeholder="Au moins 6 caractères..."
              minLength={6}
              value={formData.password}
              onChange={handleChange}
              required
            />
          </article>

          <article className="formElements">
            <label htmlFor="confPassword">Confirme ton mot de passe</label>
            <input 
              type="password" 
              name="confPassword" 
              id="confPassword" 
              placeholder="Confirme ton mot de passe..."
              minLength={6}
              value={formData.confPassword}
              onChange={handleChange}
              required
            />
          </article>

          <article className="formElements">
            <button type="submit" disabled={isLoading}>
              {isLoading ? 'Inscription...' : 'S\'inscrire'}
            </button>
          </article>

          <article className="formElements">
            Si tu as déjà un compte, clique <Link to={"/login"}>ici</Link>
          </article>
        </form>
      </div>
    </section>
  );
}