
let key  = "h"

let sentence = "T h e r  e l a t i o n s h i p b e t w e e n  ."
 

var word = new  RegExp('(\\w*'+key+'\\w*)','gi')
let matchs  =  sentence.match(word)

console.log(` ${matchs.length} match(s) was found`)

 

