import "../CSS/commonCSS/Accueil.css"
import taskQuestLogo from "../assets/TaskQuestLogo.jpg"


export default function Accueil(){
    return(
         <section className="accueilMain">
                <article className="accueilElements">
                    <div id="firstElement">
                       <img src={taskQuestLogo} alt="First_image" id="taskQuestImage" />
                    </div>
                </article>

                <article className="accueilElements">
                        <div id="secondElement">
                                <p>
                                    <em><b>TaskQuest</b></em> est la plateforme permettant aux personnes impliquées dans les associations de faciliter la réalisation des tâches.
                                </p>
                        </div>
                </article>
         </section>
    )
}