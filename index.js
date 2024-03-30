'use strict'
//1. გავაკეთო ზემოთ სახელთან რომ მოძრაობს ეგ სწორად
//2. ბურგერიდან გადადიოდეს მაგის გვერდებზე 
//3. ვიკიპედიის ლინკი გავასწორო და გდაიოდეს სწორად
//4. ქვემოთ რო ღილაკებია ეგენი იასამნისფრდებოდეს რომელსაც დავაჭერ

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
const structureBtn = document.querySelector("#structure-btn")
const overviewBtn = document.querySelector("#overview-btn")
const geologyBtn = document.querySelector("#geology-btn")
const body = document.querySelector("body")
const header = document.querySelector("header")
const planetsLink = document.querySelectorAll(".planets-link")
const wikipedia = document.querySelector(".wiki")


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
        <h1 class="planet-name">"${data.name}" </h1>
        <p class="paragraph"> "${data.overview.content}" </p>`

        overviewBtn.addEventListener ("click", () => {
            planetImg.innerHTML = `
        <img class="planet-img" src="${data.images.planet}" alt = "image of the planet"/>`
        planetDescription.innerHTML = `
        <h1 class="planet-name">"${data.name}" </h1>
        <p class="paragraph">" ${data.overview.content}" <h1>`
        })

         structureBtn.addEventListener ("click", () => {
        planetImg.innerHTML = `
        <img class="planet-img" src="${data.images.internal}" alt = "image of the planet"/>`
        planetDescription.innerHTML = `
        <h1 class="planet-name">"${data.name}" </h1>
        <p class="paragraph">" ${data.structure.content}" <h1>`
         })

         geologyBtn.addEventListener("click", () => {
            planetImg.innerHTML = `
            <div><img class="planet-img" src="${data.images.planet}" alt = "image of the planet"/>
            <img class="geology-img" src="${data.images.geology}" alt = "image of the planet"/></div>`
            planetDescription.innerHTML = `
            <h1 class="planet-name">"${data.name}" </h1>
            <p class="paragraph">" ${data.geology.content}" <h1>`
         })

         for(let i = 0; i < planetsLink.length; i++) {
            planetsLink[i].addEventListener ("click", () => {
                planetsLink[i].textContent = data.name
                console.log(planetsLink[i])
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
                    })
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
                header.style.backgroundImage = "url('../assets/background-stars.svg')"
            } else {
                absEverything.style.display = "block"
                burgerBtsList.style.display="none"
                body.style.backgroundImage = "url('../assets/background-stars.svg')"
             }
        })

for(let i=0; i< infoButtons.length; i++) { 
    infoButtons[i].addEventListener ("click",  () => {
        infoButtons[i].classList.toggle("clicked")
        if(infoButtons[i].classList.contains("clicked")){
            infoButtons[i].style.backgroundColor = "rgb(84, 91, 254)"
        } else if (infoButtons[i].style.backgroundColor = "rgb(84, 91, 254)") {
            infoButtons[i].style.backgroundColor = "unset"
        }
    })
}
