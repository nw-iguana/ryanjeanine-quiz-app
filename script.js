console.log('JS Connected');

const questionBank = [
    {
        question: "Where did Perogies come from?",
        answers: {
            answer1: "Russia",
            answer2: "Poland",
            answer3: "Ukraine",
            answer4: "Hungary",
            getCorrect: function() {
                return this.answer3;
            },
            correctDetail: `(Ukraine) Some contend that pierogi were brought to Poland by Saint Hyacinth of Poland, 
            who brought them back from Kiev (the center of Kievan Rus', nowadays the capital of Ukraine).`
        },
        imageUrl: "img/perogi2.jpeg",
        imageAlt: "white, round plate with seven perogi with light browning."
      },
      {
        question: "Where did cheeseburgers come from>",
        answers: {
            answer1: "Germany",
            answer2: "United States",
            answer3: "Canada",
            answer4: "Mexico",
            getCorrect:  function() {
                return this.answer2;
            },
            correctDetail: `(US) Lionel Sternberger is reputed to have introduced the 
            cheeseburger in 1926 at the age of 16 when he was working as a 
            fry cook at his father's Pasadena, California sandwich shop, "The Rite Spot",
             and experimentally dropped a slab of American cheese on a sizzling hamburger.`
        },
        imageUrl: "img/cheeseburger1.jpeg",
        imageAlt: "cheeseburger with a sesame seed bun, lettuce, tomato, and onion."
      },
      {
        question: "Who invented Tofu?",
        answers: {
            answer1: "China",
            answer2: "Italy",
            answer3: "1960's hippies",
            answer4: "Iceland",
            getCorrect:  function() {
                return this.answer1;
            },
            correctDetail: "`(China) Tofu has been consumed for more than 2000 years in China.`"
        },
        imageUrl: "img/tofu2.jpeg",
        imageAlt: "a block of solid tofu on a wooden cutting board. A small pile of greens and a small pile of cubed tofu are also on the cutting board."
      },
      {
        question: "Where was the first pizza made according to pizza lore?",
        answers: {
            answer1: "Japan",
            answer2: "New York, USA",
            answer3: "Greece",
            answer4: "Italy",
            getCorrect:  function() {
                return this.answer4;
            },
            correctDetail: `(Italy) An often recounted story holds that on 11 June 1889, to honour the Queen consort 
            of Italy, Margherita of Savoy, the Neapolitan pizza maker Raffaele Esposito created the "Pizza Margherita"
            , a pizza garnished with tomatoes, mozzarella, and basil, to represent the national colours of Italy as 
            on the Italian flag.`
        },
        imageUrl: "img/pizza1.jpeg",
        imageAlt: "A large New York style cheese pizza on a wooden cutting board, one slice removed."
      },
      {
        question: "Who started making the donuts in their round with a hole form?",
        answers: {
            answer1: "England",
            answer2: "Germany",
            answer3: "United States",
            answer4: "Iran",
            getCorrect:  function() {
                return this.answer3;
            },
            correctDetail: `(US) Hanson Gregory, an American, claimed to have invented the ring-shaped doughnut 
            in 1847 aboard a lime-trading ship when he was 16 years old. Gregory was dissatisfied with the 
            greasiness of doughnuts twisted into various shapes and with the raw center of regular doughnuts.`
        },
        imageUrl: "img/donuts2.jpeg",
        imageAlt: "A variety of donuts on a wire cooling rack. Some have glazes or frosting, while others have crunchy bits."
      },
      {
        question: "Cupcakes are not just for elementary school-but where did they first appear?",
        answers: {
            answer1: "United States",
            answer2: "England",
            answer3: "Finland",
            answer4: "Scotland",
            getCorrect:  function() {
                return this.answer1;
            },
            correctDetail: `(US) The earliest extant description of what is now often called a cupcake was in 1796,
             when a recipe for "a light cake to bake in small cups" was written in American Cookery by Amelia Simmons`
        },
        imageUrl: "img/cupcake1.jpeg",
        imageAlt: "a yellow cupcake cut in half on a plate. The frosting is white with tinges of blue and spilling from the center are sprinkles and candy pieces."
      },
      {
        question: "Curry is a favorite in many countries but what country started the trend?",
        answers: {
            answer1: "Canada",
            answer2: "England",
            answer3: "Russia",
            answer4: "India",
            getCorrect:  function() {
                return this.answer4;
            },
            correctDetail: `(India) Curry (plural curries) is a variety of dishes originating in the Indian subcontinent 
            that use a complex combination of spices or herbs, usually including ground turmeric, cumin, coriander,
             ginger, and fresh or dried chilies.`
            },
        imageUrl: "img/curry3.jpeg",
        imageAlt: "Red curried chicken with green vegtable in a ceramic, two handled pot."
      },
      {
        question: "Nothing beats Scotch Eggs as bar food but who came up with it?",
        answers: {
            answer1: "Ireland",
            answer2: "England",
            answer3: "Scotland",
            answer4: "Canada",
            getCorrect:  function() {
                return this.answer2;
            },
            correctDetail: `(England) The London department store Fortnum & Mason claims to have invented Scotch eggs in 
            1851 but the name for the snack was supposedly derived from a nickname used by Londoners who lived 
            around Wellington Barracks after Officers of the Scots Guards stationed there developed a taste for the snack`
        },
        imageUrl: "img/scotcheggs2.jpeg",
        imageAlt: `Three Scotch egg halves, yolk up, and one half down on a wooden cutting board with a cup 
        of mustard. Scotch eggs are medium hard eggs wrapped in sausage, rolled in breadcrumbs and fried.`
      },
      {
        question: "Hamburgers might surprise you-who enjoyed the first?",
        answers: {
            answer1: "United States",
            answer2: "Germany",
            answer3: "Scotland",
            answer4: "Sweden",
            getCorrect:  function() {
                return this.answer1;
            },
            correctDetail: `(US) The term hamburger originally derives from Hamburg, Germany's s
            econd-largest city but the actual sandwich may have been done first in New Haven CT, 
            in 1900 Louis Lassen, a Danish immigrant, owner of Louis' Lunch.`
        },
        imageUrl: "img/hamburger2.jpeg",
        imageAlt: "grilled beef patty on a sesame seed bun with ketchup and pickles."
      },
      {
        question: "Mix your soy and Wasabi-who brought us Sushi?",
        answers: {
            answer1: "South America",
            answer2: "India",
            answer3: "Norway",
            answer4: "South East Asia",
            getCorrect:  function() {
                return this.answer4;
            },
            correctDetail: `(South East Asia) The earliest form of sushi, a dish today known as narezushi, 
            has its probable origin with paddy fields along the Mekong river in Southeast Asia. 
            The prototypical narezushi is made by lacto-fermenting fish with salt and rice in
             order to control putrefaction.`
        },
        imageUrl: "img/sushi3.jpeg",
        imageAlt: "An oval platter with sliced nori wrapped sushi rolls, stacked. Chopsticks lay across the platter."
      }

];


