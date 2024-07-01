// Declare variables below to save the different divs of your story.
//screens
let StoryOpening = document.querySelector(".StoryOpening")

let AbnigationScreen = document.querySelector(".AbnigationScreen")
let ErioditeScreen = document.querySelector(".ErioditeScreen")
let CandorScreen = document.querySelector(".CandorScreen")
let AmnityScreen = document.querySelector(".AmnityScreen")

let AbnigationActionScreen = document.querySelector(".AbnigationActionScreen")
let ErioditeActionScreen = document.querySelector(".ErioditeActionScreen")
let CandorActionScreen = document.querySelector(".CandorActionScreen")
let AmnityActionScreen = document.querySelector(".AmnityActionScreen")

let AbnigationLoseScreen = document.querySelector(".AbnigationLoseScreen")
let AbnigationWinScreen = document.querySelector(".AbnigationWinScreen")
let ErioditeLoseScreen = document.querySelector(".ErioditeLoseScreen")
let ErioditeWinScreen = document.querySelector(".ErioditeWinScreen")
let CandorLoseScreen = document.querySelector(".CandorLoseScreen")
let CandorWinScreen = document.querySelector(".CandorWinScreen")
let AmnityLoseScreen = document.querySelector(".AmnityLoseScreen")
let AmnityWinScreen = document.querySelector(".AmnityWinScreen")

//Starting screen buttons
let Abnigation = document.querySelector(".Abnigation")
let Eriodite = document.querySelector(".Eriodite")
let Candor = document.querySelector(".Candor")
let Amnity = document.querySelector(".Amnity")

//losing/wining buttons
let AbnigationLose = document.querySelector(".AbnigationLose")
let AbnigationWin = document.querySelector(".AbnigationWin")

let ErioditeWin = document.querySelector(".ErioditeWin")
let ErioditeLose = document.querySelector(".ErioditeLose")

let CandorWin = document.querySelector(".CandorWin")
let CandorLose = document.querySelector(".CandorLose")

let AmnityWin = document.querySelector(".AmnityWin")
let AmnityLose = document.querySelector(".AmnityLose")
//back to start buttons
let AbnigationLoseBackToStart = document.querySelector(".AbnigationLoseBackToStart")
let AbnigationWinBackToStart = document.querySelector(".AbnigationWinBackToStart")
let ErioditeWinBackToStart = document.querySelector(".ErioditeWinBackToStart")
let ErioditeLoseBackToStart = document.querySelector(".ErioditeLoseBackToStart")
let CandorWinBackToStart = document.querySelector(".CandorWinBackToStart")
let CandorLoseBackToStart = document.querySelector(".CandorLoseBackToStart")
let AmnityWinBackToStart = document.querySelector(".AmnityWinBackToStart")
let AmnityLoseBackToStart = document.querySelector(".AmnityLoseBackToStart")


// When you're ready to make event handlers, uncomment the code below. 
//  - Then fill in the blanks with the correct variables.

//From open screen to 1st Faction screen to Action Screen
Abnigation.addEventListener("click", function(){
    StoryOpening.style.display = "none";
    AbnigationScreen.style.display = "block";
    setTimeout(()=>{
        AbnigationScreen.style.display = "none";
        AbnigationActionScreen.style.display = "block";
    }, 5000);
});


Eriodite.addEventListener("click", function(){
    StoryOpening.style.display = "none";
    ErioditeScreen.style.display = "block";
    setTimeout(()=>{
        ErioditeScreen.style.display = "none";
        ErioditeActionScreen.style.display = "block";
    }, 
    5000);
});

Candor.addEventListener("click", function(){
    StoryOpening.style.display = "none";
    CandorScreen.style.display = "block";
    setTimeout(()=>{
        CandorScreen.style.display = "none";
        CandorActionScreen.style.display = "block";
    }, 
    5000);
});

Amnity.addEventListener("click", function(){
    StoryOpening.style.display = "none";
    AmnityScreen.style.display = "block";
    setTimeout(()=>{
        AmnityScreen.style.display = "none";
        AmnityActionScreen.style.display = "block";
    }, 
    5000);
});


//faction action screens to loose/win screen
//abnigation action screens to loose/win screen
AbnigationLose.addEventListener('click', function(){
    AbnigationActionScreen.style.display = "none";
    AbnigationLoseScreen.style.display = "block";
});
AbnigationWin.addEventListener('click', function(){
    AbnigationActionScreen.style.display = "none";
    AbnigationWinScreen.style.display = "block";
});
//eriodite action screens to loose/win screen
ErioditeLose.addEventListener('click', function(){
    ErioditeActionScreen.style.display = "none";
    ErioditeLoseScreen.style.display = "block";
});
ErioditeWin.addEventListener('click', function(){
    ErioditeActionScreen.style.display = "none";
    ErioditeWinScreen.style.display = "block";
});
//candor action screens to loose/win screen
CandorLose.addEventListener('click', function(){
    CandorActionScreen.style.display = "none";
    CandorLoseScreen.style.display = "block";
});
CandorWin.addEventListener('click', function(){
    CandorActionScreen.style.display = "none";
    CandorWinScreen.style.display = "block";
});
//amnity action screens to loose/win screen
AmnityLose.addEventListener('click', function(){
    AmnityActionScreen.style.display = "none";
    AmnityLoseScreen.style.display = "block";
});
AmnityWin.addEventListener('click', function(){
    AmnityActionScreen.style.display = "none";
    AmnityWinScreen.style.display = "block";
});
//back to start button
AbnigationLoseBackToStart.addEventListener("click", function(){
    AbnigationLoseScreen.style.display = "none";
    StoryOpening.style.display = "block";
});
AbnigationWinBackToStart.addEventListener("click", function(){
    AbnigationWinScreen.style.display = "none";
    StoryOpening.style.display = "block";
});
ErioditeWinBackToStart.addEventListener("click", function(){
    ErioditeWinScreen.style.display = "none";
    StoryOpening.style.display = "block";
});
ErioditeLoseBackToStart.addEventListener("click", function(){
    ErioditeLoseScreen.style.display = "none";
    StoryOpening.style.display = "block";
});
CandorWinBackToStart.addEventListener("click", function(){
    CandorWinScreen.style.display = "none";
    StoryOpening.style.display = "block";
});
CandorLoseBackToStart.addEventListener("click", function(){
    CandorLoseScreen.style.display = "none";
    StoryOpening.style.display = "block";
});
AmnityWinBackToStart.addEventListener("click", function(){
    AmnityWinScreen.style.display = "none";
    StoryOpening.style.display = "block";
});
AmnityLoseBackToStart.addEventListener("click", function(){
    AmnityLoseScreen.style.display = "none";
    StoryOpening.style.display = "block";
});



// INSERT_VARIABLE.addEventListener('click', function(){

// });


// INSERT_VARIABLE.addEventListener('click', function(){

// });