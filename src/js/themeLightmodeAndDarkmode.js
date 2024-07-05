export function themeLightmodeAndDarkmode() {

  const elements = {
    body: document.body,
    fontPDescedente: document.querySelector(".font  > p"),
    boxfonts: document.querySelector(".box-fonts"),
    boxfontsP: document.querySelector(".box-fonts p"),
  };


  Object.values(elements).forEach(element => {
    if (element.classList.contains('lightmode')) {
      element.classList.remove('lightmode');
      element.classList.add('darkmode');
    } else {
      element.classList.remove('darkmode');
      element.classList.add('lightmode');
    }
  });


}
