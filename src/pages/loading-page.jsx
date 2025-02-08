import React from "react";
import "../styles/page/loading-page.css";

const LoadingPage = () => {
  return (
    <React.Fragment>
      <div className="loading-page">
        <div className="scene">
          <div className="shadow" />
          <div className="jumper">
            <div className="spinner">
              <div className="scaler">
                <div className="loader">
                  <div className="cuboid">
                    <div className="cuboid__side" />
                    <div className="cuboid__side" />
                    <div className="cuboid__side" />
                    <div className="cuboid__side" />
                    <div className="cuboid__side" />
                    <div className="cuboid__side" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default LoadingPage;
