import express from 'express';
import enableWs from 'express-ws';

import * as newsService from './news/news-service';

const app = express();
enableWs(app);


app.get('/', function(req, res) {
    res.send('Hello World!');
});

app.ws('/news', (ws, req) => {
    console.log("opened the news socket");
    ws.send(JSON.stringify(newsService.getNews()));

    ws.on('close', () => {
        console.log('news socket closed');
    });
});

app.ws('/echo', (ws, req) => {
    console.log("opened the echo socket");

    ws.on('message', msg => {
        ws.send(msg);
    })

    ws.on('close', () => {
        console.log('echo socket closed');
    })
});


app.listen(8080, () => {
  console.log('Listening on http://localhost:8080');
});