let score=0;
let answerIsCorrect = true;
let appState = "start-view";
let resultMessage;
let currentQuestion = 0;
let loseInfo = {
    image: "img/you-lose.gif",
    imageAltText: "Willy Wonka You Lose",
    message: "You lose sir! Good day!"

};

let winInfo = {
    image: "img/you-win.gif",
    imageAltText: "Dancing captain picard",
    message: "Congratulations! You Won!"
}

const STORE = [{
    question: "Where did Perogies come from?",
    answers: {
        answer1: "Russia",
        answer2: "Poland",
        answer3: "Ukraine",
        answer4: "Hungary",
        getCorrect: function() {
            return this.answer3;
        },
        correctDetail: "(Ukraine) Some contend that pierogi were brought to Poland by Saint Hyacinth of Poland, who brought them back from Kiev (the center of Kievan Rus', nowadays the capital of Ukraine)."
    },
    imageUrl: "img/perogi2.jpeg",
    imageAlt: "white, round plate with seven perogi with light browning."
  }];
// As a user, I should be able to start the quiz
// this function will listen for teh start button to be clicked
function startQuiz(){
    renderView('start-view');
    $('.js-start-button').on('click', function() {
        appState = "question-view";
        renderView(appState);
    });
  console.log('`startQuiz` ran');
    //listen for answer 
}

function buildStartView() {
    console.log('buildStartView Ran');
    let finishedHtml = $(`<section id="start-view" class="">
    <header role="banner" class="header">
        <h1 class="heading">Food Origin Master</h1>
    </header>
    <main role="main" class="container main">
        <h3 class="text-center">Are YOU a food origin master?</h3>
        <button class="js-start-button btn-red">Start Quiz</button>
    </main>
</section>`);
    return finishedHtml;
}

function buildQuestionView(STORE) {
    let question = STORE[0].question;
    let answer1 = STORE[0].answers.answer1;
    let answer2 = STORE[0].answers.answer2;
    let answer3 = STORE[0].answers.answer3;
    let answer4 = STORE[0].answers.answer4;
    let imageUrl = STORE[0].imageUrl;
    let imageAlt = STORE[0].imageAlt;

    let builtQuestionView = $(`<section id="question-view" class="">
    <header role="banner" class="header">
        <h1 class="heading">Food Origin Master</h1>
        <h2 class="question-number">${currentQuestion + 1} of 10</h2>
        <h2 class="score">Score: <span class="score-number">${score}</span></h2>
    </header>
    <main role="main" class="container">
        <section class="question">
            <img class="js-question-image question-image" src="${imageUrl}" alt="${imageAlt}">
            <h5 class="js-question-text question-text">${question}</h5>
        </section>
        <form class="js-answer-form answer-form" action="">
            <label for="${answer1}" class="hide">${answer1}</label>
            <input class="btn-red" type="button" name="${answer1}" data-answer="1" value="${answer1}"></input>

            <label for="${answer2}" class="hide">${answer2}</label>
            <input class="btn-red" type="button" name="${answer2}" data-answer="2" value="${answer2}"></input>

            <label for="${answer3}" class="hide">${answer3}</label>
            <input class="btn-red" type="button" name="${answer3}" data-answer="3" value="${answer3}"></input>

            <label for="${answer4}" class="hide">${answer4}</label>
            <input class="btn-red" type="button" name="${answer4}" data-answer="4" value="${answer4}"></input>
        </form>
    </main>
</section>`
    );
    return builtQuestionView; 
}

