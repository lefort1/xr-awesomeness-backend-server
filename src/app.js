import express from 'express';
import enableWs from 'express-ws';

import * as newsController from './news/news-controller';
import * as noteController from './notes/note-controller';
import * as portfolioController from './portfolio/portfolio-controller';
import * as priceChangeController from './price-changes/price-change-controller';

const app = express();
enableWs(app);


app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.get('/portfolio', (req, res) => portfolioController.getPortfolioData(req, res)); // Portfolio
app.ws('/news', ws => newsController.continuouslyServeNews(ws)); // News
app.ws('/note', ws => noteController.continuouslyServeNotes(ws)); // Notes
app.ws('/price-change', ws => priceChangeController.continuouslyServePriceChanges(ws)); // Price Changes

// Sammple 
app.ws('/', (ws, req) => {
    console.log("opened the echo socket");

    ws.on('message', msg => {
        ws.send("Hey, you sent me this: " + msg);
    })

    ws.on('close', () => {
        console.log('echo socket closed');
    })
});


app.listen(8080, () => {
    console.log('Listening on http://localhost:8080');
});
