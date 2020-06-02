'use strict';



function printResult(){

  $('form').submit( e => {
    e.preventDefault();
    const input = $('input').first().val();
    console.log(input);
    
    let r = input;

    $('.js-result').empty();
       
    input % 15 === 0 ? r = 'fizzbuzz'
      : input % 5 === 0 ? r = 'buzz'
        : input % 3 === 0 ? r = 'fizz'
          : '' ;


    $(document).ready(function(){
      let nP = document.createElement('p');
      nP.innerHTML = `<div class="fizz-buzz-item"><span>${r}</span></div>`;
      $('.js-result').append(nP);
    });
  });

}


$(printResult);