import { GetQuote, GetUrban } from "../Api";
import { useState } from "react";

const Content = () => {
  const [quoteList, setQuoteList] = useState([]);
  const [urbanList, setUrbanList] = useState([]);
  const [inputValue, setInputValue] = useState([]);
  const [selectedButton, setSelectedButton] = useState([]);

  const button = (type) => {
    if (type === "quotes") {
      GetQuote().then((result) => {
        setQuoteList(result);
        setSelectedButton("quotes");
      });
    } else if (type === "urban") {
      GetUrban(inputValue).then((result) => {
        setUrbanList(result.slice(0, 5));
        setSelectedButton("urban");
      });
    }
  };

  return (
    <div>
      <div className="headerContainer parent">
        <div className="quotesBar">
          <button className="cta">
            <span
              className="hover-underline-animation"
              onClick={() => button("quotes")}
            >
              {" "}
              CLICK HERE FOR QUOTE{" "}
            </span>
          </button>
        </div>

        <div className="pemisah">
          <u>q&d</u>
        </div>

        <div className="searchBar">
          <input
            placeholder="Type the urban word here"
            className="input"
            name="text"
            type="text"
            onChange={(e) => setInputValue(e.target.value)}
          ></input>
          <div className="urbanBar">
            <button className="cta" type="submit">
              <span
                className="hover-underline-animation"
                onClick={() => button("urban")}
              >
                {" "}
                SEARCH FOR URBAN WORD{" "}
              </span>
            </button>
          </div>
        </div>
      </div>
      <div className="contentContainer">
        {selectedButton === "quotes" ? (
          <div className="quoteContainer">
            <h3 className="isiContentContainer">{quoteList.content}</h3>
            <div className="author">
              <b>
                <i> {quoteList.originator.name}</i>
              </b>
            </div>
            <div className="source">{quoteList.originator.url}</div>
          </div>
        ) : selectedButton === "urban" ? (
          <div>
            {!urbanList.length && (
              <h3>
                Prithee, forgive my ignorance, but the word thou hast typed is
                unknown to me.
              </h3>
            )}
            <div>
              {urbanList.length > 0 && (
                <div>
                  <h2 className="urbanWord">
                    Resulf of: "{urbanList[0].word}"
                  </h2>
                  {urbanList.map((result, index) => {
                    return (
                      <div className="urbanList" key={index}>
                        <li>{result.definition}</li>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          </div>
        ) : (
          <h3>Please choose for Quote or Urban Dictionary First</h3>
        )}
      </div>
    </div>
  );
};

export default Content;
