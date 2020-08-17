import * as priceChangeService from './price-change-service';

export const continuouslyServePriceChanges = ws => {
    console.log("opened the price-change socket");
    ws.send(JSON.stringify(priceChangeService.getPriceChanges()));

    ws.on('close', () => {
        console.log('price-change socket closed');
    });
}