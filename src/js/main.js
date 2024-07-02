import {apiWordSearchFunction} from "./apiFunction.js"
import {makeElements} from "./makeElements.js"


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

const audioPlay = document.querySelector(".icon-search")

audioPlay.addEventListener("click", (event)=> { 
    console.log("antes do if")
        if(inputSearch.value == ""){
            return
        }

        console.log("passou")
        apiWordSearchFunction(inputSearch.value).then(result => makeElements(result))

})
