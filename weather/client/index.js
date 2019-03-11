
document.getElementById('get_city').addEventListener('submit', async function(event){
  event.preventDefault();
  
  try{
    let city_name = document.getElementById('city_name').value;
    let response = await fetch('http://127.0.0.1:8090/city?city_name=' + city_name,
                               {
                                 method: "GET"
                               });
    if(response.ok){
      let body = await response.text();
      let weatherJSON = JSON.parse(body);
      document.getElementById('locations').innerHTML =
        `<span> ${weatherJSON.consolidated_weather[0].weather_state_name} </span>`;
      alert (body);
    } else {
      throw new Error("problem getting city" + response.code);
    }
  } catch (error) {
    alert ("problem: " + error);
  }
});
