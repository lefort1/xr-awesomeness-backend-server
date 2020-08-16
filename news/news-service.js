const newsData = require('./news');

module.exports = {
    getNews: () => JSON.stringify(newsData)
};

//export async const getNews = () => await new Promise(news);
