import "../CSS/authCSS/login.css"

export default function  Login(){
    function form(event){
        event.PreventDefault();
        alert('Formulaire bien envoyé')
    }
    return(
        <div id="div">
            <section className="LoginMain">
            <h1>Login</h1>   

            <form action="#" method="post" onSubmit={form}>

                <article className="loginElements">
                    <label htmlFor="mail">Email</label>    
                    <input type="text" name="mail" id="loginMail" placeholder="Mail ..."/>
                </article>

                <article className="loginElements">
                    <label htmlFor="loginPassword">Mot de Passe</label>
                    <input type="password" name="loginPassword" id="loginPasword" placeholder="Password..." />
                </article>

                <article className="loginElements">
                    <input type="submit" value="Soumettre" id="loginButton" />
                </article>
            </form> 
        </section>
        </div>
    )
}