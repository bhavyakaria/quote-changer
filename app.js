const exampleSocket = new WebSocket("ws://localhost:8080");

exampleSocket.onmessage = function (event) {
    setImage(event.data);
    console.log(event.data);
}

function setImage(quoteText) {
    var quote = document.getElementById("quote");
    var quoteParent = document.getElementById("center");
    quote.innerText = quoteText;
    quoteParent.appendChild(quote);
}

