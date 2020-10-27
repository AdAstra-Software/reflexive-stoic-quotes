import "./styles.css";

const app = {
  welcome: () => {
    document.getElementById("quote").innerHTML = `Welcome to Stoic Quotes!`;
    document.getElementById(
      "explain"
    ).innerHTML = `A philosophical way to keep your focus on what really matters in your life`;
  },
  quotes: () => {},
  sortNextQote: () => {},
  refreshQuote: () => {},
  copyToClipboard: () => {},
  shareInSocial: () => {}
};

app.welcome();
