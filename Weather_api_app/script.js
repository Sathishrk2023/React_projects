
    async function getWeather() {
      const city = document.getElementById("city").value;
      const apiKey = "4100ddae5e3e63e3b2d83e1299a79a5a"; // Replace with your OpenWeather API key
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;

      try {
        const response = await fetch(url);
        const data = await response.json();
        console.log(data)


        if (data.cod === 200) {
          document.getElementById("degree").innerHTML = `${data.main.temp}&deg;C`
          document.getElementById("place").innerHTML = `
            ${data.name}, ${data.sys.country}<br>          `;
          document.getElementById("humidity").innerHTML = `${data.main.humidity}`
          document.getElementById("wind").innerHTML = `${data.wind.speed}`
        } else {
          document.getElementById("place").innerHTML = "❌ City not found!";
        }
      } catch (error) {
        document.getElementById("place").innerHTML = "⚠️ Error fetching data";
      }
    }