/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

const btnEl = document.getElementById("btn-el")
const inputEl = document.getElementById("input-el")
let lengthEl = document.getElementById("length")
let volumeEl = document.getElementById("volume")
let massEl = document.getElementById("mass")
let feet
let gallon
let pound

btnEl.addEventListener("click", function(){
    feet = inputEl.value * 3.281
    gallon = inputEl.value * 0.264
    pound = inputEl.value * 2.204

    lengthEl.innerHTML = `
    <h4>Length (Meter/Feet)</h4>
    <p>${inputEl.value} meters = ${feet.toFixed(2)} feet | ${inputEl.value} feet = ${(inputEl.value/3.281).toFixed(2)} meters </p>

    `
    volumeEl.innerHTML = `
    <h4>Volume (Liters/Gallons)</h4>
    <p> ${inputEl.value} liters = ${gallon.toFixed(2)} gallons | ${inputEl.value} gallons = ${(inputEl.value/0.264).toFixed(2)} liters </p>
    `
    massEl.innerHTML = `
    <h4> Mass (Kilograms/Pounds)</h4>
    <p>${inputEl.value} kilos = ${pound.toFixed(2)} pounds | ${inputEl.value} pounds = ${(inputEl.value/2.204).toFixed(2)} kilos</p>
    `


})
