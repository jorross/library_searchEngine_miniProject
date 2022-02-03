var outer_div = $('#outer_div');
var userInputEl = $("#userInput");
var selectorInputEl = $("#selectorInput");
var selectedEl = selectorInputEl.children('selected');

var requestUrl = "https://www.loc.gov/search/?fo=json"

var new_url;

function search(event) {
    event.preventDefault()

    fetch(requestUrl.replace('search', selectorInputEl.innerHTML) + '&q='+ userInputEl.val()).then(function(response) {
        console.log(response);
        // new_url = requestUrl.concat("");
        console.log(new_url);
        return response.json()
    })
    .then(function(data) {
        console.log(data);
    });
}

outer_div.on('click', 'button', search)
