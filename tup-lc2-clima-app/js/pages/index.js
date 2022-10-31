const CartaDatosClima = document.getElementById("card");



function Cargar(){
    var x = document.getElementById("ciudades");
    var a = JSON.parse(localStorage.getItem('CITIES'));
    var b = a.length;
    var i;
    for (i=0; i<b; i++) {
        x.options.add(new Option (a[i], a[i]));
    }
}

const obtDatos= async () => {
    try {
        let City = document.getElementById("ciudades").value;
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${City}&appid=${Api}&units=metric&lang=es`;
        const res = await fetch(url);
        if (res.ok) {
            const datos = await res.json();
            console.log(datos);
            CartaDatosClima.innerHTML = `
            <h2>${datos.name}</h2>
            <h3><img src="http://openweathermap.org/img/wn/${datos.weather[0].icon}@2x.png"></h3>
            <p>Temperatura: ${datos.main.temp}º</p>
            <p>Sensación Térmica: ${datos.main.feels_like}º</p>
            <p>Humedad: ${datos.main.humidity}%</p>
            <p>Viento: ${datos.wind.speed}Km/h</p>
            <p>Presión: ${datos.main.pressure} P</p>
            
            `
            document.getElementById("card").style.display = "block";
        } else {
            console.log(res.status); // 404
            
        }
    } catch (err) {
        console.log(err);
    }
};
