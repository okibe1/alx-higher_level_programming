$(document).ready(function () {
  $('#btn_translate').click(translateHello);
  $('#language_code').keydown(function (event) {
    if (event.keyCode === 13) {
      translateHello();
    }
  });

  function translateHello() {
    const languageCode = $('#language_code').val();
    const apiUrl = 'https://www.fourtonfish.com/hellosalut/hello/';

    $.ajax({
      url: apiUrl + languageCode,
      success: function (response) {
        $('#hello').text(response.hello);
      },
      error: function () {
        $('#hello').text('Error fetching translation.');
      }
    });
  }
});
