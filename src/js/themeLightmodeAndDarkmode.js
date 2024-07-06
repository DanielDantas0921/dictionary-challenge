export function themeLightmodeAndDarkmode() {
  
  const checkbox = document.querySelector(".theme-switcher input")
  const body = document.body
  const wordSearchh1Lightmode = document.querySelector(".word-search h1") 

  
  if(wordSearchh1Lightmode == null){
    checkbox.checked = true
    return
  }

  // if(wordSearchh1Lightmode.classList.contains("lightmode") && body.style.backgroundColor == "rgb(5, 5, 5)" ){
    
  //   checkbox.checked = false


  //   return
  // }

  
  
  const elements = {
    body: document.body,
    fontPDescedente: document.querySelector(".font  > p"),
    boxfonts: document.querySelector(".box-fonts"),
    boxfontsP: document.querySelectorAll(".box-fonts p"),
    inputSearch: document.querySelector(".input-search"),
    wordSearchh1: document.querySelector(".word-search h1"),
    partOfSpeach: document.querySelectorAll(".divMeaning h3"),
    divMeaningUl: document.querySelectorAll(".divMeaning ul")
  };

  Object.values(elements).forEach((element) => {
    if (element) {
      if (element instanceof NodeList) {
        console.log("temos uma nodelist");

        element.forEach((elementNodeList) => {
          if (elementNodeList.classList.contains("lightmode")) {
            elementNodeList.classList.remove("lightmode");
            elementNodeList.classList.add("darkmode");
          } else {
            elementNodeList.classList.remove("darkmode");
            elementNodeList.classList.add("lightmode");
          }
        });

        return;
      }

      if (element.classList.contains("lightmode")) {
        element.classList.remove("lightmode");
        element.classList.add("darkmode");
      } else {
        element.classList.remove("darkmode");
        element.classList.add("lightmode");
      }
    }
  });
}


export function toggleThemebugFix(){


  const body = document.body
  const bodyBackgroundColor = window.getComputedStyle(document.body).backgroundColor == "rgb(5, 5, 5)"

  setTimeout(()=>{
    const wordSearchH1 = document.querySelector(".word-search h1")
    // console.log("na função toggleThemeBuxFix o wordSarchH1 é " + wordSearchH1)
    if(wordSearchH1.classList.contains("lightmode") && bodyBackgroundColor){
      themeLightmodeAndDarkmode()
      if(body.classList.contains("lightmode")){
        body.classList.remove("lightmode")
        body.classList.add("darkmode")
      }
    }
  },1000)
  
 
}