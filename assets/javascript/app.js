$(document).ready(function () {
//variable
var correct 
var incorrect
var start
var retry
var locale = 0
//questions & awnsers

   var question0 = {
    query: "Who is the founder of Marvel Comics ?",
    choiceA: "Stan Lee",
    choiceB: "Martin Goodman",
    choiceC: "Bruce Wayne",
    choiceD: "Adam Warlock",
    }

    var question1 = {
        query: "What is Superman's weakness ?",
        choiceA: "Women",
        choiceB: "Water",
        choiceC: "Tv",
        choiceD: "Kyrptonite",
    }
    
    var question2 = {
        query: "How many Robin's have existed in the Batman storyline ?",
        choiceA: "2",
        choiceB: "3",
        choiceC: "4",
        choiceD: "5",
    }
    var question3 = {
        query: "Who were the orignal X-Men ?",
        choiceA: "Cyclops, Marvel Girl, Beast, Angel, Iceman",
        choiceB: "Cyclops, Jean Gray, Wolverine, Storm, Proffesor Xavier",
       choiceC: "Gambit, Beast, Magneto, Iceman, Nightcrawler",
       choiceD: "Wolverine, Nightcrawler, Colossus, Warpath, Gambit", 
    }
    var question4 = {
        query: "Who is Deadpool based on ?",
        choiceA: "Wolverine",
        choiceB: "Deathstrike",
        choiceC: "Hulk",
        choiceD: "Black Panther",
    }
    var question5 = {
        query: "What color was the original Hulk ?",
        choiceA: "Blue",
        choiceB: "Red",
        choiceC: "Gray",
        choiceD: "Green",
    }
    var question6 = {
        query: "How many Iron Man suits has Tony Stark created ?",
        choiceA: "5",
        choiceB: "17",
        choiceC: "30",
        choiceD: "Over 50",
    }
    var question7 = {
        query: "Who was a Batman love interest ?",
        choiceA: "Catwoman",
        choiceB: "Batgirl",
        choiceC: "Wonder Woman",
        choiceD: "All of the above",
    }
    var question8 = {
        query: "What comic book character did Michael Jackson want to play in the movies ?",
        choiceA: "Howard the Duck",
        choiceB: "Spiderman",
        choiceC: "Green Arrow",
        choiceD: "Dr. Strange",
    }
    var question9 = {
         query: "Who owns the rights to the word superhero ?",
        choiceA: "DC",
        choiceB: "Marvel",
        choiceC: "Both companies",
        choiceD: "Neither/someone else",
    }
    var questions = [question0, question1, question2, question3, question4, question5, question6, question7, question8, question9] 
//functions
  function  startTime(){
      time = 30;
      clearInterval(decreaseTime)
      decreaseTime = setInterval(timeOutput, 1000);
  }
  function timeOutput(){
      $("#timer").html(timeOutput);
      time--;
      $("#timer").html(timeOutput);

      if (time===0){
          alert("Times Up")
      }
  }

 }
 // listeners
 $("button").click(nextquestion));















})