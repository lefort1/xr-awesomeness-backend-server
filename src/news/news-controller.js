import * as newsService from './news-service';

export const continuouslyServeNews = ws => {
    console.log("opened the news socket");
    ws.send(JSON.stringify(newsService.getNews()));

    ws.on('close', () => {
        console.log('news socket closed');
    });
}
