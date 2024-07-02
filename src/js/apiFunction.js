export function apiWordSearchFunction(word){

    if(word == ""){
        return
    }

    return SearchData("https://api.dictionaryapi.dev/api/v2/entries/en" + "/" + word)

}

async function SearchData(url){
    const response = await fetch(url)

    if(!response.ok){
        console.log("aconteceu um error")
    }

    const data = await response.json();
    return data
}