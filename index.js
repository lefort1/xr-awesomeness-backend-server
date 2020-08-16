const express = require('express');
const enableWs = require('express-ws');

const newsService = require('./news/news-service');

const app = express();
enableWs(app);


app.ws('/news', (ws, req) => {
    console.log("opened the news socket");
    console.log('what??')
    console.log("this is what it looks like bro: " + newsService.getNews());
    ws.send(newsService.getNews());
    // ws.on('message', msg => {
    //     ws.send(msg);
    // });

    ws.on('close', () => {
        console.log('WebSocket was closed')
    });
});

app.ws('/echo', (ws, req) => {
    console.log("opened the echo socket");

    ws.on('message', msg => {
        ws.send(msg)
    })

    ws.on('close', () => {
        console.log('WebSocket was closed')
    })
})

app.listen(8080, () => {
  console.log('Listening on http://localhost:8080');
});
