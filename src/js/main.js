import {apiWordSearchFunction} from "./apiFunction.js"
import {makeElements} from "./makeElements.js"


apiWordSearchFunction("hello").then(result => makeElements(result))

