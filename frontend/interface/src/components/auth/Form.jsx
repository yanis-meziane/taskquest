//Faire des modifications avec les API afin de retourner l'information de si l'utilisateur existe déjà ou non

import "../CSS/authCSS/form.css"
import { Link } from "react-router-dom";

export default function Form() {
  function form(event) {
    event.preventDefault();
    alert('Formulaire envoyé')
  }
  return (
    
    <section id="FormMain">
        <div id="formSection">
            <h1 id="signin">Sign in </h1>
                <form onSubmit={form} method='post' action = '......./backend/src/models/Users.js' className="formulaire">

                    <article className="formElements">
                        <label htmlFor="firstname"> Quel est ton prénom ? </label>
                        <input type="text" name="firstname" id="lastname" placeholder="Firstname..." minLength={1} /> 
                    </article>

                    <article className="formElements">
                        <label htmlFor="lastname">Quel est ton nom de famille ?</label>
                        <input type="text" name="lastname" id="lastname" placeholder="Lastname..." minLength={1} />
                    </article>

                    <article className="formElements">
                        <label htmlFor="mail">Quel est ton mail ?</label>
                        <input type="email" name="mail" id="mail" placeholder="Mail..." />
                    </article>

                    <article className="formElements">
                        <label htmlFor="password">Quel est ton mot de passe ?</label>
                        <input type="password" name="password" id="password" minLength={1} />
                    </article>

                    <article className="formElements">
                        <label htmlFor="confPassword">Confirme ton mot de passe</label>
                        <input type="password" name="password" id="password" minLength={1} />
                    </article>

                    <article className="formElements">
                        <button type="submit">Soumettre</button>
                    </article>

                    <article className="formElements">
                        Si tu as déjà un compte, clique <Link to={"/login"}>ici</Link>
                    </article>
                </form>
        </div>
    </section>

  );
}