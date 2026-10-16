
window.modules = window.modules || {};

window.modules[2] = {
  title: "Present Simple",
  lessons: [
    {
      title: "Routines and Habits",
      content: `
        <h2>Rutinas y Hábitos</h2>
        <p>El Presente Simple se usa para hablar de acciones habituales, rutinas diarias y verdades generales.</p>
        <h3>Adverbios de Frecuencia</h3>
        <p>Siempre (always), usualmente (usually), a veces (sometimes), nunca (never).</p>
      `
    }
  ],
  quizzes: {
    facil: [
      { question: "I ___ up at 6 AM every day.", options: ["wake", "wakes", "waking", "woke"], correct: 0, explanation: "Con 'I' usamos el verbo base 'wake'." },
      { question: "She ___ coffee in the morning.", options: ["drink", "drinks", "drinking", "drank"], correct: 1, explanation: "Tercera persona singular (she) requiere 'drinks'." },
      { question: "We ___ to school by bus.", options: ["go", "goes", "going", "went"], correct: 0, explanation: "Con el pronombre 'we' se usa el verbo base 'go'." },
      { question: "They ___ English on Tuesdays.", options: ["study", "studies", "studying", "studied"], correct: 0, explanation: "Con 'they' usamos el verbo en su forma base 'study'." },
      { question: "He ___ a blue shirt.", options: ["wear", "wears", "wearing", "wore"], correct: 1, explanation: "Para 'he' agregamos 's' al verbo -> 'wears'." },
      { question: "The dog ___ in the garden.", options: ["play", "plays", "playing", "played"], correct: 1, explanation: "El perro equivale a 'it', por lo que usa 'plays'." },
      { question: "You ___ a good student.", options: ["am", "is", "are", "be"], correct: 2, explanation: "El pronombre 'you' emplea el verbo to be 'are'." },
      { question: "My friends ___ soccer.", options: ["play", "plays", "playing", "played"], correct: 0, explanation: "'My friends' es plural (they), usa 'play'." },
      { question: "The sun ___ in the west.", options: ["set", "sets", "setting", "setted"], correct: 1, explanation: "Sujeto singular 'sun' lleva 'sets'." },
      { question: "Cats ___ fish.", options: ["eat", "eats", "eating", "ate"], correct: 0, explanation: "'Cats' es plural, usa 'eat'." },
      { question: "She ___ hard for her exams.", options: ["work", "works", "working", "worked"], correct: 1, explanation: "'She' requiere el verbo con 's' -> 'works'." },
      { question: "I ___ a big family.", options: ["has", "have", "haves", "having"], correct: 1, explanation: "Con 'I' se utiliza 'have'." },
      { question: "You ___ very fast.", options: ["run", "runs", "running", "ran"], correct: 0, explanation: "Con 'you' usamos 'run'." },
      { question: "He ___ breakfast at 7 AM.", options: ["eat", "eats", "eating", "ate"], correct: 1, explanation: "'He' lleva 'eats'." },
      { question: "We ___ in an apartment.", options: ["live", "lives", "living", "lived"], correct: 0, explanation: "'We' usa el verbo base 'live'." },
      { question: "Birds ___ in trees.", options: ["sleep", "sleeps", "sleeping", "slept"], correct: 0, explanation: "'Birds' es plural, usa 'sleep'." },
      { question: "The baby ___ at night.", options: ["cry", "cries", "crying", "cried"], correct: 1, explanation: "Sujeto singular 'baby' cambia 'y' por 'ies' -> 'cries'." },
      { question: "Water ___ clear.", options: ["is", "are", "am", "be"], correct: 0, explanation: "'Water' es incontable (singular), usa 'is'." },
      { question: "Computers ___ fast.", options: ["is", "are", "am", "be"], correct: 1, explanation: "'Computers' es plural, usa 'are'." },
      { question: "Juan ___ music.", options: ["love", "loves", "loving", "loved"], correct: 1, explanation: "Juan es 'he', usa 'loves'." },
      { question: "I ___ to music every evening.", options: ["listen", "listens", "listening", "listened"], correct: 0, explanation: "'I' usa 'listen'." },
      { question: "You ___ English books.", options: ["read", "reads", "reading", "readed"], correct: 0, explanation: "'You' usa 'read'." },
      { question: "They ___ in the pool.", options: ["swim", "swims", "swimming", "swam"], correct: 0, explanation: "'They' usa 'swim'." },
      { question: "The train ___ at 8 AM.", options: ["arrive", "arrives", "arriving", "arrived"], correct: 1, explanation: "Sujeto singular 'train' lleva 'arrives'." },
      { question: "Classes ___ in February.", options: ["start", "starts", "starting", "started"], correct: 0, explanation: "'Classes' es plural, usa 'start'." }
    ],
    medio: [
      { question: "I ___ like waking up early.", options: ["don't", "doesn't", "aren't", "isn't"], correct: 0, explanation: "Con 'I' la negación en presente simple es 'don't'." },
      { question: "She ___ eat meat because she is vegetarian.", options: ["don't", "doesn't", "isn't", "aren't"], correct: 1, explanation: "Para 'she' se utiliza la negación 'doesn't'." },
      { question: "___ you like chocolate?", options: ["Do", "Does", "Is", "Are"], correct: 0, explanation: "Preguntas con 'you' inician con 'Do'." },
      { question: "___ he work on Sundays?", options: ["Do", "Does", "Is", "Are"], correct: 1, explanation: "Preguntas con 'he' inician con 'Does'." },
      { question: "We ___ watch horror movies.", options: ["don't", "doesn't", "aren't", "no"], correct: 0, explanation: "Negación para 'we' es 'don't'." },
      { question: "Where ___ you buy your groceries?", options: ["do", "does", "are", "is"], correct: 0, explanation: "WH-question con 'you' usa el auxiliar 'do'." },
      { question: "What time ___ she finish work?", options: ["do", "does", "is", "are"], correct: 1, explanation: "Sujeto 'she' usa el auxiliar 'does'." },
      { question: "They ___ live in this city.", options: ["don't", "doesn't", "aren't", "isn't"], correct: 0, explanation: "Sujeto plural 'they' usa 'don't'." },
      { question: "He ___ play tennis.", options: ["don't", "doesn't", "isn't", "aren't"], correct: 1, explanation: "Sujeto 'he' usa 'doesn't'." },
      { question: "___ they know the answer?", options: ["Do", "Does", "Are", "Is"], correct: 0, explanation: "Sujeto 'they' usa el auxiliar 'Do'." },
      { question: "Why ___ you always late?", options: ["do", "does", "are", "is"], correct: 2, explanation: "Estructura con adjetivo y verbo to be usa 'are'." },
      { question: "My brother ___ eat vegetables.", options: ["don't", "doesn't", "isn't", "aren't"], correct: 1, explanation: "Sujeto singular 'brother' usa 'doesn't'." },
      { question: "___ it snow in your town?", options: ["Do", "Does", "Is", "Are"], correct: 1, explanation: "Sujeto 'it' usa el auxiliar 'Does'." },
      { question: "I ___ understand this rule.", options: ["don't", "doesn't", "am not", "not"], correct: 0, explanation: "Negación para 'I' es 'don't'." },
      { question: "How ___ your parents travel?", options: ["do", "does", "are", "is"], correct: 0, explanation: "Sujeto plural 'parents' usa 'do'." },
      { question: "She ___ drink soda.", options: ["don't", "doesn't", "isn't", "aren't"], correct: 1, explanation: "Sujeto 'she' usa 'doesn't'." },
      { question: "___ you speak Spanish?", options: ["Do", "Does", "Are", "Is"], correct: 0, explanation: "Pregunta con 'you' usa 'Do'." },
      { question: "What ___ you do on weekends?", options: ["do", "does", "are", "is"], correct: 0, explanation: "Pregunta con 'you' usa 'do'." },
      { question: "He ___ like reading books.", options: ["don't", "doesn't", "isn't", "aren't"], correct: 1, explanation: "Sujeto 'he' usa 'doesn't'." },
      { question: "___ your friends play video games?", options: ["Do", "Does", "Is", "Are"], correct: 0, explanation: "Sujeto plural 'friends' usa 'Do'." },
      { question: "We ___ want any trouble.", options: ["don't", "doesn't", "aren't", "isn't"], correct: 0, explanation: "Sujeto 'we' usa 'don't'." },
      { question: "Why ___ they crying?", options: ["do", "does", "are", "is"], correct: 2, explanation: "Oración continua con 'are'." },
      { question: "___ dogs bark at night?", options: ["Do", "Does", "Are", "Is"], correct: 0, explanation: "Sujeto plural 'dogs' usa 'Do'." },
      { question: "The bus ___ stop here.", options: ["don't", "doesn't", "isn't", "aren't"], correct: 1, explanation: "Sujeto singular 'bus' usa 'doesn't'." },
      { question: "Where ___ María live?", options: ["do", "does", "is", "are"], correct: 1, explanation: "María es 'she', usa 'does'." }
    ],
    dificil: [
      { question: "Not a single word ___ said during the meeting.", options: ["was", "were", "is", "are"], correct: 0, explanation: "Sujeto singular 'word' en pasado pasivo toma 'was'." },
      { question: "The jury ___ divided in their opinions.", options: ["is", "are", "was", "has"], correct: 1, explanation: "Cuando los miembros actúan de forma individual ('divided'), el jurado toma verbo plural ('are')." },
      { question: "Fifty percent of the pie ___ eaten.", options: ["was", "were", "is", "are"], correct: 0, explanation: "Porcentaje de un sustantivo incontable toma verbo singular ('was')." },
      { question: "Statistics ___ a difficult branch of mathematics.", options: ["is", "are", "be", "were"], correct: 0, explanation: "Tratada como una disciplina académica individual, toma singular ('is')." },
      { question: "Here ___ your keys.", options: ["is", "are", "was", "has"], correct: 1, explanation: "El sujeto real 'keys' es plural, usa 'are'." }
    ],
    extremo: [
      { question: "Rarely ___ one find such dedication in employees.", options: ["does", "do", "is", "are"], correct: 0, explanation: "Inversión con sujeto singular ('one') tras 'Rarely' requiere 'does'." },
      { question: "Under no circumstances ___ you open this door.", options: ["must", "do", "are", "have"], correct: 0, explanation: "Modal 'must' para prohibición absoluta con inversión." },
      { question: "Not only ___ he punctual, but he is also extremely efficient.", options: ["is", "does", "has", "was"], correct: 0, explanation: "Inversión del verbo to be con 'Not only'." }
    ]
  }
};