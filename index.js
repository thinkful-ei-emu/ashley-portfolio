function displayText() {
  let interactiveText = "Feel free to take a look around ٩(^ᴗ^)۶ !";
  let textArray = interactiveText.split(" ");
  let index = 0;
 

  let display = setInterval(function() {
    $(".interactive-text").append(`${textArray[index++]} `);
    if(index === textArray.length){
    clearInterval(display)
    }}, 200);


}

function handleTextAnimation() {
  console.log("handle ran");
  $("body").on("click", event => {
    event.preventDefault();
    $('.interactive-text').empty();
    displayText();
     $( this ).off( event );
  });
 
}

$(handleTextAnimation);
