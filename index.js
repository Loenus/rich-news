// initizialize the news api parameters
let apiKey = '8143654a92b145118bdf86ac22fc048b';
let sito = 'cointelegraph.com,cryptonomist.ch,ansa.it,investing.com,bloomberg.com,cnn.com';

var url = `https://newsapi.org/v2/everything?domains=${sito}&q=bitcoin&sortBy=publishedAt&apiKey=${apiKey}`;
