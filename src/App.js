import React, { useEffect, useState } from "react";
import "./App.css";
import "./Quote.css";
import axios from "axios";

const App = () => {
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");

  const quoteAPI = async () => {
    let arrayOfQuotes = [];
    try {
      const data = await axios.get("https://api.quotable.io/random");

      arrayOfQuotes = data.data;
    } catch (error) {
      console.log(error);
    }

    try {
      setQuote(arrayOfQuotes.content);
      setAuthor(arrayOfQuotes.author);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    quoteAPI();
  }, []);

  return (
    <div className="App">
      <div className="quoteBox">
        <div className="container">
          <div className="quoteButton">
            {" "}
            <button onClick={quoteAPI}>Generete Quote</button>
          </div>
          <div className="quote">
            <h2>{quote}</h2>
          </div>
          <div className="author">{author}</div>
        </div>
      </div>
    </div>
  );
};

export default App;
