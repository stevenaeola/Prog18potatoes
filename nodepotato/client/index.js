window.addEventListener('click', function(event){
  fetch('http://127.0.01:8090/lost')
    .then(function(response){
      if(response.ok){
        return response.text();
      } else {
        return "oops";
      }})
   .then(body =>
         document.getElementById('content').innerHTML=body)
    .catch(err => alert(err));
});
