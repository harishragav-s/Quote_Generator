const quotes = [
  {
    text: "The best way to get started is to quit talking and begin doing.",
    author: "Walt Disney"
  },
  {
    text: "Success is not in what you have, but who you are.",
    author: "Bo Bennett"
  },
  {
    text: "Dream bigger. Do bigger.",
    author: "Robin Sharma"
  },
  {
    text: "Don't watch the clock; do what it does. Keep going.",
    author: "Sam Levenson"
  },
  {
    text: "Great things never come from comfort zones.",
    author: "Unknown"
  },
];

const quoteText = document.getElementById('quote');
const authorText = document.getElementById('author');
const quoteBox = document.getElementById('quoteBox');
const newQuoteBtn = document.getElementById('newQuote');
const tweetBtn = document.getElementById('tweetBtn');

function showQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  const selected = quotes[randomIndex];

  // Add fade effect
  quoteBox.style.opacity = 0;

  setTimeout(() => {
    quoteText.innerText = `"${selected.text}"`;
    authorText.innerText = `— ${selected.author}`;
    tweetBtn.href = `https://twitter.com/intent/tweet?text="${selected.text}" — ${selected.author}`;
    quoteBox.style.opacity = 1;
  }, 300);
}

newQuoteBtn.addEventListener('click', showQuote);
