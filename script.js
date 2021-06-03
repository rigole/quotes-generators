// Get quote from API
const quoteContainer = document.getElementById('quote-container');
const quoteText = document.getElementById('quote');
const authorText = document.getElementById('author');
const twitterBtn = document.getElementById('twitter');
const newQuoteBtn = document.getElementById('new-quote');



async function getQuote() {
    const proxyUrl = 'https://cors-anywhere.herokuapp.com/';
    const apiUrl = 'https://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=json';
    try{

        const response = await fetch(proxyUrl+apiUrl);
        const data = await response.json();
        // if there are no longer author, put unknown
        if (data.quoteAuthor === 'Unknown'){
            authorText.innerText = 'Unknown';
        }else {
            authorText.innerText = data.quoteAuthor;
        }
        // reduce size for long quote
        if (data.quoteText.length > 50){
            quoteText.classList.add('long-quote');
        }else
        {
            quoteText.classList.remove('long-quote');
        }
        authorText.innerText = data.quoteAuthor;
        quoteText.innerText = data.quoteText;
    }catch (e) {
        getQuote();
        console.log('Oops No Quote', e);
    }
}

getQuote();