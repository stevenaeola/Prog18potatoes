document.getElementById('get').addEventListener('click', async function(event){
  let response = await fetch('http://127.0.01:8090/list');
  let body = await response.text();
  document.getElementById('content').innerHTML = "<ul>";

  let potatoes = JSON.parse(body);
  for(let i = 0; i < potatoes.length; i++){
    document.getElementById('content').innerHTML += "<li>" + potatoes[i] + "</li>";
  }

  document.getElementById('content').innerHTML += "</ul>";


});

document.getElementById('add_potato').addEventListener('submit', async function(event){
  event.preventDefault();
  
  try{
    let potato_type = document.getElementById('potato_type').value;
    let response = await fetch('http://127.0.01:8090/add',
                               {
                                 method: "POST",
                                 headers: {
                                   "Content-Type": "application/x-www-form-urlencoded"
                                 },
                                 body: "potato_type=" + potato_type
                               });
    if(!response.ok){
      throw new Error("problem adding potato" + response.code);
    }
  } catch (error) {
    alert ("problem: " + error);
  }
});
