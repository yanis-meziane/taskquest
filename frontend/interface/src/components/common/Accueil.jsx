import "../CSS/commonCSS/Accueil.css"
import taskQuestLogo from "../assets/TaskQuestLogo.jpg"
import { Award, BookmarkCheck, ChevronRight, FlagTriangleLeft, Footprints } from "lucide-react"


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
                                    <em><b>TaskQuest</b></em> est la plateforme permettant aux personnes impliquées dans les associations de faciliter la réalisation des tâches. Cette plateforme a été conçue pour rendre ludique et plus simple les activités de grandes envergures pouvant être complexes.
                                </p>
                        </div>
                </article>

                <article className="accueilElements">
                    <h2>Pourquoi nous choisir ?</h2>
                        <div className="thirdElement">
                            <div className="argues">
                                 <Award />
                                <p>
                                    Fiabilité
                                </p>
                            </div>

                            <div className="argues">
                                <BookmarkCheck />
                                <p>
                                    Efficacité
                                </p>
                            </div>

                            <div className="argues"> 
                                <ChevronRight />
                                <p>
                                    Rapidité
                                </p>
                            </div>

                            <div className="argues">

                                <FlagTriangleLeft />
                                <p>
                                    Simplicité
                                </p>
                            </div>

                            <div className="argues">
                                <Footprints />
                                <p>
                                    Cohérence
                                </p>
                            </div>
                        </div>
                </article>
         </section>
    )
}