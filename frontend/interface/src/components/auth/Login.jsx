import { useState } from "react";
import "../CSS/authCSS/login.css"

export default function Login() {
  // État pour gérer les données du formulaire
  const [loginData, setLoginData] = useState({
    mail: '',
    loginPassword: ''
  });

  // État pour gérer les messages et le chargement
  const [message, setMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  // Fonction pour mettre à jour les données du formulaire
  const handleChange = (e) => {
    setLoginData({
      ...loginData,
      [e.target.name]: e.target.value
    });
  };

  // Fonction de soumission du formulaire
  async function handleSubmit(event) {
    event.preventDefault(); // Correction de la faute de frappe
    
    setIsLoading(true);
    setMessage('');

    try {
      // Envoyer les données au backend
      const response = await fetch('http://localhost:3000/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          mail: loginData.mail,
          loginPassword: loginData.loginPassword
        })
      });

      const result = await response.json();

      if (result.success) {
        setMessage('Connexion réussie !');
        
        // Stocker les informations utilisateur (optionnel)
        sessionStorage.setItem('user', JSON.stringify(result.user));
        
        // Rediriger vers la page principale (à adapter selon votre app)
        // window.location.href = '/dashboard';
        
      } else {
        setMessage(result.message || 'Erreur lors de la connexion');
      }

    } catch (error) {
      console.error('Erreur:', error);
      setMessage('Erreur de connexion au serveur');
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div id="div">
      <section className="LoginMain">
        <h1>Login</h1>   

        {/* Affichage des messages */}
        {message && (
          <div className={`message ${message.includes('réussie') ? 'success' : 'error'}`}>
            {message}
          </div>
        )}

        <form onSubmit={handleSubmit}>
          <article className="loginElements">
            <label htmlFor="mail">Email</label>    
            <input 
              type="email" 
              name="mail" 
              id="loginMail" 
              placeholder="Mail ..."
              value={loginData.mail}
              onChange={handleChange}
              required
            />
          </article>

          <article className="loginElements">
            <label htmlFor="loginPassword">Mot de Passe</label>
            <input 
              type="password" 
              name="loginPassword" 
              id="loginPassword" 
              placeholder="Password..."
              value={loginData.loginPassword}
              onChange={handleChange}
              required
            />
          </article>

          <article className="loginElements">
            <button type="submit" id="loginButton" disabled={isLoading}>
              {isLoading ? 'Connexion...' : 'Soumettre'}
            </button>
          </article>
        </form> 
      </section>
    </div>
  );
}