export function makeElements(result){

const wordSearchH1 = document.querySelector(".word-search h1")
const wordSearchP = document.querySelector(".word-search p")

wordSearchH1.textContent = result[0].word
findTextPhonetic(result[0].phonetics, wordSearchP)

const audioPlay = document.querySelector(".audio-play")
const audioAudio = document.querySelector(".audio-audio")

findAudioPhonetic(result[0].phonetics, audioAudio)
audioPlay.addEventListener("click", ()=> audioAudio.play())

// fazer parte do dynamic text da div para baixo

const divDynamicText = document.querySelector("dynamic-text")

makeElementsMeanings(result[0].meanings)


}



function findTextPhonetic(arrayPhonetics, element){
let textPhonetic = ""
arrayPhonetics.forEach((item)=>{

    if(item.text){
        textPhonetic = item.text
        element.innerText =textPhonetic
    } else {
        element.innerText = "phonetic text not found"
    }
})

}

function findAudioPhonetic(arrayPhonetics, elementAudio){
    let srcPhonetic = ""
    arrayPhonetics.forEach((item)=>{
        if(item.audio){
            srcPhonetic = item.audio
            elementAudio.src = srcPhonetic
        }
    })
}

function makeElementsMeanings(arrayMeanings){


    const divDynamicText = document.querySelector(".dynamic-text")
    divDynamicText.innerHTML = ""


    arrayMeanings.forEach((item)=>{

        const divMeaning = document.createElement("div")
        divMeaning.classList.add("divMeaning")

        const h3PartOfSpeach = document.createElement("h3")
        h3PartOfSpeach.innerText = item.partOfSpeech
        h3PartOfSpeach.classList.add("part-of-speech")

        const pMeaning = document.createElement("p")
        pMeaning.innerText = "Meaning"
        pMeaning.classList.add("meaning")

        const listaUl = document.createElement("ul")

        item.definitions.forEach((item)=>{
            const li = document.createElement("li")
            li.innerText = item.definition
            listaUl.appendChild(li)
        })



        const synonymsText = document.createElement("p")
        let textSynonyms = " "

        divMeaning.append(h3PartOfSpeach, pMeaning,listaUl)

        if(item.synonyms.length != 0){
           


            item.synonyms.forEach((item)=>{
                console.log(item)
                textSynonyms = textSynonyms + item + "; "
            })

            synonymsText.innerHTML= "<p class='synonymous'>Synonymous:" + textSynonyms + "</p>"
            divMeaning.appendChild(synonymsText)
        }

        divDynamicText.appendChild(divMeaning)
    })


}