function displayText() {
  let interactiveText = 'Feel free to take a look around ٩(^ᴗ^)۶ !';
  let textArray = interactiveText.split(' ');
  let index = 0;
  let display = setInterval(function () {
    $('.interactive-text').append(`${textArray[index++]} `);
    if (index === textArray.length) {
      clearInterval(display)
    }
  }, 100);
}

function handleTextAnimation() {
  $('main').on('click', event => {
    event.preventDefault();
    $('.interactive-text').empty();
    displayText();
    $(this).off(event);
  });
}

function handleNavMenu() {
  $('.hamburger').on('click', event => {
    event.preventDefault();
    $('.nav-options').toggleClass('hidden');
  });

}

function handleNavItems() {
  $('.option-item a').on('click', event => {
    event.preventDefault();
    if ($(window).width() < 900) {
      $('.nav-options').toggleClass('hidden');      
    }
    let target = $(event.currentTarget).attr('href');
    if (target.includes('.pdf')) {
      window.open(target, '_blank');
    }
    else {
      window.location.href = target;
    }
  });
}

$(handleTextAnimation);
$(handleNavMenu);
$(handleNavItems);




