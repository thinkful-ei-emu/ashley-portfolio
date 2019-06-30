
function displayText () {
  let interactiveText = "Feel free to take a look around!";
  let textArray = interactiveText.split("");
  
  let sentence = "" 
  for (let i=0; i < textArray.length; i++){    
      sentence += textArray[i]
      if(sentence.length > 0){
        $('.interactive-text').text(`${sentence}`);

      }
      
    
  }
}

function handleTextAnimation (){
  console.log('handle ran')
 $('body').on('click', event => {
   event.preventDefault();
   $('.interactive-text').empty();
   displayText();

 }) 
}

$(handleTextAnimation);