function buildResultView(STORE) {
    let imageUrl = STORE[0].imageUrl;
    let imageAlt = STORE[0].imageAlt;
    let correctDetail = STORE[0].answers.correctDetail;

    let builtHtml = $(`<section id="results-view" class="">
    <div class="shadow">
        <main role="main" class="lightbox">
            <img src="${imageUrl}" alt="${imageAlt}">
            <h5 class="result">${resultMessage}</h5>
            <p class="expanded-answer">${correctDetail}</p>
            <button class="btn-red next-question-btn" aria-label="next question">Next Question</button>
        </main>
    </div>
</section>`);

    return builtHtml;

}

function buildEndView() {
    let imageUrl;
    let imageAltText;
    let message;
    if(score >= 7) {
        imageUrl = winInfo.image;
        message = winInfo.message;
        imageAltText = winInfo.imageAltText;
    } else {
        imageUrl = loseInfo.image;
        message = loseInfo.message;
        imageAltText = loseInfo.imageAltText;
    }
    

    return $(`<section id="end-view" class="">
    <header role="banner" class="header">
        <h1>Food Origin Master</h1>
    </header>
    <main role="main" class="container">
        <h3 class="score">Score: ${score}/10</h3>
        <img class="result-image" src="${imageUrl}" alt="${imageAltText}">
        <p class="result-text">${message}</p>
        <button class="js-retake-quiz btn-red" aria-label="retake quiz">Retake Quiz</button>
    </main>
</section>`);   
}

// As a user, I should be able to view the questions and answers.
// This function will render the quiz question with answers to select
function renderView(appState){
    //grab information from store

    if(appState === "start-view") {
        let finishedHtml = buildStartView(STORE);
        $('.body').html(finishedHtml);
    }

    if(appState === "question-view") {
        let finishedHtml = buildQuestionView(STORE);
        $('.body').html(finishedHtml);
        checkAnswer();
    }

    if(appState === "results-view") {
        let finishedHtml = buildResultView(STORE);
        $('.body').html(finishedHtml);
    }

    if(appState === "end-view") {
        let finishedHtml = buildEndView(STORE);
        $('.body').html(finishedHtml);
    }

  console.log(`currentQustion${currentQuestion}`);  
  console.log('`renderView` ran');
    
}

// As a user, I should be able to select an answer.
// this function compares the checked answer to the correct answer for a T/F
function checkAnswer(){
  //listen for click on anwser button
  let answerText;

  function evaluateAnswer(answerToEvaluate) {
    return answerToEvaluate === STORE[0].answers.getCorrect();
    }

  $('.js-answer-form').on('click', function(event) {
    event.preventDefault();
    console.log('`checkAnswer` ran');
    //grab inner text of button that was clicked
    answerText = event.target.value;

    //compare button text to correct: in STORE
    answerIsCorrect = evaluateAnswer(answerText);
    showAnswerResult();
  });
}

// As a user, I should be able to find out if that answer was correct.
// this function renders the question result page showing the correct answer 
function showAnswerResult(){
  console.log('showAnswerResult ran');
  //determine if answer was correct or not
  if(answerIsCorrect) {
      //assign result sentence "correct" or "not correct"
      resultMessage = "Yaaay! You got it right!";
      //adjust score accordingly
      score++;
  } else {
      //assign result sentence "correct" or "not correct"
      resultMessage = "Awww, you got it wrong";
  }

  //render resultspage
  appState = "results-view";
  renderView(appState);
  moveToNextQuestion();
  currentQuestion++
  console.log(`score:${score}`);
}

// As a user, I should be able to move to the next question.
// this function listens for the next button to be activated & moves to next 
// question page
function moveToNextQuestion(){
     //detect click on next question button
    $('.next-question-btn').on('click', function(event) {
        if(currentQuestion <= 9) {
            STORE.pop();
            STORE.push(questionBank[currentQuestion]);
            appState = "question-view";
            renderView(appState);
        }

        if(currentQuestion > 9) {
            appState = "end-view";
            showFinalScore(); 
        }

    
    });
  console.log('`moveToNextQuestion` ran');
}

// As a user, I should be able to view my score at the end.
// this function displays the final score with a restart button to play again
function showFinalScore(){
    renderView(appState);
    replayQuiz();
    console.log('`showFinalScore` ran');
}

// As a user, I should have the option of restarting.
// this function listens for the quiz restart button and restarts if needed 
function replayQuiz(){
    $('.js-retake-quiz').on('click',function(event){
        score = 0;
        currentQuestion = 0;
        appState = "start-view";
        STORE.pop();
        STORE.push(questionBank[currentQuestion]);
        startQuiz();
    });
  console.log('`replayQuiz` ran');
}

// this function runs all functions below to rerender DOM as needed
function foodQuizFunctions(){
  startQuiz();
}

$(foodQuizFunctions());