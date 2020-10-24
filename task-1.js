
let key  = "all"
let sentence = "The relationship  between the global city and its hinterland is one that usually glorifies the former as a dynamo of change, dragging the rest of the country along with it economically, socially and culturally. But in poor and ethnically diverse countries such as Sudan, these influences need to go the other way, to seep through to the margins of the state in order to create a strong national identity and develop the country all at once. In such weak and ethnically fractured states, cities can be parasites, feeding on their states, needing them to stay alive to thrive. The irony is that, as with all parasites, they inevitably end up killing themselves by exhausting their hosts."

let count = 0  
let match = []
sentence = sentence.trim().split(" ")
for (let index = 0; index < sentence.length; index++) {
    
    if(sentence[index].includes(key)) {
       count++ 
       match.push(sentence[index])
    } 
    
}

console.log(match); 