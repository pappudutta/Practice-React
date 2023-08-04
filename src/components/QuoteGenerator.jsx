import axios from "axios";
import React, { useEffect, useState } from "react";

const QuoteGenerator = () => {
  const [quotes, setQuotes] = useState([]);
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");

  let quoteNumber = Math.ceil(Math.random() * quotes.length);

  useEffect(() => {
    const fetchQuote = async () => {
      const res = await axios.get(`https://type.fit/api/quotes`);

      setQuotes(res.data);
    };
    fetchQuote();
  }, []);

  const getNewQuote = () => {
    setQuote(quotes[quoteNumber].text);
    setAuthor(quotes[quoteNumber].author);
  };

  return (
    <>
      <h3>Quote Generator</h3>

      <div>{quote}</div>
      <div> -- by {author}</div>
      <button onClick={getNewQuote}>New Quote</button>
    </>
  );
};

export default QuoteGenerator;
