
window.modules = window.modules || {};

window.modules[9] = {
  title: "Passive Voice",
  lessons: [
    {
      title: "Object Receiving the Action",
      content: `
        <h2>Voz Pasiva</h2>
        <p>En la voz pasiva, el foco está en el receptor de la acción y no en quien la realiza.</p>
        <h3>Estructura</h3>
        <div class="formula">Objeto + Verbo To Be (am/is/are/was/were) + Participio Pasado (V3) + (by + Agente)</div>
        <h3>Ejemplos</h3>
        <div class="example">
          <ul>
            <li>The car is fixed by the mechanic.</li>
            <li>Hamlet was written by Shakespeare.</li>
          </ul>
        </div>
      `
    }
  ],
  quizzes: {
    facil: [
      { question: "The window ___ broken by the kids.", options: ["was", "were", "is", "are"], correct: 0, explanation: "Sujeto singular en pasado pasivo usa 'was'." },
      { question: "English ___ spoken all over the world.", options: ["is", "are", "am", "be"], correct: 0, explanation: "Presente pasivo con sujeto singular usa 'is'." },
      { question: "The letter ___ written yesterday.", options: ["was", "were", "is", "are"], correct: 0, explanation: "Pasado pasivo con 'letter' usa 'was'." },
      { question: "Cars ___ manufactured in this factory.", options: ["are", "is", "am", "was"], correct: 0, explanation: "Presente pasivo plural usa 'are'." },
      { question: "The project ___ finished last week.", options: ["was", "were", "is", "are"], correct: 0, explanation: "Pasado pasivo singular usa 'was'." },
      { question: "Coffee ___ grown in Colombia.", options: ["is", "are", "am", "were"], correct: 0, explanation: "Presente pasivo singular usa 'is'." },
      { question: "The keys ___ found under the mat.", options: ["were", "was", "is", "am"], correct: 0, explanation: "Pasado pasivo plural con 'keys' usa 'were'." },
      { question: "Spanish ___ taught at this school.", options: ["is", "are", "am", "were"], correct: 0, explanation: "Presente pasivo singular usa 'is'." },
      { question: "The house ___ painted blue.", options: ["was", "were", "is", "are"], correct: 0, explanation: "Pasado pasivo usa 'was'." },
      { question: "Books ___ sold in bookstores.", options: ["are", "is", "am", "was"], correct: 0, explanation: "Presente pasivo plural usa 'are'." },
      { question: "The thief ___ caught by the police.", options: ["was", "were", "is", "are"], correct: 0, explanation: "Pasado pasivo singular usa 'was'." },
      { question: "The songs ___ sung by the choir.", options: ["were", "was", "is", "am"], correct: 0, explanation: "Pasado pasivo plural usa 'were'." },
      { question: "Rice ___ eaten with chopsticks in Asia.", options: ["is", "are", "am", "were"], correct: 0, explanation: "Presente pasivo singular usa 'is'." },
      { question: "The letters ___ delivered every morning.", options: ["are", "is", "am", "was"], correct: 0, explanation: "Presente pasivo plural usa 'are'." },
      { question: "The cake ___ baked by my mother.", options: ["was", "were", "is", "are"], correct: 0, explanation: "Pasado pasivo singular usa 'was'." },
      { question: "Pictures ___ taken during the tour.", options: ["were", "was", "is", "am"], correct: 0, explanation: "Pasado pasivo plural usa 'were'." },
      { question: "Cheese ___ made from milk.", options: ["is", "are", "am", "were"], correct: 0, explanation: "Presente pasivo singular usa 'is'." },
      { question: "The windows ___ cleaned weekly.", options: ["are", "is", "am", "was"], correct: 0, explanation: "Presente pasivo plural usa 'are'." },
      { question: "The game ___ won by our team.", options: ["was", "were", "is", "are"], correct: 0, explanation: "Pasado pasivo singular usa 'was'." },
      { question: "Computers ___ used in offices.", options: ["are", "is", "am", "was"], correct: 0, explanation: "Presente pasivo plural usa 'are'." },
      { question: "The door ___ locked at night.", options: ["is", "are", "am", "were"], correct: 0, explanation: "Presente pasivo singular usa 'is'." },
      { question: "The bridge ___ built in 1990.", options: ["was", "were", "is", "are"], correct: 0, explanation: "Pasado pasivo singular usa 'was'." },
      { question: "Tigers ___ found in Asia.", options: ["are", "is", "am", "was"], correct: 0, explanation: "Presente pasivo plural usa 'are'." },
      { question: "The message ___ received yesterday.", options: ["was", "were", "is", "are"], correct: 0, explanation: "Pasado pasivo singular usa 'was'." },
      { question: "Apples ___ picked in autumn.", options: ["are", "is", "am", "was"], correct: 0, explanation: "Presente pasivo plural usa 'are'." }
    ],
    medio: [
      { question: "Transform to passive: 'Shakespeare wrote Hamlet.' -> Hamlet ___ written by Shakespeare.", options: ["was", "were", "is", "are"], correct: 0, explanation: "Pasado simple pasivo requiere 'was'." },
      { question: "Transform to passive: 'They clean the offices daily.' -> The offices ___ cleaned daily.", options: ["are", "is", "were", "was"], correct: 0, explanation: "Presente pasivo plural requiere 'are'." },
      { question: "Which sentence is in the passive voice?", options: ["The car was repaired by John.", "John repaired the car.", "John is repairing the car.", "John will repair the car."], correct: 0, explanation: "La primera opción estructura el objeto como sujeto receptor de la acción." },
      { question: "The new stadium ___ completed by next year.", options: ["will be", "is", "was", "has"], correct: 0, explanation: "Estructura de futuro pasivo ('will be + participio')." },
      { question: "Active or Passive? 'Mistakes were made.'", options: ["Passive", "Active"], correct: 0, explanation: "Estructura pasiva clásica en pasado." }
    ],
    dificil: [
      { question: "By the time we arrived, the document ___ printed.", options: ["had been", "has been", "was", "were"], correct: 0, explanation: "Pasado perfecto pasivo ('had been + participio')." },
      { question: "The report needs ___ reviewed before submission.", options: ["to be", "being", "been", "be"], correct: 0, explanation: "Estructura avanzada con gerundio/infinitivo pasivo ('needs to be')." },
      { question: "It ___ believed that the economy is recovering.", options: ["is", "are", "was", "were"], correct: 0, explanation: "Voz pasiva impersonal con verbos de opinión ('It is believed')." }
    ],
    extremo: [
      { question: "Under no circumstances ___ the files to be accessed without authorization.", options: ["are", "is", "do", "did"], correct: 0, explanation: "Inversión formal con el verbo to be pasivo plural ('are')." },
      { question: "Rarely ___ such historical artifacts exhibited publicly.", options: ["are", "is", "were", "was"], correct: 0, explanation: "Inversión con presente pasivo plural tras adverbio restrictivo." }
    ]
  }
};