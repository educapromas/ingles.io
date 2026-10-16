

window.modules = window.modules || {};

window.modules[1] = {
  title: "Basic Sentences",
  lessons: [
    {
      title: "Affirmative Sentences",
      content: `
        <h2>Oraciones Afirmativas</h2>
        <p>Una oración afirmativa expresa una acción o hecho en presente simple.</p>
        <h3>Estructura</h3>
        <div class="formula">Sujeto + Verbo + Complemento</div>
        <h3>Ejemplos</h3>
        <div class="example">
          <ul>
            <li>I study English every day.</li>
            <li>We live in a big house.</li>
          </ul>
        </div>
      `
    },
    {
      title: "Negative Sentences",
      content: `
        <h2>Oraciones Negativas</h2>
        <p>Usamos los auxiliares <b>don't</b> y <b>doesn't</b> para negar en presente.</p>
        <h3>Estructura</h3>
        <div class="formula">Sujeto + don't / doesn't + Verbo en forma base + Complemento</div>
        <h3>Ejemplos</h3>
        <div class="example">
          <ul>
            <li>I don't like coffee.</li>
            <li>She doesn't work here.</li>
          </ul>
        </div>
      `
    },
    {
      title: "Questions",
      content: `
        <h2>Preguntas de Sí/No</h2>
        <p>Utilizamos <b>Do</b> o <b>Does</b> al inicio de la oración para preguntas cerradas.</p>
        <h3>Estructura</h3>
        <div class="formula">Do / Does + Sujeto + Verbo base + Complemento?</div>
        <h3>Ejemplos</h3>
        <div class="example">
          <ul>
            <li>Do you play soccer?</li>
            <li>Does he speak French?</li>
          </ul>
        </div>
      `
    },
    {
      title: "WH Questions",
      content: `
        <h2>Preguntas de Información (WH Questions)</h2>
        <p>Las palabras WH (What, Where, When, Why, Who, How) se colocan al inicio absoluto.</p>
        <h3>Estructura</h3>
        <div class="formula">Palabra WH + do / does + Sujeto + Verbo base + Complemento?</div>
        <h3>Ejemplos</h3>
        <div class="example">
          <ul>
            <li>Where do you live?</li>
            <li>What does she study?</li>
          </ul>
        </div>
      `
    }
  ],
  quizzes: {
    facil: [
      { question: "I ___ a student.", options: ["am", "is", "are", "be"], correct: 0, explanation: "El pronombre 'I' siempre usa el verbo to be 'am'." },
      { question: "She ___ apples.", options: ["like", "likes", "liking", "to like"], correct: 1, explanation: "En afirmativa con terceras personas (she), se añade 's'." },
      { question: "They ___ soccer on Sundays.", options: ["plays", "play", "playing", "played"], correct: 1, explanation: "Con el pronombre 'they', el verbo va en su forma base." },
      { question: "We ___ in Colombia.", options: ["lives", "live", "living", "lived"], correct: 1, explanation: "El sujeto 'we' utiliza el verbo base 'live'." },
      { question: "He ___ English well.", options: ["speak", "speaks", "speaking", "to speak"], correct: 1, explanation: "Para 'he', el verbo lleva terminación -s ('speaks')." },
      { question: "You ___ a nice car.", options: ["has", "have", "haves", "having"], correct: 1, explanation: "Para 'you', el verbo correcto es 'have'." },
      { question: "The dog ___ fast.", options: ["run", "runs", "running", "ran"], correct: 1, explanation: "Un animal singular equivale a 'it', por lo que lleva 'runs'." },
      { question: "My friends ___ music.", options: ["listen", "listens", "listening", "to listen"], correct: 0, explanation: "'My friends' es plural (they), por lo tanto usa 'listen'." },
      { question: "The sun ___ in the east.", options: ["rise", "rises", "rising", "risen"], correct: 1, explanation: "El sol es singular (it), usa 'rises'." },
      { question: "Cats ___ milk.", options: ["drink", "drinks", "drinking", "drank"], correct: 0, explanation: "'Cats' es plural (they), usa 'drink'." },
      { question: "She ___ a teacher.", options: ["am", "is", "are", "be"], correct: 1, explanation: "Para el pronombre 'she' se utiliza 'is'." },
      { question: "You ___ very smart.", options: ["am", "is", "are", "be"], correct: 2, explanation: "Para el pronombre 'you' se utiliza 'are'." },
      { question: "He ___ a new book.", options: ["read", "reads", "reading", "to read"], correct: 1, explanation: "Tercera persona singular (he) requiere 'reads'." },
      { question: "Birds ___ in the sky.", options: ["fly", "flies", "flying", "flew"], correct: 0, explanation: "'Birds' es plural (they), usa 'fly'." },
      { question: "I ___ up early.", options: ["wake", "wakes", "waking", "woke"], correct: 0, explanation: "El pronombre 'I' toma el verbo base 'wake'." },
      { question: "The baby ___ a lot.", options: ["cry", "cries", "crying", "cried"], correct: 1, explanation: "El sujeto singular 'baby' cambia 'y' por 'ies' -> 'cries'." },
      { question: "We ___ breakfast at 7 AM.", options: ["eat", "eats", "eating", "ate"], correct: 0, explanation: "'We' utiliza el verbo base 'eat'." },
      { question: "It ___ cold today.", options: ["am", "is", "are", "be"], correct: 1, explanation: "Para 'it' usamos el verbo 'is'." },
      { question: "The children ___ in the park.", options: ["plays", "play", "playing", "played"], correct: 1, explanation: "'Children' es plural, por lo tanto usa 'play'." },
      { question: "Maria ___ Spanish.", options: ["teach", "teaches", "teaching", "taught"], correct: 1, explanation: "Nombre femenino singular (she) requiere 'teaches'." },
      { question: "Computers ___ very useful.", options: ["is", "are", "am", "be"], correct: 1, explanation: "Al ser plural, utilizamos 'are'." },
      { question: "Juan ___ football.", options: ["like", "likes", "liking", "liked"], correct: 1, explanation: "Juan equivale a 'he', por lo que lleva 'likes'." },
      { question: "I ___ in a hospital.", options: ["work", "works", "working", "worked"], correct: 0, explanation: "Con 'I' se utiliza el verbo base 'work'." },
      { question: "You ___ English.", options: ["learn", "learns", "learning", "learned"], correct: 0, explanation: "Con 'You' se utiliza el verbo base 'learn'." },
      { question: "They ___ soccer.", options: ["play", "plays", "playing", "played"], correct: 0, explanation: "El sujeto 'they' usa el verbo base 'play'." }
    ],
    medio: [
      { question: "I ___ like drinking coffee in the morning.", options: ["don't", "doesn't", "aren't", "isn't"], correct: 0, explanation: "Para el pronombre 'I' la negación correcta es 'don't'." },
      { question: "She ___ work on weekends.", options: ["don't", "doesn't", "isn't", "aren't"], correct: 1, explanation: "Para terceras personas (she) se utiliza 'doesn't'." },
      { question: "___ you speak English?", options: ["Do", "Does", "Is", "Are"], correct: 0, explanation: "Las preguntas con 'you' inician con el auxiliar 'Do'." },
      { question: "___ he live in Madrid?", options: ["Do", "Does", "Is", "Are"], correct: 1, explanation: "Para sujetos singulares como 'he', usamos el auxiliar 'Does'." },
      { question: "We ___ watch television at night.", options: ["don't", "doesn't", "aren't", "no"], correct: 0, explanation: "El auxiliar negativo para 'we' es 'don't'." },
      { question: "Where ___ you live?", options: ["do", "does", "are", "is"], correct: 0, explanation: "En WH-questions con 'you', el auxiliar es 'do'." },
      { question: "What time ___ she get up?", options: ["do", "does", "is", "are"], correct: 1, explanation: "Para 'she' empleamos el auxiliar 'does'." },
      { question: "They ___ like eating vegetables.", options: ["don't", "doesn't", "aren't", "isn't"], correct: 0, explanation: "El plural 'they' requiere el auxiliar 'don't'." },
      { question: "He ___ play video games on Mondays.", options: ["don't", "doesn't", "isn't", "aren't"], correct: 1, explanation: "La negación para 'he' es 'doesn't'." },
      { question: "___ they understand the lesson?", options: ["Do", "Does", "Are", "Is"], correct: 0, explanation: "Para 'they', la pregunta empieza con 'Do'." },
      { question: "Why ___ you crying?", options: ["do", "does", "are", "is"], correct: 2, explanation: "Esta es una pregunta con el verbo to be, por lo que usa 'are'." },
      { question: "My brother ___ like fish.", options: ["don't", "doesn't", "isn't", "aren't"], correct: 1, explanation: "Mi hermano equivale a 'he', usa 'doesn't'." },
      { question: "___ it rain often here?", options: ["Do", "Does", "Is", "Are"], correct: 1, explanation: "Para 'it', el auxiliar correcto es 'Does'." },
      { question: "I ___ know the answer.", options: ["don't", "doesn't", "am not", "not"], correct: 0, explanation: "Negación en presente simple para 'I' es 'don't'." },
      { question: "How ___ your parents travel?", options: ["do", "does", "are", "is"], correct: 0, explanation: "'Your parents' es plural (they), usa 'do'." },
      { question: "She ___ like eating fast food.", options: ["don't", "doesn't", "isn't", "aren't"], correct: 1, explanation: "Con 'she' se emplea 'doesn't'." },
      { question: "___ you want some water?", options: ["Do", "Does", "Are", "Is"], correct: 0, explanation: "Las preguntas con 'you' usan 'Do'." },
      { question: "What ___ you usually eat for breakfast?", options: ["do", "does", "are", "is"], correct: 0, explanation: "Para 'you' en presente simple se utiliza 'do'." },
      { question: "He ___ drink soda.", options: ["don't", "doesn't", "isn't", "aren't"], correct: 1, explanation: "La negación correcta para 'he' es 'doesn't'." },
      { question: "___ your sister play the piano?", options: ["Do", "Does", "Is", "Are"], correct: 1, explanation: "Tu hermana es 'she', por lo que lleva 'Does'." },
      { question: "We ___ go to the cinema on Mondays.", options: ["don't", "doesn't", "aren't", "isn't"], correct: 0, explanation: "Para 'we' se usa 'don't'." },
      { question: "Why ___ they laughing?", options: ["do", "does", "are", "is"], correct: 2, explanation: "Pregunta con verbo to be en continuo requiere 'are'." },
      { question: "___ dogs like bones?", options: ["Do", "Does", "Are", "Is"], correct: 0, explanation: "'Dogs' es plural, por lo que inicia con 'Do'." },
      { question: "The train ___ arrive on time.", options: ["don't", "doesn't", "isn't", "aren't"], correct: 1, explanation: "Un objeto singular equivale a 'it', usa 'doesn't'." },
      { question: "Where ___ María work?", options: ["do", "does", "is", "are"], correct: 1, explanation: "María es 'she', usa el auxiliar 'does'." }
    ],
    dificil: [
      { question: "Neither of them ___ how to swim.", options: ["know", "knows", "knowing", "known"], correct: 1, explanation: "'Neither of them' actúa habitualmente como singular en contextos formales, requiriendo 'knows'." },
      { question: "The news ___ surprising.", options: ["is", "are", "be", "were"], correct: 0, explanation: "La palabra 'news' es singular en inglés, por lo que toma 'is'." },
      { question: "Each student ___ a unique code.", options: ["have", "has", "having", "had"], correct: 1, explanation: "'Each' es un cuantificador singular, por lo que se usa 'has'." },
      { question: "Mathematics ___ my favorite subject.", options: ["is", "are", "be", "am"], correct: 0, explanation: "Los nombres de materias terminados en -s son singulares y usan 'is'." },
      { question: "A flock of birds ___ flying high.", options: ["is", "are", "be", "were"], correct: 0, explanation: "El sujeto principal es el sustantivo colectivo singular 'flock', usa 'is'." },
      { question: "Everyone ___ ready for the test.", options: ["is", "are", "were", "be"], correct: 0, explanation: "Pronombres indefinidos como 'everyone' toman verbos en singular ('is')." },
      { question: "Physics ___ a complex science.", options: ["is", "are", "be", "were"], correct: 0, explanation: "Las ciencias terminadas en -s son singulares ('is')." },
      { question: "Either John or his friends ___ coming.", options: ["is", "are", "be", "am"], correct: 1, explanation: "En construcciones 'Either... or', el verbo concuerda con el sujeto más cercano ('friends' -> 'are')." },
      { question: "The committee ___ decided on the new policy.", options: ["has", "have", "having", "had"], correct: 0, explanation: "Como el comité actúa en conjunto como una sola unidad, se usa 'has'." },
      { question: "Ten miles ___ a long distance to walk.", options: ["is", "are", "be", "were"], correct: 0, explanation: "Las distancias o cantidades expresadas como un todo usan verbo singular ('is')." },
      { question: "None of the money ___ missing.", options: ["is", "are", "were", "be"], correct: 0, explanation: "'Money' es un sustantivo incontable, por lo que toma verbo singular ('is')." },
      { question: "The police ___ investigating the crime.", options: ["is", "are", "was", "has"], correct: 1, explanation: "'Police' es un sustantivo plural en inglés, por lo que usa 'are'." },
      { question: "A number of students ___ absent today.", options: ["is", "are", "was", "has"], correct: 1, explanation: "'A number of' seguido de plural requiere verbo plural ('are')." },
      { question: "The number of accidents ___ decreasing.", options: ["is", "are", "were", "have"], correct: 0, explanation: "'The number of' se refiere a la cantidad en sí, siendo singular ('is')." },
      { question: "Neither the teacher nor the students ___ present.", options: ["was", "were", "is", "has"], correct: 1, explanation: "El verbo concuerda con el sujeto más cercano ('students', que es plural -> 'were')." },
      { question: "Measles ___ a contagious disease.", options: ["is", "are", "were", "be"], correct: 0, explanation: "Enfermedades con terminación en -s como 'measles' toman verbo singular." },
      { question: "Much information ___ available online.", options: ["is", "are", "were", "be"], correct: 0, explanation: "'Information' es incontable y siempre singular ('is')." },
      { question: "A pair of shoes ___ sitting by the door.", options: ["is", "are", "were", "have"], correct: 0, explanation: "El sujeto principal es 'pair' (singular), por lo que usa 'is'." },
      { question: "Most of the cake ___ eaten.", options: ["was", "were", "are", "have"], correct: 0, explanation: "Sustantivos incontables fraccionados toman verbo singular ('was')." },
      { question: "Two plus two ___ four.", options: ["equals", "equal", "equaling", "equaled"], correct: 0, explanation: "Las operaciones matemáticas básicas emplean verbos en singular." },
      { question: "The rich ___ responsible for more taxes.", options: ["is", "are", "was", "has"], correct: 1, explanation: "Adjetivos precedidos por 'the' para denotar grupos de personas toman plural ('are')." },
      { question: "My family ___ very supportive.", options: ["is", "are", "were", "have"], correct: 0, explanation: "Tratando a la familia como una entidad única, toma singular ('is')." },
      { question: "Here ___ the books you requested.", options: ["is", "are", "was", "has"], correct: 1, explanation: "El sujeto real 'books' es plural, por lo que se usa 'are'." },
      { question: "There ___ a cat and two dogs outside.", options: ["is", "are", "was", "has"], correct: 0, explanation: "En construcciones con 'there', el verbo concuerda con el primer elemento ('a cat' -> 'is')." },
      { question: "Each of the options ___ valid.", options: ["is", "are", "were", "have"], correct: 0, explanation: "'Each of' siempre toma un núcleo singular ('is')." }
    ],
    extremo: [
      { question: "Hardly ever ___ she late for class.", options: ["is", "does", "has", "was"], correct: 0, explanation: "Al iniciar con un adverbio de negación parcial ('Hardly ever'), se invierte el sujeto y el verbo principal 'is'." },
      { question: "Seldom ___ we witness such a phenomenon.", options: ["do", "are", "have", "did"], correct: 0, explanation: "La inversión con 'Seldom' en presente simple requiere el auxiliar 'do'." },
      { question: "Not only ___ he study, but he also works.", options: ["does", "is", "has", "can"], correct: 0, explanation: "Estructura de inversión enfática con 'Not only' usando el auxiliar 'does'." },
      { question: "No sooner ___ I arrived home than it started to rain.", options: ["had", "did", "have", "was"], correct: 0, explanation: "Estructura formal con inversión de pasado perfecto usando 'had'." },
      { question: "Little ___ she know what was waiting for her.", options: ["did", "does", "had", "was"], correct: 0, explanation: "Inversión tras adverbio limitativo 'Little' con pasado simple requiere 'did'." },
      { question: "Only under rare circumstances ___ this rule apply.", options: ["does", "do", "is", "are"], correct: 0, explanation: "Inversión posterior a frase restrictiva con sujeto singular ('rule' -> 'does')." },
      { question: "Scarcely ___ the meeting begun when the lights went out.", options: ["had", "did", "have", "was"], correct: 0, explanation: "Estructura de pasado con inversión y pasado perfecto 'had'." },
      { question: "Never before ___ such dedication.", options: ["have I seen", "I have seen", "did I saw", "I saw"], correct: 0, explanation: "Inversión completa requerida tras adverbio negativo absoluto al inicio." },
      { question: "On no account ___ passengers cross the yellow line.", options: ["must", "do", "are", "have"], correct: 0, explanation: "Uso de verbo modal con inversión obligatoria tras frase negativa." },
      { question: "In no way ___ this compromise our security.", options: ["does", "do", "is", "can"], correct: 0, explanation: "Inversión con auxiliar 'does' por frase negativa inicial." },
      { question: "So intense ___ the pressure that he resigned.", options: ["was", "were", "is", "did"], correct: 0, explanation: "Inversión del verbo to be tras estructura 'So + adjetivo'." },
      { question: "Such ___ the beauty of the landscape that we stayed.", options: ["was", "were", "is", "are"], correct: 0, explanation: "Inversión del verbo copulativo tras 'Such'." },
      { question: "Neither ___ he understand nor did he care.", options: ["did", "does", "had", "was"], correct: 0, explanation: "Inversión simétrica con auxiliar 'did' tras 'Neither'." },
      { question: "Rarely ___ one encounter such honesty.", options: ["does", "do", "is", "are"], correct: 0, explanation: "Inversión con 'Rarely' para sujeto singular ('one' -> 'does')." },
      { question: "Not until much later ___ the truth emerge.", options: ["did", "does", "had", "was"], correct: 0, explanation: "Inversión de pasado simple con 'did' tras cláusula temporal negativa." },
      { question: "Nowhere ___ such a magnificent architectural design.", options: ["can you find", "you can find", "find you", "do you find"], correct: 0, explanation: "Inversión modal obligatoria tras adverbio de lugar negativo inicial." },
      { question: "Only when the data was verified ___ the report published.", options: ["was", "were", "did", "had"], correct: 0, explanation: "Inversión del verbo to be en pasiva con 'was'." },
      { question: "Barely ___ she stepped outside when it began to pour.", options: ["had", "did", "have", "was"], correct: 0, explanation: "Inversión con pasado perfecto 'had' tras 'Barely'." },
      { question: "Well ___ I remember that stormy night.", options: ["do", "did", "have", "am"], correct: 0, explanation: "Inversión con auxiliar 'do' para énfasis en presente simple." },
      { question: "Complex ___ the algorithm may be, it runs smoothly.", options: ["though", "although", "however", "despite"], correct: 0, explanation: "Estructura concesiva formal con 'though' tras adjetivo." },
      { question: "Try as he ___, he could not solve the riddle.", options: ["might", "may", "can", "could"], correct: 0, explanation: "Modo subjuntivo/concesivo fijo con 'might'." },
      { question: "Be that as it ___, we must proceed.", options: ["may", "might", "is", "were"], correct: 0, explanation: "Expresión fija en subjuntivo 'Be that as it may'." },
      { question: "Should you require assistance, do not hesitate.", options: ["Should", "If", "Had", "Were"], correct: 0, explanation: "Inversión condicional formal omitiendo 'if' mediante el auxiliar 'Should'." },
      { question: "Were we to cancel now, losses would be severe.", options: ["Were", "If", "Had", "Did"], correct: 0, explanation: "Inversión condicional tipo 2 omitiendo 'if' con 'Were'." },
      { question: "Had I known earlier, I would have intervened.", options: ["Had", "If", "Did", "Were"], correct: 0, explanation: "Inversión condicional tipo 3 omitiendo 'if' con 'Had'." }
    ]
  }
};