import React from "react";
import "../../styles/components/loading.css";
const Loading = () => {
  return (
    <div className="rocket-loader">
      <div className="rocket">
        <div className="rocket-extras" />
        <div className="jet">
          <span />
        </div>
      </div>
    </div>
  );
};

export default Loading;
