import React from "react";
import "../styles/page/error-page.css";

const ErrorPage = () => {
  return (
    <React.Fragment>
      <div className="error-page">
        <div id="wrap">
          <div className="hand hand-left">
            <span className="hand-part part-top" />
            <span className="hand-part part-middle" />
            <span className="hand-part part-bottom" />
          </div>
          <div className="hand hand-right">
            <span className="hand-part part-top" />
            <span className="hand-part part-middle" />
            <span className="hand-part part-bottom" />
          </div>
          <div className="line line-1">
            <div className="ball">5</div>
          </div>
          <div className="line line-2">
            <div className="ball">0</div>
          </div>
          <div className="line line-3">
            <div className="ball">5</div>
          </div>
          <div id="server">
            <div className="eye eye-left">
              <span />
            </div>
            <div className="eye eye-right">
              <span />
            </div>
            <div className="block">
              <div className="light" />
            </div>
            <div className="block">
              <div className="light" />
            </div>
            <div className="block">
              <div className="light" />
            </div>
            <div className="block">
              <div className="light" />
            </div>
            <div className="block">
              <div className="light" />
            </div>
            <div id="bottom-block">
              <div className="bottom-line" />
              <div id="bottom-light" />
            </div>
          </div>
        </div>
        <div id="code-error">
          <h1>Internal Server Error!</h1>
        </div>
      </div>
    </React.Fragment>
  );
};

export default ErrorPage;
