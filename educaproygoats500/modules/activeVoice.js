
window.modules = window.modules || {};

window.modules[8] = {
  title: "Active Voice",
  lessons: [
    {
      title: "Subject Performing the Action",
      content: `
        <h2>Voz Activa</h2>
        <p>En la voz activa, el sujeto de la oración es quien realiza la acción expresada por el verbo.</p>
        <h3>Estructura</h3>
        <div class="formula">Sujeto (Ejecutor) + Verbo + Objeto (Receptor)</div>
        <h3>Ejemplos</h3>
        <div class="example">
          <ul>
            <li>The dog chases the cat.</li>
            <li>Shakespeare wrote Hamlet.</li>
          </ul>
        </div>
      `
    }
  ],
  quizzes: {
    facil: [
      { question: "The mechanic fixes the car. (Identify the voice)", options: ["Active", "Passive", "Continuous", "Future"], correct: 0, explanation: "El sujeto (mechanic) realiza directamente la acción de arreglar." },
      { question: "She writes a beautiful letter.", options: ["Active", "Passive", "Modal", "Gerund"], correct: 0, explanation: "El sujeto (she) es el ejecutor de la acción." },
      { question: "The cat chases the mouse.", options: ["Active", "Passive", "Perfect", "Conditional"], correct: 0, explanation: "Voz activa estándar." },
      { question: "Dogs love bones.", options: ["Active", "Passive", "Imperative", "Interrogative"], correct: 0, explanation: "El sujeto realiza la acción." },
      { question: "He plays the piano very well.", options: ["Active", "Passive", "Continuous", "Future"], correct: 0, explanation: "Oración en voz activa." },
      { question: "They build houses.", options: ["Active", "Passive", "Modal", "Past"], correct: 0, explanation: "Sujeto ejecutor." },
      { question: "My mother cooks delicious food.", options: ["Active", "Passive", "Future", "Conditional"], correct: 0, explanation: "Voz activa presente." },
      { question: "Birds build nests.", options: ["Active", "Passive", "Continuous", "Perfect"], correct: 0, explanation: "Sujeto realiza la acción." },
      { question: "Students read books.", options: ["Active", "Passive", "Imperative", "Modal"], correct: 0, explanation: "Voz activa." },
      { question: "The sun warms the earth.", options: ["Active", "Passive", "Future", "Past"], correct: 0, explanation: "Sujeto activo." },
      { question: "Farmers grow vegetables.", options: ["Active", "Passive", "Continuous", "Conditional"], correct: 0, explanation: "Voz activa." },
      { question: "The wind blows hard.", options: ["Active", "Passive", "Modal", "Perfect"], correct: 0, explanation: "Sujeto ejecutor." },
      { question: "Artists paint pictures.", options: ["Active", "Passive", "Future", "Past"], correct: 0, explanation: "Voz activa." },
      { question: "Fish swim in the river.", options: ["Active", "Passive", "Continuous", "Imperative"], correct: 0, explanation: "Sujeto activo." },
      { question: "Fire burns wood.", options: ["Active", "Passive", "Modal", "Conditional"], correct: 0, explanation: "Voz activa." },
      { question: "The chef prepares meals.", options: ["Active", "Passive", "Future", "Past"], correct: 0, explanation: "Sujeto ejecutor." },
      { question: "Students learn English.", options: ["Active", "Passive", "Continuous", "Perfect"], correct: 0, explanation: "Voz activa." },
      { question: "The rain waters the plants.", options: ["Active", "Passive", "Modal", "Imperative"], correct: 0, explanation: "Sujeto activo." },
      { question: "Wolves hunt in packs.", options: ["Active", "Passive", "Future", "Past"], correct: 0, explanation: "Voz activa." },
      { question: "The river flows to the sea.", options: ["Active", "Passive", "Continuous", "Conditional"], correct: 0, explanation: "Sujeto ejecutor." },
      { question: "People drink water.", options: ["Active", "Passive", "Modal", "Perfect"], correct: 0, explanation: "Voz activa." },
      { question: "Engineers design bridges.", options: ["Active", "Passive", "Future", "Past"], correct: 0, explanation: "Sujeto activo." },
      { question: "The clock ticks.", options: ["Active", "Passive", "Continuous", "Imperative"], correct: 0, explanation: "Voz activa." },
      { question: "Bakers bake bread.", options: ["Active", "Passive", "Modal", "Conditional"], correct: 0, explanation: "Sujeto ejecutor." },
      { question: "The dog barks loudly.", options: ["Active", "Passive", "Future", "Past"], correct: 0, explanation: "Voz activa." }
    ],
    medio: [
      { question: "Transform to active: 'The book was written by Mark.' -> Mark ___ the book.", options: ["wrote", "writes", "written", "writing"], correct: 0, explanation: "En voz activa, el agente pasa a ser sujeto y el verbo pasa a pasado ('wrote')." },
      { question: "Transform to active: 'The window was broken by the kids.' -> The kids ___ the window.", options: ["broke", "break", "broken", "breaking"], correct: 0, explanation: "Pasado simple activo con 'broke'." },
      { question: "Identify the active sentence among the options:", options: ["The dog bit the man.", "The man was bitten by the dog.", "The letter was sent.", "The house is being built."], correct: 0, explanation: "La primera opción sitúa al sujeto (dog) realizando la acción." },
      { question: "Which of the following sentences is in the active voice?", options: ["She opened the door.", "The door was opened by her.", "The door was left open.", "It was done."], correct: 0, explanation: "Sujeto (she) ejecuta la acción directamente." },
      { question: "Active or Passive? 'Lightning struck the old tree.'", options: ["Active", "Passive"], correct: 0, explanation: "El relámpago (sujeto) golpea el árbol." }
    ],
    dificil: [
      { question: "Why do writers often prefer the active voice over the passive?", options: ["It is more direct and energetic", "It is longer", "It hides the subject", "It is formal"], correct: 0, explanation: "La voz activa aporta claridad, dinamismo y franqueza al texto." },
      { question: "Identify the sentence that successfully maintains an active subject throughout: 'The CEO announced the merger, and the board approved it.'", options: ["Active", "Passive"], correct: 0, explanation: "Ambas cláusulas emplean sujetos activos ejecutores." }
    ],
    extremo: [
      { question: "Syntactically, how does an active transitive verb differ from an intransitive verb?", options: ["It requires a direct object", "It takes a passive auxiliary", "It cannot take tense markers", "It is always plural"], correct: 0, explanation: "Los verbos transitivos activos exigen un objeto directo para recibir la acción." }
    ]
  }
};