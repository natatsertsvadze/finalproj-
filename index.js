'use strict'

const API_URL = "https://planets-api.vercel.app/api/v1/planets/"
const WIKIPEDIA_API_URL =  "https://en.wikipedia.org/wiki/"


const planetImg = document.querySelector("#planet-img")
const planetDescription = document.querySelector("#planet-description")
const planets = document.querySelectorAll(".planetss") 
const rotation = document.querySelector("#rotation")
const revolution = document.querySelector("#revolution")
const radius = document.querySelector("#radius")
const temperature = document.querySelector("#temperature")
const burger = document.querySelector(".burger")
const burgerBtsList = document.querySelector(".burger-bts-list")
const infoButtons = document.querySelectorAll(".information-buttons")
const overviewBtn = document.querySelector("#overview-btn")
const structureBtn = document.querySelector("#structure-btn")
const geologyBtn = document.querySelector("#geology-btn")
const body = document.querySelector("body")
const header = document.querySelector("header")
const wikipedia = document.querySelector(".wiki")
const planetsBurger = document.querySelectorAll (".planetss-2")
const planetName = document.querySelector(".planet-name")
const overviewBtn2 = document.querySelector ("#overview-btn2")
const  structureBtn2= document.querySelector ("#structure-btn2")
const  surfaceBtn2= document.querySelector ("#surface-btn2")
const infoBts2 = document.querySelectorAll (".info-bts")


const getPlanets = async (user) => {
    try {
        const response = await fetch(API_URL + user)
        const data = await response.json() 
        rotation.innerHTML= data.rotation
        revolution.innerHTML = data.revolution
        radius.innerHTML = data.radius
        temperature.innerHTML = data.temperature

        planetImg.innerHTML =`
        <img class="planet-img" src = "${data.images.planet}" alt = "image of the planet" />`
        planetDescription.innerHTML = `
        <h1 class="planet-name">${data.name}</h1>
        <p class="paragraph">${data.overview.content}</p>`

        overviewBtn.addEventListener ("click", () => {
        planetImg.innerHTML = `
        <img class="planet-img" src="${data.images.planet}" alt = "image of the planet"/>`
        planetDescription.innerHTML = `
        <h1 class="planet-name">${data.name} </h1>
        <p class="paragraph"> ${data.overview.content} <h1>`
         })

         structureBtn.addEventListener ("click", () => {
        planetImg.innerHTML = `
        <img class="planet-img" src="${data.images.internal}" alt = "image of the planet"/>`
        planetDescription.innerHTML = `
        <h1 class="planet-name">${data.name}</h1>
        <p class="paragraph">${data.structure.content} <h1>`
         })

         geologyBtn.addEventListener("click", () => {
        planetImg.innerHTML = `
        <div><img class="planet-img" src="${data.images.planet}" alt = "image of the planet"/>
        <img class="geology-img" src="${data.images.geology}" alt = "image of the planet"/></div>`
        planetDescription.innerHTML = `
        <h1 class="planet-name">${data.name}</h1>
        <p class="paragraph">${data.geology.content}<h1>`
         })

        overviewBtn2.addEventListener("click", () => {
        planetImg.innerHTML = `
        <img class="planet-img" src="${data.images.planet}" alt = "image of the planet"/>`
        planetDescription.innerHTML = `
        <h1 class="planet-name">${data.name} </h1>
        <p class="paragraph"> ${data.overview.content} <h1>`
         })

        structureBtn2.addEventListener ("click", () => {
        planetImg.innerHTML = `
        <img class="planet-img" src="${data.images.internal}" alt = "image of the planet"/>`
        planetDescription.innerHTML = `
        <h1 class="planet-name">${data.name}</h1>
        <p class="paragraph">${data.structure.content} <h1>`
         })

         surfaceBtn2.addEventListener("click", () => {
        planetImg.innerHTML = `
        <div><img class="planet-img" src="${data.images.planet}" alt = "image of the planet"/>
        <img class="geology-img" src="${data.images.geology}" alt = "image of the planet"/></div>`
        planetDescription.innerHTML = `
        <h1 class="planet-name">${data.name}</h1>
        <p class="paragraph">${data.geology.content}<h1>`
         })

         for(let i=0; i<infoButtons.length; i++) { 
            infoButtons[i].addEventListener ("click",  () => {
                document.querySelector(".clicked")?.classList.remove("clicked") 
                infoButtons[i].classList.add("clicked")

                for (let j = 0; j < infoButtons.length; j++) {
                    if (i != j) infoButtons[j].style.backgroundColor = ""
                }

                if (infoButtons[i].classList.contains("clicked")) {
                    infoButtons[i].style.backgroundColor = data.color
                } 


                wikipedia.addEventListener ('click', () => {
                    wikipedia.href = data.overview.source
                    
                    if (infoButtons[i].classList.contains("clicked") && infoButtons[i].textContent.includes("OVERVIEW") ) {
                        wikipedia.href = data.overview.source
                    } else if (infoButtons[i].classList.contains("clicked") && infoButtons[i].textContent.includes("INTERNAL STRUCTURE")) {
                        wikipedia.href = data.structure.source
                    } else if (infoButtons[i].classList.contains("clicked") && infoButtons[i].textContent.includes("SURFACE GEOLOGY")) {
                        wikipedia.href = data.geology.source
                    }

                })})
            }


         for(let a=0; a<infoBts2.length; a++) {
            infoBts2[a].addEventListener('click', () => {

                document.querySelector(".active")?.classList.remove("active")
                infoBts2[a].classList.add("active")

                if (infoBts2[a].classList.contains("active")) {
                    infoBts2[a].style.borderBottomColor = data.color
                    infoBts2[a].style.marginBottom = "0"
                } 
                            wikipedia.addEventListener ('click', ()=> {
                            if(infoBts2[a].classList.contains("active") && infoBts2[a].textContent.includes ("OVERVIEW")) {
                                wikipedia.href = data.overview.source
                            } else if (infoBts2[a].classList.contains("active") && infoBts2[a].textContent.includes("STRUCTURE")) {
                                wikipedia.href = data.structure.source
                            } else if (infoBts2[a].classList.contains("active") && infoBts2[a].textContent.includes("SURFACE")) {
                                wikipedia.href = data.geology.source 
                            }})
                        })
                        }
                }
         catch (error) {
            console.log(error)
        }
}
getPlanets("mercury")



