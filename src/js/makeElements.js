export function makeElements(result){

const wordSearchH1 = document.querySelector(".word-search h1")
const wordSearchP = document.querySelector(".word-search p")

wordSearchH1.textContent = result[0].word
findTextPhonetic(result[0].phonetics, wordSearchP)

const audioPlay = document.querySelector(".audio-play")
const audioAudio = document.querySelector(".audio-audio")

// audioAudio.src = findAudioPhonetic(result[0].phonetics, audioAudio)

findAudioPhonetic(result[0].phonetics, audioAudio)
audioPlay.addEventListener("click", ()=> audioAudio.play())

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
        console.log(item)
        if(item.audio){
            srcPhonetic = item.audio
            elementAudio.src = srcPhonetic
        }
    })
}