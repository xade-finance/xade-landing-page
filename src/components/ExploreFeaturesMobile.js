import React from "react";
import "../styles/style.css";

function ExploreFeaturesMobile() {
  return (
    <>
      <div>
        <div className="ultimate-wrapper-astendo">
          <div className="article-wrapper-mobile">
            <div className="article-box">
              <div className="left-flex-article">
                <p>Global payments</p>
              </div>
              <div className="right-flex-article">
                <p style={{ textAlign: "left" }}>
                  Send payments all around the globe in multiple stablecoins
                  with close to zero fees through our advanced blockchain
                  technology
                </p>
                <img
                  style={{ width: "100%" }}
                  src="https://www.xade.finance/Media/Illustration.svg"
                />
              </div>
              {/* <div className="learnDiv">
                <button
                  style={{
                    textAlign: "center",
                    backgroundColor: "black",
                    width: "50%",
                    height: "95%",
                  }}
                  className="learnMore"
                >
                  Learn More
                </button>
              </div> */}
            </div>
            <div className="article-box" style={{ backgroundColor: "#d1ff4e" }}>
              <div className="left-flex-article">
                <p>Stable savings</p>
              </div>
              <div className="right-flex-article">
                <p style={{ textAlign: "left" }}>
                  Earn up to 8.1% APY with our stable savings account which is
                  designed to provide a yield more than your common regional
                  inflation rate
                </p>
                <img
                  style={{ width: "86.5%" }}
                  src="https://www.xade.finance/Media/Illustration-2.svg"
                />
              </div>
              {/* <div className="learnDiv">
                <button
                  style={{
                    textAlign: "center",
                    backgroundColor: "black",
                    width: "50%",
                    height: "95%",
                  }}
                  className="learnMore"
                >
                  Learn More
                </button>
              </div> */}
            </div>
            <div className="article-box" style={{ backgroundColor: "#4eeaff" }}>
              <div className="left-flex-article">
                <p>Pro Trading</p>
              </div>
              <div className="right-flex-article">
                <p style={{ textAlign: "left" }}>
                  Trade more than 5000 markets including stocks, crypto,
                  commodities with 10x leverage and short selling using
                  perpetual futures{" "}
                </p>
                <img
                  style={{ width: "79%" }}
                  src="https://www.xade.finance/Media/Illustration-3.svg"
                />
              </div>
              {/* <div className="learnDiv">
                <button
                  style={{
                    textAlign: "center",
                    backgroundColor: "black",
                    width: "50%",
                    height: "95%",
                  }}
                  className="learnMore"
                >
                  Learn More
                </button>
              </div> */}
            </div>
            <div className="article-box" style={{ backgroundColor: "#fFd84e" }}>
              <div className="left-flex-article">
                <p>Secured Loans</p>
              </div>
              <div className="right-flex-article">
                <p style={{ textAlign: "left" }}>
                  Get secured loans against multiple real world tokenized assets
                  without any credit score check and at competitive rates with
                  our super app
                </p>
                <img
                  style={{ width: "107%" }}
                  src="https://www.xade.finance/Media/Illustration-4.svg"
                />
              </div>
              {/* <div className="learnDiv">
                <button
                  style={{
                    textAlign: "center",
                    backgroundColor: "black",
                    width: "50%",
                    height: "95%",
                  }}
                  className="learnMore"
                >
                  Learn More
                </button>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ExploreFeaturesMobile;
