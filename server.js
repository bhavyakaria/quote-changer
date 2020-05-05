const webSocket = require('ws');

const wss = new webSocket.Server({ port: 8080 });

const imageUrls = [
    '“The concept of hope is nothing more than giving up. A word that holds no true meaning.” – Madara Uchiha',
    '“Power is not will, it is the phenomenon of physically making things happen.” – Madara Uchiha',
    '“Like I always say, can’t find a door? Make your own.” – Edward Elric',
    '“Nothing’s perfect, the world’s not perfect, but it’s there for us, trying the best it can. That’s what makes it so damn beautiful.” – Roy Mustang',
    '“War does not determine who is right – only who is left.” – Riza Hawkeye',
    '“Wake up to reality! Nothing ever goes as planned in this world. The longer you live, the more you realize that in this reality only pain, suffering and futility exist.” – Madara Uchiha'
]

wss.on('connection', ws => {
    ws.on('message', message => {
        console.log(`Received message => ${message}`);
    });

    setInterval(function () {
        const imageUrl = getRandomImageUrl();
        ws.send(imageUrl);
    }, 5000);

});

function getRandomImageUrl() {
    const num = Math.floor(Math.random() * (4 - 0 + 1)) + 0;
    return imageUrls[num];
}