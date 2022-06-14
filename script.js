window.onload = function () {
  if (localStorage.getItem("city") === null) {
      localStorage.setItem('city', 'zaporizhia');
      location.reload();
  }
}

function Complete(){

    try {
        let st = document.getElementById("city").value;
        localStorage.city = st;
    } 
    catch {
        localStorage.city = "London,uk";
    }
}

fetch(`https://api.openweathermap.org/data/2.5/weather?q=${localStorage.city}&appid=00edbe89a7a181e365763906fb70ef96&units=metric&lang=ua`)
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
    document.querySelector('.today').innerHTML =  new Date(data.dt * 1000).toLocaleString();
    document.querySelector('.city-name').textContent = data.name;
    document.querySelector('.temperature').innerHTML = (data.main.temp) + '&deg;';
    document.querySelector('.pogoda').textContent = data.weather[0].description;
    document.querySelector('.pic').innerHTML = `<img src="http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png">`;

  })
  .catch(function (){
      //catch any errors
  });
  
