function getData(){
    var place = document.getElementById("place").value;
    var person = document.getElementById("person").value;
    var verb = document.getElementById("verb").value;
    var adj = document.getElementById("adj").value;
    var adverb = document.getElementById("adverb").value;

    
    document.getElementById("sentence").innerHTML = sentences
    (verb, adverb, person, adj, place);
    
    
    console.log([place, person, verb, adj, adverb]);
    return [place, person, verb, adj, adverb];
}   


function sentences(verb, adverb, person, adj, place){
    sentenceArray = [`Today I had to ${verb} ${adverb} but right in the middle of it ${person} came with this ${adj} book and i wanted to go too ${place}.`]
    

    ranN = Math.floor(Math.random() * sentenceArray.length)

    return sentenceArray[ranN];
    
}

console.log (sentences())