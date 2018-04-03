function alphabetize(a) {
    return a.toLowerCase().split("").sort().join("").trim();
}

document.getElementById("findButton").onclick = function () {
    var typedText = document.getElementById("input").value;

    
    for(i=0; i < words.length; i++) {
        if (alphabetize(words[i]) === alphabetize(typedText)) {
            var span = (document.createElement("span"));
            var textContent = document.createTextNode(words[i] + " ");
            span.appendChild(textContent);
            document.getElementById("div").appendChild(span);
        }
    }
}
