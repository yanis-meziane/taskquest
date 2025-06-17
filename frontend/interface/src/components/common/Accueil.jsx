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
                                    <em><b>TaskQuest</b></em> est une plateforme OpenSource accessible sur Github permettant aux personnes impliquées dans les associations de faciliter la réalisation des tâches. Cette plateforme a été conçue pour rendre ludique et plus simple les activités de grandes envergures pouvant être complexes.
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

                <article className="accueilElements">
                    <h2>Comment cela fonctionne ?</h2>

                        <div id="fourthElement">
                            <p>
                                Le concept de TaskQuest est simple et intuitif. L’application s’inspire de trois grands principes : ceux de Duolingo, Notion et Candy Crush. Dans l’interface « Mes Associations », vous retrouverez les associations auxquelles vous êtes affilié ainsi que le rôle que vous y occupez.
                            </p>

                            <p>
                                Pour chaque association, vous accéderez aux différents événements à organiser ainsi qu’aux missions attendues. La réalisation de ces projets repose sur une décomposition en tâches concrètes, structurées sous forme de niveaux. Chaque tâche accomplie vous permet de progresser vers le niveau suivant, jusqu’au dernier niveau marquant la fin de la préparation de l’activité.

                                 {/* FONCTIONNALITÉ SOUHAITÉE*/} 
                                 {/*Les niveaux seront débloquable par pallier. C'est à dire que le président pourra définir des dates clefs que des tâches doivent faites et à partir de quel moment d'autres doivent commencer*/}
                            </p>
                        </div>
                </article>
         </section>
    )
}