// initizialize the news api parameters
let apiKey = '8143654a92b145118bdf86ac22fc048b';
let sito = 'cointelegraph.com,ansa.it,bloomberg.com,cnn.com';
let sito2 = 'cryptonomist.ch,investing.com';

var url = `https://newsapi.org/v2/everything?domains=${sito}&pageSize=100&sortBy=publishedAt&apiKey=${apiKey}`; //q=bitcoin&
var url2 = `https://newsapi.org/v2/everything?domains=${sito2}&pageSize=100&sortBy=publishedAt&apiKey=${apiKey}`; //q=bitcoin&

let Notizie1 = document.getElementById('Notizie1')
let Notizie3 = document.getElementById('Notizie3')
let Notizie5 = document.getElementById('Notizie5')
let Notizie6 = document.getElementById('Notizie6')

let Notizie2 = document.getElementById('Notizie2')
let Notizie4 = document.getElementById('Notizie4')

function refresh() {
  let request = new XMLHttpRequest();
  request.open('GET', url, true);
  
  request.onreadystatechange = function() {
    if(request.readyState === XMLHttpRequest.DONE && request.status === 200) {
      let json = JSON.parse(request.responseText);
      let articles = json.articles;
      let newsHtml_1 = "";
      let newsHtml_3 = "";
      let newsHtml_5 = "";
      let newsHtml_6 = "";
      // per ogni notizia ricevuta dall'API
      articles.forEach(function (element, index) {
        // creo la scheda della notizia
        let news = `<div class="col">
                      <div class="card h-100">
                        <img src=${element["urlToImage"]} class="card-img-top" alt="...">
                        <div class="card-body">
                          <h5 class="card-title">${element["title"]}</h5>
                          <p class="card-text">${element["description"]}</p>
                        </div>
                        <a href=${element["url"]} class="btn btn-primary" target="_blank">Vai alla notizia</a>
                        <div class="card-footer">
                          <small class="text-muted">${element["publishedAt"]}</small>
                        </div>
                      </div>
                    </div>`;
        // la metto nel contenitore corrispondente alla giusta colonna
        switch (articles[index].source.name) {
          case "Cointelegraph": newsHtml_1 += news; break;
          case "ANSA.it": newsHtml_3 += news; break;
          case "Bloomberg": newsHtml_5 += news; break;
          case "CNN": newsHtml_6 += news; break;
          default: console.log("Errore: Sito non in elenco");
        }
      });
      // aggiorno la colonna
      if (newsHtml_1!="") Notizie1.innerHTML = newsHtml_1;
      if (newsHtml_3!="") Notizie3.innerHTML = newsHtml_3;
      if (newsHtml_5!="") Notizie5.innerHTML = newsHtml_5;
      if (newsHtml_6!="") Notizie6.innerHTML = newsHtml_6;
    }
  }
  request.send();


  let request2 = new XMLHttpRequest();
  request2.open('GET', url2, true);
  request2.onreadystatechange = function() {
    if(request2.readyState === XMLHttpRequest.DONE && request2.status === 200) {
      let json = JSON.parse(request2.responseText);
      let articles = json.articles;
      let newsHtml_2 = "";
      let newsHtml_4 = "";
      // per ogni notizia ricevuta dall'API
      articles.forEach(function (element, index) {
        // creo la scheda della notizia
        let news = `<div class="col">
                      <div class="card h-100">
                        <img src=${element["urlToImage"]} class="card-img-top" alt="...">
                        <div class="card-body">
                          <h5 class="card-title">${element["title"]}</h5>
                          <p class="card-text">${element["description"]}</p>
                        </div>
                        <a href=${element["url"]} class="btn btn-primary">Vai alla notizia</a>
                        <div class="card-footer">
                          <small class="text-muted">${element["publishedAt"]}</small>
                        </div>
                      </div>
                    </div>`;
        // la metto nel contenitore corrispondente alla giusta colonna
        switch (articles[index].source.name) {
          case "cryptonomist.ch": newsHtml_2 += news; break;
          case "Investing.com": newsHtml_4 += news; break;
          default: console.log("Errore: Sito non in elenco");
        }
      });
      // aggiorno la colonna
      if (newsHtml_2!="") Notizie2.innerHTML = newsHtml_2;
      if (newsHtml_4!="") Notizie4.innerHTML = newsHtml_4;
    }
  }
  request2.send();
}

window.onload = refresh()

const createClock = setInterval(refresh, 900000); //ogni 15min, richiama la funzione
