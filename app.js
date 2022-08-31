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

var a = [1, 2, 4, 9]

var wordArr = [
    {
        word: "dog",
        hint: "company you keep at home"
    },
    {
        word: "place",
        hint: "were you are anytime"
    },
    {
        word: "tree",
        hint: "it grouws on the ground"
    },
    {
        word: "computer",
        hint: "youre using it right now"
    }
]

var rN = Math.floor(Math.random() * wordArr.length);

var word = wordArr[rN].word;
var hint = wordArr[rN].hint;

document.getElementById("word").innerHTML= word;
document.getElementById("hint").innerHTML = hint;

var w = document.getElementById("word")

var correct = []

var counter = word.length + 2;

document.getElementById("wrong").innerHTML = counter;

var splitWord = word.split("");

var emptySplitWord = [];

console.log(splitWord)

for (i = 0; i < splitWord.length; i++) {
    emptySplitWord[i] = "_"
    console.log(emptySplitWord)
    document.getElementById("word").innerHTML = emptySplitWord.join(" ")

}

function enterLetter() {
    var letter = document.getElementById("letter").value;

    for ( x = 0; x < splitWord.length; x++) {
        if (letter == splitWord[x]){
            emptySplitWord[x] = letter;
            w.innerHTML = emptySplitWord.join("");
            document.getElementById("letter").value = "";
            correct.push(1)
        } else {
            document.getElementById("letter").value = "";
        }
    }

    if (correct.length == emptySplitWord.length) {
        alert("THE END")
    } else if (counter > 1) {
        counter = counter - 1;
        document.getElementById("wrong").innerHTML = counter;
    } else if (counter == 1) {
        alert("You Lost")
    }

}
