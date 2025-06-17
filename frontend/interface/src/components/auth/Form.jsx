//Faire des modifications avec les API afin de retourner l'information de si l'utilisateur existe déjà ou non

import "../CSS/authCSS/form.css"

export default function Form() {
  function form(event) {
    event.preventDefault();
    alert('Formulaire envoyé')
  }
  return (

    <section id="FormMain">
        <h1>Login</h1>
        <form onSubmit={form} className="formulaire">

            <article>
                <label htmlFor="firstname"> Quel est ton prénom ? </label>
                <input name="Firstname" placeholder="Firstname..." minLength={1} /> 
            </article>

            <article>
                <button type="submit">Search</button>
            </article>
        </form>
    </section>

  );
}