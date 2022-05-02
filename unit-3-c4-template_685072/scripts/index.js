// Ude Import export (MANDATORY)
// Onclicking store the news in local storage with key "news" so that you can access that on news.html page


// link = https://masai-mock-api.herokuapp.com/news/top-headlines?country={country code}

import {navbar,search} from "../components/navbar.js"

let nav = document.getElementById("navbar")
nav.innerHTML=navbar()


let append = (data) =>{
    // console.log(data)
    const results = document.querySelector("#results"); 
    data.forEach((el)=>{
        let box = document.createElement("div")

        let img = document.createElement("img")
        img.src =el.urlToImage 
        img.style.height ="150px"

        let h = document.createElement("h3")
        h.innerText =el.title

        let p = document.createElement("p")
        p.innerText=el.description

        box.append(img,h,p)
        results.append(box)
    })
}
fetch("https://masai-mock-api.herokuapp.com/news/top-headlines?country=in").then((res) => res.json()).then((res) => append(res.articles))

document.querySelector("#search_input").addEventListener("keydown",search)
