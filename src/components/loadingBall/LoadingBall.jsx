import React, { useState, useEffect } from "react";
import "./LoadingBall.scss";
const LoadingBall = () => {
  const [quote, setQuote] = useState("");

  useEffect(() => {
    fetch("https://quotesondesign.com/wp-json/wp/v2/posts/?orderby=rand")
      .then((response) => response.json())
      .then((data) => {
        let resp = data[Math.floor(Math.random() * 9)].content.rendered.replace(
          /<\/?p>/gi,
          ""
        ); //regex for removing <p></p>
        // resp = resp.substring(0, 200);
        console.log(resp);
        setQuote(resp);
      })
      .catch((error) => console.error(error));
  }, []);

  return (
    quote && (
      <div className="ball-wrapper">
        <div className="ball">
          <p className="para">{quote}</p>
        </div>
      </div>
    )
  );
};
export default LoadingBall;
