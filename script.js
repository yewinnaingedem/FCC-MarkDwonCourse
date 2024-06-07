$(document).ready(function() {
  function fetchQuote() {
      let randomColor = getRandomColor();
      $.ajax({
          url: 'https://api.quotable.io/random',
          method: 'GET',
          success: function(response) {
              $('body').css('background-color' , randomColor);
              $('body').removeClass('bg-success');
              $('#text').css('background-color' , randomColor);
              $('#text').removeClass('bg-success');
              $('#text').text(response.content);
              $('#author').text(`- ${response.author}`);
          },
          error: function(xhr, status, error) {
              console.error('Request failed with status:', status, 'and error:', error);
          }
      });
  }

  // Fetch a quote when the page loads
    fetchQuote();
  $('#new-quote').on('click' , fetchQuote) ;
});

function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}