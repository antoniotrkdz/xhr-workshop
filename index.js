var input = document.querySelector('.search-query');
var submit = document.querySelector('.search-btn');
var result = document.querySelector('.search-results');
submit.addEventListener('click', submitSearch);

function submitSearch() {
  var encodedQuery = input.value.split(' ').join('+');
  var apiKey = 'dc6zaTOxFJmzC';
  var url = 'http://api.giphy.com/v1/gifs/search?q=' + encodedQuery + '&api_key=' + apiKey;
  var xhr = new XMLHttpRequest();

  xhr.onreadystatechange = function() {
    if(xhr.readyState === 4 && xhr.status === 200) {
      showResults(xhr.responseText);
    }
  }
  xhr.open('GET', url, true);
  xhr.send();
}

function showResults(res) {
  var imgArray = [];
  for (var i = 0; i < 12; i++) {
    imgArray.push(JSON.parse(res).data[i].images.fixed_width.url);
  }
  imgArray.forEach(function(imageURL) {
    var img = document.createElement('img');
    img.src = (imageURL);
    result.appendChild(img);
  })

}
