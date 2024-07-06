export function makeElements(result) {
  makeElementsWordSearch(result);

  makeElementsMeanings(result[0].meanings);

  makeElementSource(result);

  const iconPlay = document.querySelector(".audio-play");

  iconPlay.addEventListener("click", () => {
    const audioAudio = document.querySelector(".audio-audio");
    audioAudio.play();
  });
}

function makeElementsWordSearch(result) {
  const divDynamicText = document.querySelector(".dynamic-text");
  divDynamicText.innerHTML = "";

  const divWordSearch = document.createElement("div");
  divWordSearch.classList.add("div-word-search");

  const wordSearch = document.createElement("div");
  wordSearch.classList.add("word-search");
  const wordSearchH1 = document.createElement("h1");
  wordSearchH1.classList.add("text-5xl", "lightmode")
  wordSearchH1.innerText = result[0].word;
  const wordSearchP = document.createElement("p");
  wordSearchP.classList.add("text-xl")
  findTextPhonetic(result[0].phonetics, wordSearchP);

  wordSearch.append(wordSearchH1, wordSearchP);
  divWordSearch.appendChild(wordSearch);

  const wordSearchIconPlay = document.createElement("div");
  wordSearchIconPlay.classList.add("word-search-icon-play");
  const wordSearchIconPlayImg = document.createElement("img");
  wordSearchIconPlayImg.src = "./src/img/icon-play.svg";
  wordSearchIconPlayImg.classList.add("audio-play");
  const audioAudio = document.createElement("audio");
  audioAudio.classList.add("audio-audio");
  findAudioPhonetic(result[0].phonetics, audioAudio);
  audioAudio.controls = true;

  wordSearchIconPlay.append(wordSearchIconPlayImg, audioAudio);
  divWordSearch.appendChild(wordSearchIconPlay);

  divDynamicText.appendChild(divWordSearch);
  console.log(divDynamicText);
  console.log(divWordSearch);
}

function findTextPhonetic(arrayPhonetics, element) {
  let textPhonetic = "";
  arrayPhonetics.forEach((item) => {
    if (item.text) {
      textPhonetic = item.text;
      element.innerText = textPhonetic;
    } else {
      element.innerText = "phonetic text not found";
    }
  });
}

function findAudioPhonetic(arrayPhonetics, elementAudio) {
  let srcPhonetic = "";
  arrayPhonetics.forEach((item) => {
    if (item.audio) {
      srcPhonetic = item.audio;
      elementAudio.src = srcPhonetic;
    }
  });
}

function makeElementsMeanings(arrayMeanings) {
  const divDynamicText = document.querySelector(".dynamic-text");

  arrayMeanings.forEach((item) => {
    const divMeaning = document.createElement("div");
    divMeaning.classList.add("divMeaning");

    const h3PartOfSpeach = document.createElement("h3");
    h3PartOfSpeach.innerText = item.partOfSpeech;
    h3PartOfSpeach.classList.add("part-of-speech", "text-xl", "lightmode");

    const pMeaning = document.createElement("p");
    pMeaning.innerText = "Meaning";
    pMeaning.classList.add("meaning", "text-xl");

    const listaUl = document.createElement("ul");
    listaUl.classList.add("text-base", "lightmode")

    item.definitions.forEach((item) => {
      const li = document.createElement("li");
      li.innerText = item.definition;
      listaUl.appendChild(li);
    });

    const synonymsText = document.createElement("p");
    let textSynonyms = " ";

    divMeaning.append(h3PartOfSpeach, pMeaning, listaUl);

    if (item.synonyms.length != 0) {
      item.synonyms.forEach((item) => {
        console.log(item);
        textSynonyms = textSynonyms + item + "; ";
      });

      synonymsText.innerHTML =
        "<p class='synonymous text-xl'>Synonymous:<span>" + textSynonyms + "</span>" + "</p>";
      divMeaning.appendChild(synonymsText);
    }

    divDynamicText.appendChild(divMeaning);
  });
}

function makeElementSource(result){

  const divDynamicText = document.querySelector(".dynamic-text");

  const divSource = document.createElement("div")
  divSource.classList.add("div-source")

  const link = result[0].sourceUrls[0]

  const divSourceP = document.createElement("p")
  divSourceP.innerText ="Source: "
  const divSourceSpan = document.createElement("span")
  divSourceSpan.innerHTML = '<span>' + link + '<img src="./src/img/icon-new-window.svg"  alt="new window"></span>'

  divSourceSpan.addEventListener("click", function(){
    window.open(link, "_blank")
  })

  divSource.append(divSourceP, divSourceSpan)

  divDynamicText.appendChild(divSource)


}