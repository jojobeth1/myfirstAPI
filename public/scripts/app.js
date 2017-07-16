

/*function handleSuccess(json) {
  // takes an array of albums and renders them as an unordered list
  var albums = json;
  var imgHtml = '<img src="/images/cat.jpg" />';
  var outputHtml = imgHtml + '<ul>';
  albums.forEach(function(album) {
    outputHtml = outputHtml + "<li>" + album.artist + " -- " + album.title + "</li>";
    outputHtml = outputHtml + `<img src="${album.imageUrl}" />`;
  });
  outputHtml += '</ul>';
  $('#albumTarget').html(outputHtml);
}
*/
