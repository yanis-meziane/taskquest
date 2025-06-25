
import "../CSS/commonCSS/settings.css"


export default function Settings(){
    return(
        <section className="settingsMain">
                <div id="settings">
                    <article className="settingsElements">
                         <h2>Oubli de mot de passe</h2>
                            <p>
                                Si tu as oublié ton mot de passe c'est <a href="#">ici</a> {/*Faire un truc plus propre pour les liens*/}
                            </p>
                    </article>

                    <article className="settingsElements">
                        <h2>Langues</h2>
                            <div className="languages">
                                <p>
                                    Français
                                </p>
                            </div>

                            <div className="languages">
                                <p>
                                    Anglais
                                </p>
                            </div>
                    </article>


                </div>
        </section>
    )
}