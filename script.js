const theSun = document.getElementById("the-sun");

const theEarth = document.getElementById("earth");

const planetMars = document.getElementById("mars");

const planetUranus = document.getElementById("uranus");

const planetVenus = document.getElementById("venus");

const planetPluto = document.getElementById("pluto");

const planetJupiter = document.getElementById("jupiter");

const planetMercury = document.getElementById("mercury");

const planetNeptune = document.getElementById("neptune");

const planetSaturn = document.getElementById("saturn");

const theMoon = document.getElementById("the-moon");

const calculateAll = document.getElementById("calculate-all");

function calculate() {
    let calcSun = Math.floor(theSun * 27.01);
    let calcEarth = Math.floor(theEarth * 1);
    let calcMars = Math.floor(planetMars * 0,38);
    let calcUranus = Math.floor(planetUranus * 0.92);
    let calcVenus = Math.floor(planetVenus * 0.91);
    let calcPluto = Math.floor(planetPluto * 0.06);
    let calcJupiter = Math.floor(planetJupiter * 2.34);
    let calcMercury = Math.floor(planetMercury * 0.38);
    let calcNeptune = Math.floor(planetNeptune * 1.19);
    let calcSaturn = Math.floor(planetSaturn * 1.06);
    
}

function calculateWeight(e) {
    let textData = document.createElement("p");
    if (e.target === planetJupiter) {
        planetJupiter = Math.floor(planetJupiter * 2.34)
        return textData += `${planetJupiter}`;
    }
}

console.log("Hello from JavaScript");