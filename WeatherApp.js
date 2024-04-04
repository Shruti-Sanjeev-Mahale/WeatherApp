let apiKey="8e3b8cc639837acb8103ccc5024764de";
let city=document.getElementById("city");
let temp=document.getElementById("temp");
let hum=document.getElementById("hum");
let wind=document.getElementById("wind");

		function fetchData() {

			let cityName=document.getElementById("cityName").value;
			if (cityName!=" ") {

				fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}`)
				.then(resp=>resp.json())
				.then(data=>{
					city.innerHTML=data.name;
					temp.innerHTML=((data.main.temp)-273.15).toFixed(2)+" °C ";
					hum.innerHTML=data.main.humidity+ "%";
					wind.innerHTML=data.wind.speed+ "km/hr";
				})


			} else {

				alert("Enter a city name");
			}
			

		}