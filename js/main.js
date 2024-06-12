var btn = document.getElementById('btn')
var output = document.getElementById('output')
let Quotes = [
    "“Be yourself; everyone else is already taken.” ― Oscar Wilde ",
    "“So many books, so little time.” ― Frank Zappa ",
    "“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.” ― Albert Einstein ",
    "“A room without books is like a body without a soul.” ― Marcus Tullius Cicero ",
    "“Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.” ― Bernard M. Baruch ",
    "“If you tell the truth, you don't have to remember anything.” ― Mark Twain ",
    "“A friend is someone who knows all about you and still loves you.” ― Elbert Hubbard ",
    " “To live is the rarest thing in the world. Most people exist, that is all.” ― Oscar Wilde "
]

btn.addEventListener('click',function(){
    var randomQuote = Quotes[Math.floor(Math.random() * Quotes.length)];
    output.innerHTML=randomQuote;
})