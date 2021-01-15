'use strict';

/*   DATA   */

const quotes = {
  1: {
    quote: "Check your lipstick before you come for me.",
    author: "Naomi Smalls"
  },
  2: {
    quote: "Don’t get bitter, just get better.",
    author: "Alyssa Edwards"
  },
  3: {
    quote: "You can’t spell legendary without… leg!",
    author: "Naomi Smalls"
  },
  4: {
    quote: "Facts are facts, America.",
    author: "Monique Heart"
  },
  5: {
    quote: "No T, no shade, no pink lemonade.",
    author: "Jasmine Masters"
  },
  6: {
    quote: "That was a choice.",
    author: "Tatiana"
  },
  7: {
    quote: "Is there something on my face?",
    author: "Pearl"
  },
  8: {
    quote: "This is not RuPaul’s Best Friend Race!",
    author: "Lashauwn Beyond"
  },
  9: {
    quote: "Because I am what? Sickening!",
    author: "Shangela"
  },
  10: {
    quote: "Miss Vanjie… Miss Vanjie… Miss Vanjie!",
    author: "Vanessa Vanjie Mateo"
  },
  11: {
    quote: "The shade, the shade of it all.",
    author: "Latrice Royale"
  },
  12: {
    quote: "If you can’t love yourself, how the hell are you going to love somebody else?",
    author: "RuPaul"
  },
  13: {
    quote: "5Gs please: Good God Girl Get a Grip.",
    author: "Latrice Royale"
  },
  14: {
    quote: "You both called me losers, and I don’t see you out there walking children in nature.",
    author: "Tammie Brown"
  },
  15: {
    quote: "Excuse your mouth.",
    author: "Tammie Brown"
  },
  16: {
    quote: "Anus-thing is possible.",
    author: "Alaska"
  },
  17: {
    quote: "The only vers I am is Versace.",
    author: "Aquaria"
  },
  18: {
    quote: "Without dirty thoughts, there are only dirty dishes.",
    author: "Katya"
  },
  19: {
    quote: "Party.",
    author: "Adore Delano"
  },
  20: {
    quote: "Gia’s a fishy girl, she's C.C.C. – Crazy, Cuckoo, C*nt!",
    author: "Gia Gunn"
  },
  21: {
    quote: "Giving you the Ooh-ah-ah sensation!",
    author: "Monique Heart"
  },
  22: {
    quote: "Giving you the Ooh-ah-ah sensation!",
    author: "Monique Heart"
  },
}

/*   COMPONENTS   */

function Text(props) {
  return (
    <div id="text">
      <h2>{props.quote}</h2>
    </div>
  );
}

function Author(props) {
  return (
    <div id="author">
      <h3>— {props.author}</h3>
    </div>
  );
}

function NewQuote(props) {
  return (
    <button id="new-quote" onClick={props.onClick}>
      New Quote
    </button>
  );
}

function TweetQuote(props) {
  return (
    <a id="tweet-quote" href="https://twitter.com/intent/tweet" target="_blank">Tweet This</a>
  );
}

/*   MAIN COMPONENT   */

class QuoteBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quote: "",
      author: "",
    };
  }
  
  getRandomQuote() {
    const qLen = Object.keys(quotes).length
    const randi = Math.floor((Math.random() * qLen))
    const randQuote = quotes[Object.keys(quotes)[randi]]
    
    this.setState({
      quote: randQuote.quote,
      author: randQuote.author
    });
  }
  
  componentDidMount() {
    console.log("mounted")
    this.getRandomQuote()
  }
  
  render() {
    return (
      <div id="quote-box">
        <Text quote={this.state.quote} />
        <Author author={this.state.author} />
        <div id="links">
          <TweetQuote />
          <NewQuote onClick={() => this.getRandomQuote()} />
        </div>
      </div>
    )
  };
}

/*   RENDER TO DOM   */

ReactDOM.render(
  <QuoteBox />,
  document.getElementById('app')
)
