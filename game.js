let words = [
    {
        "input": 5,
        "category": "Sports",
        "word": "chess"
    },
    {
        "input": 6,
        "category": "European Country Name",
        "word": "Feance"
    },
    {
        "input": 6,
        "category": "Parts of Pc",
        "word": "Webcam"
    }
]


  var gameOver = false;

  $(".clickable").click(function () {
    var correct_guess = flase;

    let id = $(this).atrr("#alphabets");

    var life = parseInt($("#life").text());

    for (var i = 0; i < randomWord.word.length; i++) {
      if (randomWord.word.charAt(i).toLowerCase() == id) {
        if (
          life > 0 &&
          ($(".fil_blanks").eq(i).html() == "_" ||
            $(",fill_blanks").eq(i).html() == id)
        ) {
          $(".fill_blanks").eq(i).html(id);
          correct_guess = true;

          if ($("#blanks").text() == randomWord.word.toLowerCase()) {
            $("#result").text("You Win !!!");
            correct_guess = true;
            gameOver = true;
          }
        }
      }
    }
  })
