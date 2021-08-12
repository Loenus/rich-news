// initizialize the news api parameters
let apiKey = '8143654a92b145118bdf86ac22fc048b';
let sito = 'cointelegraph.com,cryptonomist.ch,ansa.it,investing.com,bloomberg.com,cnn.com';

var url = `https://newsapi.org/v2/everything?domains=${sito}&sortBy=publishedAt&apiKey=${apiKey}`; //q=bitcoin&

function refresh() {
  let request = new XMLHttpRequest();
  request.open('GET', url);
  
  request.onreadystatechange = function() {
    if(request.readyState === XMLHttpRequest.DONE && request.status === 200) {
      let json = JSON.parse(request.responseText);
      let articles = json.articles;
      let newsHtml_1 = "";
      let newsHtml_2 = "";
      let newsHtml_3 = "";
      let newsHtml_4 = "";
      let newsHtml_5 = "";
      let newsHtml_6 = "";
      
      articles.forEach(function (element, index) {
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
        switch (articles[0].source.name) {
            case "Cointelegraph": newsHtml_1 += news; break;
            case "cryptonomist.ch": newsHtml_2 += news; break; //
            case "ANSA.it": newsHtml_3 += news; break;
            case "Investing.com": newsHtml_4 += news; break;
            case "Bloomberg": newsHtml_5 += news; break;
            case "CNN": newsHtml_6 += news; break; //
            default: console.log("Errore: Sito non in elenco");
      });
        
      switch (articles[0].source.name) {
          case "Cointelegraph": Notizie1.innerHTML = newsHtml_1; break;
          case "cryptonomist.ch": Notizie2.innerHTML = newsHtml_2; break; //problematico
          case "ANSA.it": Notizie3.innerHTML = newsHtml_3; break;
          case "Investing.com": Notizie4.innerHTML = newsHtml_4; break;
          case "Bloomberg": Notizie5.innerHTML = newsHtml_5; break;
          case "CNN": Notizie6.innerHTML = newsHtml_6; break; //problematico ("cnn money" no, "cnn" si)
          default: console.log("Errore: Sito non in elenco");
      }
    }
    else { console.log("Some error occurred") }
  }
  request.send();
}
const createClock = setInterval(refresh, 900000); //ogni 15min, richiama la funzione
