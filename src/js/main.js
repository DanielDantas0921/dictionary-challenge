import {apiWordSearchFunction} from "./apiFunction.js"
import {makeElements} from "./makeElements.js"
import {themeLightmodeAndDarkmode} from "./themeLightmodeAndDarkmode.js"


// apiWordSearchFunction("hello").then(result => makeElements(result))

// fazer função do input search e do icone

const inputSearch = document.querySelector(".input-search")

inputSearch.addEventListener("keydown", function (event){
    if(event.key == 'Enter'){
        event.preventDefault()
        
        if(inputSearch.value == ""){
            return
        }
        apiWordSearchFunction(inputSearch.value).then(result => makeElements(result))



    }
})

const iconSearch = document.querySelector(".icon-search")

iconSearch.addEventListener("click", (event)=> { 
        if(inputSearch.value == ""){
            return
        }

        console.log("passou")
        apiWordSearchFunction(inputSearch.value).then(result => makeElements(result))

})

// função para mostrar caixa de fontes
const divFontImg = document.querySelector(".font img")
const divFontP = document.querySelector(".font p")
const boxFonts = document.querySelector(".box-fonts")

divFontImg.addEventListener("click", function (){
   console.log("está funcionando")
  if(boxFonts.style.display == "block"){
    boxFonts.style.display = "none"
  }else{
    boxFonts.style.display = "block"
  }
    
})


divFontP.addEventListener("click", function (){
    console.log("está funcionando")
   if(boxFonts.style.display == "block"){
     boxFonts.style.display = "none"
   }else{
     boxFonts.style.display = "block"
   }
     
 })




// funções para mudar a fonte


const fontSansSerif = document.getElementById("fontSansSerif")
const fontSerif = document.getElementById("fontSerif")
const fontMono = document.getElementById("fontMono")
const fontP = document.querySelector(".font > p")

fontSansSerif.addEventListener("click", function (event){
    document.body.style.fontFamily= "Inter"
    fontP.innerText = "Sans Serif"
})

fontSerif.addEventListener("click", function (event){
    document.body.style.fontFamily = "Lora"
    fontP.innerText = "Serif"
})

fontMono.addEventListener("click", function (event){
    document.body.style.fontFamily = "Inconsolata"
    fontP.innerText = "Mono"
})

// const themeSwitcher = document.querySelector(".slider")
// themeSwitcher.addEventListener("click", function(){
//   themeLightmodeAndDarkmode()
// })

const themeSwitcher = document.querySelector(".slider")
themeSwitcher.addEventListener("click", function(){
  themeLightmodeAndDarkmode()
})
