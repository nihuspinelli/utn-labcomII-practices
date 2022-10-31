


function getCitiesFromLocalStorage() {
    let cities = localStorage.getItem("CITIES");
    if (cities) {
        cities = JSON.parse(cities);
    } else {
        cities = [];
    }
    return cities;
}
function addCityToLocalStorage() {
    let newCity = document.getElementById("ciudades").value;
    newCity = newCity.toUpperCase();
    let cities = getCitiesFromLocalStorage();
    if (cities.indexOf(newCity)>=0){
        ocultar();
        AlertaAmarilla();
    } else {
        cities.push(newCity);
        ocultar();
        AlertaVerde();
    }
    localStorage.setItem("CITIES",JSON.stringify(cities));
}
const obtDatos= async () => {
    try {
        let City = document.getElementById("ciudades").value;
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${City}&appid=${Api}&units=metric&lang=es`;
        const res = await fetch(url);
        if (res.ok) {
            const datos = await res.json();
            addCityToLocalStorage();
            console.log(datos);
        } else {
            console.log(res.status); // 404
            ocultar();   
            AlertaRoja();    
        }
    } catch (err) {
        console.log(err);
    }
};
function ocultar() {
    document.getElementById('rojo').style.display = "none";
    document.getElementById('amarillo').style.display = "none";
    document.getElementById('verde').style.display = "none";
}
function AlertaRoja() {
    document.getElementById('rojo').style.display = "block";
}
function AlertaAmarilla() {
    document.getElementById('amarillo').style.display = "block";
}
function AlertaVerde() {
    document.getElementById('verde').style.display = "block";
}