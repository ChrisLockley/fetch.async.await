import fetch from 'node-fetch';

async function start() {
    try {
    const response = await fetch('https://dog.ceo/api/breeds/list/all')
    const data =  response.json();
    console.log(data);
    } catch(error) {
        console.error(error);
    }
}

start();

// function createBreedList(breedList) {
//     //test hey
//     document.getElementById("breed").innerHTML = `
//     <select onchange="loadByBreed(this.value)">
//     <option>Choose a dog breed</option>
//     ${Object.keys(breedList).map(function (breed) {
//         return `<option> ${breed}</option>`
//     }).join('')}
//     </select>
//     `
// }