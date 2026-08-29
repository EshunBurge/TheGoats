const questions = [ 
  { text: "What is your favoite genre?", options: [ { text: "Pop", type: "Taylor Swift"}, { text: "Rap", type: "Bad Bunny"}, { text: "R&B", type: "The Weeknd"}, { text: "Country", type: "Post Malone"}, ] }, 
  { text: "What is your favorite song?", options: [ { text: "One Dance - Drake", type: "Drake"}, { text: "Shape of You - Ed Sheeran", type: "Ed Sheeran"}, { text: "Stay - Justin Bieber", type: "Justin Bieber"}, { text: "Mi Genter - J Balvin", type: "J Balvin"}, ] }, 
  { text: "What is your favorite vibe in music?", options: [ { text: "Hype", type: "Bad Bunny"}, { text: "Slow", type: "Ariana Grande"}, { text: "Upbeat", type: "Travis Scott"}, { text: "Tempo", type: "Post Malone"}, ] }, 
  { text: "What style music do you like?", options: [ { text: "Instrumental", type: "Justin Bieber"}, { text: "Guitar", type: "Taylor Swift"}, { text: "Electronic", type: "The Weeknd"}, { text: "Vintage", type: "Ed Sheeran"}, ] }, 
  { text: "Where do you want to preform?", options: [ { text: "Bar", type: "J Balvin"}, { text: "Concert Hall", type: "Ariana Grande"}, { text: "Outdoor Stadium", type: "Drake"}, { text: "Festival", type: "Justin Bieber"}, ] }, 
  { text: "How would your friends describe you?", options: [ { text: "Quiet", type: "Taylor Swift"}, { text: "Energetic", type: "Ed Sheeran"}, { text: "Crazy", type: "Post Malone"}, { text: "Chill", type: "Travis Scott"}, ] }, 
  { text: "Who would you like to collab with?", options: [ { text: "Olivia Dean", type: "Justin Bieber"}, { text: "Don Toliver", type: "Taylor Swift"}, { text: "Coldplay", type: "The Weeknd"}, { text: "Zach Bryan", type: "Ed Sheeran"}, ] }, 
  { text: "What is your favorite instrument?", options: [ { text: "Guitar", type: "Ariana Grande"}, { text: "Drums", type: "Drake"}, { text: "Piano", type: "Bad Bunny"}, { text: "Saxaphone", type: "Ed Sheeran"}, ] }
];

// Expanded to map descriptions to the actual artists used in your options
const results = { 
  "Taylor Swift": { title: "Taylor Swift", desc: "You love catchy melodies and storytelling.", <img src="./images/taylorswift.png"/>},
  "Bad Bunny": { title: "Bad Bunny", desc: "You are energetic and ready for a festival stage." <img src="./images/taylorswift.png"/>},
  "The Weeknd": { title: "The Weeknd", desc: "You vibe with moody, atmospheric electronic R&B." <img src="./images/taylorswift.png"/>},
  "Post Malone": { title: "Post Malone", desc: "You are chill, adaptive, and love blending genres." <img src="./images/taylorswift.png"/>},
  "Drake": { title: "Drake", desc: "You aim for the top and love stadium-sized energy." <img src="./images/taylorswift.png"/>},
  "Ed Sheeran": { title: "Ed Sheeran", desc: "You appreciate acoustic vibes and soulful lyricism." <img src="./images/taylorswift.png"/>},
  "Justin Bieber": { title: "Justin Bieber", desc: "You love a mix of classic instruments and pop beats." <img src="./images/taylorswift.png"/>},
  "J Balvin": { title: "J Balvin", desc: "You bring vibrant party energy wherever you go." <img src="./images/taylorswift.png"/>},
  "Ariana Grande": { title: "Ariana Grande", desc: "You love rich vocals and smooth, grand scales." <img src="./images/taylorswift.png"/>},
  "Travis Scott": { title: "Travis Scott", desc: "You are all about hyped tempos and deep beats." <img src="./images/taylorswift.png"/>}
};

let currentQuestionIndex = 0; 
let scores = {}; 

const quizScreen = document.getElementById("quiz-screen"); 
const resultScreen = document.getElementById("result-screen"); 
const questionText = document.getElementById("question-text"); 
const optionsContainer = document.getElementById("options-container"); 
const resultTitle = document.getElementById("result-title"); 
const resultDesc = document.getElementById("result-desc"); 
const restartBtn = document.getElementById("restart-btn"); 

function startQuiz() { 
  currentQuestionIndex = 0; 
  scores = {};
  resultScreen.classList.add("hidden"); 
  quizScreen.classList.remove("hidden"); 
  showQuestion(); 
} 

function showQuestion() { 
  optionsContainer.innerHTML = ""; 
  const currentQuestion = questions[currentQuestionIndex]; 
  questionText.textContent = currentQuestion.text; 
  
  currentQuestion.options.forEach(option => { 
    const button = document.createElement("button"); 
    button.textContent = option.text; 
    button.addEventListener("click", () => handleAnswer(option.type)); 
    optionsContainer.appendChild(button); 
  }); 
} 

function handleAnswer(selectedType) { 
  scores[selectedType] = (scores[selectedType] || 0) + 1;
  
  currentQuestionIndex++; 
  if (currentQuestionIndex < questions.length) { 
    showQuestion(); 
  } else { 
    showResult(); 
  } 
} 

function showResult() { 
  quizScreen.classList.add("hidden"); 
  resultScreen.classList.remove("hidden"); 
  

  let finalResult = "";
  let highestScore = -1;

  for (const artist in scores) {
    if (scores[artist] > highestScore) {
      highestScore = scores[artist];
      finalResult = artist;
    }
  }

  if (!finalResult) finalResult = "Taylor Swift";

  resultTitle.textContent = results[finalResult].title; 
  resultDesc.textContent = results[finalResult].desc; 
} 

restartBtn.addEventListener("click", startQuiz); 
startQuiz();
