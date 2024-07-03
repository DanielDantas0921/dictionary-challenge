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

const iconSearch = document.querySelector(".icon-search")

iconSearch.addEventListener("click", (event)=> { 
        if(inputSearch.value == ""){
            return
        }

        console.log("passou")
        apiWordSearchFunction(inputSearch.value).then(result => makeElements(result))

})

