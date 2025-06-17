import "../CSS/commonCSS/Accueil.css"
export default function Accueil(){
    return(
         <h1 id="AccueilH1">Je suis la page d'accueil</h1>,

         <section className="accueilMain">
                <article className="accueilElements">
                    <div id="firstElement">
                        <img src="/TaskQuestLogo.jpg" alt="First_image" />
                    </div>
                </article>
         </section>
    )
}