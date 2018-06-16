$(document).ready(function () {
    //variable
    var correct = 0
    var incorrect = 0
var intervalStart;
var intervalId;
    function run() {
        intervalStart = 30;
          clearInterval(intervalId);
          intervalId = setInterval(decrement, 1000);
        }
    
        //  The decrement function.
    function decrement() {
        $("#timer").html(intervalStart);
          //  Decrease number by one.
          intervalStart--;
    
          //  Show the intervalStart.
          $("#timer").html(intervalStart);
    
    
          //  Once intervalStart hits 0
          if (intervalStart === 0) {
            alert("Times Up")
            i++;
        incorrect++;
          $("#totalWrong").text("Incorrect:"+incorrect)
            loading();
           
     
          }
        }
    
        //  The stop function
    function stop() {
          //  Clears our intervalId
          clearInterval(intervalId);
        }
    
    
    //questions & awnsers
    var question0 = {
        trivia: "Who is the founder of Marvel Comics ?",
        choiceA: "Stan Lee",
        choiceB: "Martin Goodman",
        choiceC: "Bruce Wayne",
        choiceD: "Adam Warlock",
        awnser: "choiceB",
    }
    var question1 = {
        trivia: "What is Superman's weakness ?",
        choiceA: "Women",
        choiceB: "Water",
        choiceC: "Tv",
        choiceD: "Kyrptonite",
        awnser: "choiceD"
    }
    var question2 = {
        trivia: "How many Robin's have existed in the Batman storyline ?",
        choiceA: "2",
        choiceB: "3",
        choiceC: "4",
        choiceD: "5",
        awnser: "choiceD"
    }
    var question3 = {
        trivia: "Who were the orignal X-Men ?",
        choiceA: "Cyclops, Marvel Girl, Beast, Angel, Iceman",
        choiceB: "Cyclops, Jean Gray, Wolverine, Storm, Proffesor Xavier",
        choiceC: "Gambit, Beast, Magneto, Iceman, Nightcrawler",
        choiceD: "Wolverine, Nightcrawler, Colossus, Warpath, Gambit",
        awnser: "choiceA"
    }
    var question4 = {
        trivia: "Who is Deadpool based on ?",
        choiceA: "Wolverine",
        choiceB: "Deathstrike",
        choiceC: "Hulk",
        choiceD: "Black Panther",
        awnser: "choiceB"
    }
    var question5 = {
        trivia: "What color was the original Hulk ?",
        choiceA: "Blue",
        choiceB: "Red",
        choiceC: "Gray",
        choiceD: "Green",
        awnser: "choiceC"
    }
    var question6 = {
        trivia: "How many Iron Man suits has Tony Stark created ?",
        choiceA: "5",
        choiceB: "17",
        choiceC: "30",
        choiceD: "Over 50",
        awnser: "choiceD"
    }
    var question7 = {
        query: "Who was a Batman love interest ?",
        choiceA: "Catwoman",
        choiceB: "Batgirl",
        choiceC: "Wonder Woman",
        choiceD: "All of the above",
        awnser: "choiceD"
    }
    var question8 = {
        trivia: "What comic book character did Michael Jackson want to play in the movies ?",
        choiceA: "Howard the Duck",
        choiceB: "Spiderman",
        choiceC: "Green Arrow",
        choiceD: "Dr. Strange",
        awnser: "choiceB"
    }
    var question9 = {
        trivia: "Who owns the rights to the word superhero ?",
        choiceA: "DC",
        choiceB: "Marvel",
        choiceC: "Both companies",
        choiceD: "Neither/someone else",
        awnser: "choiceC"
    }

    var question10 = {
        trivia: "GAME OVER THANKS FOR PLAYING",
        choiceA: "",
        choiceB: "",
        choiceC: "",
        choiceD: "",
    }
    var questionArray = [question0, question1, question2, question3, question4, question5, question6, question7, question8, question9, question10]
    //functions
    // listeners
    i = 0
    function loading() {
        // starting here create a function that loads the next question
        $("#trivQuestion").text(questionArray[i].trivia);
        $("#choiceA").text(questionArray[i].choiceA);
        $("#choiceB").text(questionArray[i].choiceB);
        $("#choiceC").text(questionArray[i].choiceC);
        $("#choiceD").text(questionArray[i].choiceD);
        run();
    };
    loading();
    //correct and incorrect
    $("#totalCorrect").text(correct);
    $("#totalWrong").text(incorrect)
    //place questions on screen
    $("#red").on("click", function () {
        if ((questionArray[i].awnser) == "choiceA") {
            correct++;
            $("#totalCorrect").text("Correct:"+correct);
        } else {
            incorrect++;
        }
        i++; console.log("clicked red");
        $("#totalWrong").text("Incorrect:"+incorrect)
        loading();
    })
    //call function that loads the next question see line 
    $("#blue").on("click", function () {
        if ((questionArray[i].awnser) == "choiceB") {
            correct++;
            $("#totalCorrect").text("Correct:"+correct);
        } else {
            incorrect++;
        }
        i++; console.log("clicked blue");
        $("#totalWrong").text("Incorrect:"+incorrect)
        loading();
    })
    $("#green").on("click", function () {
        if ((questionArray[i].awnser) == "choiceC") {
            correct++;
            $("#totalCorrect").text("Correct:"+correct);
        } else {
            incorrect++;
        }
        i++; console.log("clicked green");
        $("#totalWrong").text("Incorrect:"+incorrect)
        loading();
    })
    $("#white").on("click", function () {
        if ((questionArray[i].awnser) == "choiceD") {
            correct++;
            $("#totalCorrect").text("Correct:"+correct);
        } else {
            incorrect++;
        }
        i++; console.log("clicked white");
        $("#totalWrong").text("Incorrect:"+incorrect)
        loading();
    })
    console.log(i)
    //click function
    //declare right and wrong questions
});