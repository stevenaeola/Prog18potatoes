window.addEventListener('click', async function(event){
  let response = await fetch('http://127.0.01:8090/list');
  let body = await response.text();
  document.getElementById('content').innerHTML = "<ul>";

  let potatoes = JSON.parse(body);
  for(let i = 0; i < potatoes.length; i++){
    document.getElementById('content').innerHTML += "<li>" + potatoes[i] + "</li>";
  }

  document.getElementById('content').innerHTML += "</ul>";


});
