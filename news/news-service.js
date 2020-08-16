const newsData = require('./news');

module.exports = {
    getNews: () => {
        console.log("bro im in here....")
        return JSON.stringify(newsData);
    }
};

//export async const getNews = () => await new Promise(news);
