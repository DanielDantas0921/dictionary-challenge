export function themeLightmodeAndDarkmode() {
  // console.log(
  //   "ola tou funcionando no arquivo themeLightModeAndDarkmode antes de tudo"
  // );

  const elements = {
    body: document.body,
    fontPDescedente: document.querySelector(".font  > p"),
    boxfonts: document.querySelector(".box-fonts"),
    boxfontsP: document.querySelector(".box-fonts p"),
  };

  // o código a ser executado é esse de baixo que vai pegar todos os elementos do objeto acima e iterar sobre os valores dele

  Object.values(elements).forEach(element => {
    console.log(element)
    if (element.classList.contains('lightmode')) {
      element.classList.remove('lightmode');
      element.classList.add('darkmode');
    } else {
      element.classList.remove('darkmode');
      element.classList.add('lightmode');
    }
  });

  if(elements.body.classList.contains("lightmode")){
    elements.body.classList.remove("lightmode")
    elements.classList.add("darkmode")

  }






  // console.log("terminei sem error");
}
