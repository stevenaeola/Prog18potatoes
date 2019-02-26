window.addEventListener('click', async function(event){
  let response = await fetch('http://127.0.01:8090/list');
  let body = await response.text();
  document.getElementById('content').innerHTML=body;


/*
                        .then(function(response){
      if(response.ok){
        return 
      } else {
        return "oops";
      }})
   .then(body =>

    .catch(err => alert(err));
*/
});
