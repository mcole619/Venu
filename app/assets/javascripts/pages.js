$(document).ready(function() {
  $('#search-artist input').keypress(function(e) {
    console.log(e);
    if (e.keyCode === 13) {
      getData();
    }
  });  
});

function getData() {    
  $('#artist-name').html("");
  $('#shows').html("");
  var artist = $('#search-artist input').val();
  $("#artist-name").append(artist);
  $.ajax({
    url: "http://ws.audioscrobbler.com/2.0/?method=artist.getevents&artist="+artist+"&api_key=894064fca12d26335a68f014d98f4145&format=json"
  }).done(function ( data ) {
    console.log(data.events.event);
    // data.events.event.each(console.log(event.title));
    for (var i=0; i < data.events.event.length; i++) {
      $('#shows').append('<li>'+data.events.event[i].startDate+" "+data.events.event[i].venue.name+" "+data.events.event[i].venue.location.city+ ","+data.events.event[i].venue.location.country+"</li>");
    }
  });
}