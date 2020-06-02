'use strict';

// your code here
function printResult() {

  $('form').submit(event => {
    event.preventDefault();
    const inputValue = $('input').first().val();
    console.log(inputValue);

    let result = inputValue;

    $('.js-results').empty();

    inputValue % 15 === 0 ? result = 'fizzbuzz'
      : inputValue % 5 === 0 ? result = 'buzz'
        : inputValue % 3 === 0 ? result = 'fizz'
          : '';

    $(document).ready(function () {
      let newParagraph = document.createElement('p');
      newParagraph.innerHTML = `<div class="fizz-buzz-item"><span>${result}</span></div>`;
      $('.js-results').append(newParagraph);
    });

  });

}

$(printResult);