for (let i=0; i<planets.length; i++) {
    planets[i].addEventListener('click', () => {
        getPlanets(planets[i].textContent) 
        document.querySelector(".active")?.classList.remove("active")
        planets[i].classList.add("active")
        
        if (planets[i].classList.contains("active") && planets[i].textContent === "MERCURY") {
            planets[i].style.borderTopColor = "rgb(65, 158, 187)" 
        } else if (planets[i].classList.contains("active") && planets[i].textContent === "VENUS") {
            planets[i].style.borderTopColor = "rgb(247, 204, 127)"
        } else if (planets[i].classList.contains("active") && planets[i].textContent === "EARTH") {
            planets[i].style.borderTopColor = "rgb(84, 91, 254)"
        } else if (planets[i].classList.contains("active") && planets[i].textContent === "MARS") {
            planets[i].style.borderTopColor ="rgb(255, 106, 69)"
        }else if (planets[i].classList.contains("active") && planets[i].textContent === "JUPITER") {
            planets[i].style.borderTopColor =  "rgb(236, 173, 122)"
        }else if (planets[i].classList.contains("active") && planets[i].textContent === "SATURN") {
            planets[i].style.borderTopColor = "rgb(252, 203, 107)"
        }else if (planets[i].classList.contains("active") && planets[i].textContent === "URANUS") {
            planets[i].style.borderTopColor =  "rgb(101, 240, 213)"
        }else if (planets[i].classList.contains("active") && planets[i].textContent === "NEPTUNE") {
            planets[i].style.borderTopColor ="rgb(73, 126, 250)"
        } 
                    }
        )
    }


const absEverything = document.querySelector(".abs-everything")
const headerTitle = document.querySelector(".header-title")

        burger.addEventListener ("click", () => {
            burgerBtsList.classList.toggle("show")
            if (burgerBtsList.classList.contains("show")) {
                burger.style.color = "gray" 
                absEverything.style.display = "none"
                headerTitle.style.display = "flex"
                burger.style.display = "flex"
                burgerBtsList.style.display="block"
                body.style.backgroundImage = "none"
                header.style.backgroundImage = "url('assets/background-stars.svg')"
                burger.style.opacity = "0.5"
            } else {
                absEverything.style.display = "block"
                burgerBtsList.style.display="none"
                body.style.backgroundImage = "url('assets/background-stars.svg')"
                header.style.backgroundImage = "url('assets/background-stars.svg')"
                burger.style.opacity = "1"
             }

for(let i = 0; i < planetsBurger.length; i++) {
    planetsBurger[i].addEventListener('click', (event) => {
        event.preventDefault(); 

        const planetName = planetsBurger[i].querySelector('.planets-link').textContent.toLowerCase(); // Get planet name from the link
        getPlanets(planetName); 

        burgerBtsList.style.display = "none"
        absEverything.style.display = "block"
        burgerBtsList.style.display="none"
        body.style.backgroundImage = "url('assets/background-stars.svg')"
        header.style.backgroundImage = "url('assets/background-stars.svg')"
        burger.style.opacity = "1"        
    });
}
        })